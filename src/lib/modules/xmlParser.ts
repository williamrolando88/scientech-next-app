import { Factura } from "@/src/types/xmlParsers";
import { xml2js } from "xml-js";
import { FacturaParser } from "../parsers/facturaParsers";

const cleanObjectTree = (obj: any): any => {
  if (obj === null || obj === undefined || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => cleanObjectTree(item));
  }
  const result: any = {};
  for (const key of Object.keys(obj)) {
    if (obj[key] && obj[key]["_text"]) {
      result[key] = obj[key]["_text"];
    } else {
      result[key] = cleanObjectTree(obj[key]);
    }
  }
  return result;
};

const facturaXmlToJs = (xmlText: string) => {
  const billData = xml2js(xmlText, {
    compact: true,
    ignoreAttributes: true,
  });

  const { _cdata, factura } = (billData as any)?.autorizacion?.comprobante;

  if (_cdata) {
    const data = xml2js(_cdata, {
      compact: true,
      ignoreAttributes: true,
    }) as any;

    if (data.factura) {
      return data.factura;
    } else {
      return data;
    }
  } else {
    return factura;
  }
};

export const parseFactura = (xmlText: string): Factura | null => {
  const convertedFactura = facturaXmlToJs(xmlText);
  const cleanFactura = cleanObjectTree(convertedFactura);

  const parsedFactura = FacturaParser.safeParse(cleanFactura);

  if (parsedFactura.success) {
    return parsedFactura.data;
  }

  return null;
};
