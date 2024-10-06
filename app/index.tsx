import { useState } from "react";
import Home from "./home";
import Assessment1 from "./assessment1";

export default function Index() {
  const [page, setPage] = useState("Home");
  const [strikeRiskScore, setStrikeRiskScore] = useState(0);

  function getPage() {
    switch (page) {
      case "Home":
        return <Home setPage={setPage} />;
      case "Assessment1":
        return <Assessment1 setPage={setPage} strikeRiskScore={strikeRiskScore} setStrikeRiskScore={setStrikeRiskScore} />;
      default:
        return <Home setPage={setPage} />;
    }
  }

  return getPage();
}
