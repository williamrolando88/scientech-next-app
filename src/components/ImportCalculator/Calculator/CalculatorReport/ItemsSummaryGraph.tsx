"use client";
import Chart from "@/components/shared/chart";
import { useImportCalculatorContext } from "@/hooks/useCalculatorContext";
import { FC } from "react";

const ItemsSummaryGraph: FC = () => {
  const { values, reportValues } = useImportCalculatorContext();

  if (!reportValues.length) return null;

  return (
    <div className="w-full">
      <Chart
        height={values.items.length * 40 + 120}
        type="bar"
        series={reportValues}
        options={{
          chart: {
            type: "bar",
            stacked: true,
            stackType: "100%",
            height: "20px",
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          xaxis: {
            categories: values.items.map((item) => item.name),
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return `$ ${val}`;
              },
            },
          },
          title: {
            text: "Reporte de costos por artículo",
            align: "center",
          },
          legend: {
            position: "top",
            horizontalAlign: "center",
          },
        }}
      />
    </div>
  );
};

export default ItemsSummaryGraph;
