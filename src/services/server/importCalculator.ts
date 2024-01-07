import { FirestoreCollections } from "@/settings/firebase/firebaseAdmin.config";
import { ImportCalculator } from "@/types/importCalculator";

class ImportCalculatorServer {
  collection = FirestoreCollections.importCalculations;

  create = async (data: ImportCalculator) => {
    data.metadata.createdAt = new Date().getTime();
    data.metadata.updatedAt = new Date().getTime();
    const docRef = await this.collection.add(data);
    return docRef.id;
  };

  update = async (id: string, data: ImportCalculator) => {
    data.metadata.updatedAt = new Date().getTime();
    const response = await this.collection.doc(id).update(data);
    return response.writeTime;
  };
}

const ImportCalculatorStorage = new ImportCalculatorServer();

export default ImportCalculatorStorage;
