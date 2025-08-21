import { Chip } from "@heroui/react";
import { defectItems } from "./DefectItemsDescription";
import { useItem } from "../../hooks/useItem";

export const FindingsSummary = ({ currentFindings }) => {
  const getIconColorByCode = (code) => {
    const item = defectItems.find((item) => item.code === code);
    return item ? item.iconColor : "";
  };
  const { getItemById } = useItem();

  const countEvaluations = (evaluations) => {
    const summary = { l: 0, g: 0, mg: 0, total: 0 };

    evaluations.forEach((currentEval) => {
      const itemFound = getItemById(currentEval.item); // get full item info
      if (!itemFound || currentEval?.status == true) return; // safety check

      // assume each item has a code: "L", "G", or "MG"
      switch (itemFound.defect) {
        case "L":
          summary.l += 1;
          break;
        case "G":
          summary.g += 1;
          break;
        case "MG":
          summary.mg += 1;
          break;
      }
      summary.total += 1;
    });

    return summary;
  };

  return (
    <div className="flex flex-wrap gap-1 px-1 py-1">
      <div className="inline-block">
        <Chip size="sm" className={`${getIconColorByCode("L")}`}>
          L: {countEvaluations(currentFindings).l}
        </Chip>
      </div>
      <div className="inline-block">
        <Chip size="sm" className={`${getIconColorByCode("G")}`}>
          G: {countEvaluations(currentFindings).g}
        </Chip>
      </div>
      <div className="inline-block">
        <Chip size="sm" className={`${getIconColorByCode("MG")}`}>
          MG: {countEvaluations(currentFindings).mg}
        </Chip>
      </div>
      <div className="inline-block">
        <Chip size="sm">T: {countEvaluations(currentFindings).total}</Chip>
      </div>
    </div>
  );
};
