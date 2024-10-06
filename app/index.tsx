import { useState } from "react";
import Home from "./home";
import Assessment1 from "./assessment1";
import Assessment2 from "./assessment2";
import Assessment3 from "./assessment3";
import Assessment4 from "./assessment4";
import Assessment5 from "./assessment5";

export default function Index() {
  const [page, setPage] = useState("Home");
  const [strikeRiskScore, setStrikeRiskScore] = useState(0);

  function getPage() {
    switch (page) {
      case "Home":
        return <Home setPage={setPage} />;
      case "Assessment1":
        return <Assessment1 setPage={setPage} strikeRiskScore={strikeRiskScore} setStrikeRiskScore={setStrikeRiskScore} />;
      case "Assessment2":
        return <Assessment2 setPage={setPage} strikeRiskScore={strikeRiskScore} setStrikeRiskScore={setStrikeRiskScore} />;
      case "Assessment3":
        return <Assessment3 setPage={setPage} strikeRiskScore={strikeRiskScore} setStrikeRiskScore={setStrikeRiskScore} />;
      case "Assessment4":
        return <Assessment4 setPage={setPage} strikeRiskScore={strikeRiskScore} setStrikeRiskScore={setStrikeRiskScore} />;
      case "Assessment5":
        return <Assessment5 setPage={setPage} strikeRiskScore={strikeRiskScore} setStrikeRiskScore={setStrikeRiskScore} />;
      default:
        return <Home setPage={setPage} />;
    }
  }

  return getPage();
}
