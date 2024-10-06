import { useState } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Home from "./home";
import Assessment1 from "./assessment1";
import Assessment2 from "./assessment2";
import Assessment3 from "./assessment3";
import Assessment4 from "./assessment4";
import Assessment5 from "./assessment5";
import Assessment6 from "./assessment6";
import Assessment7 from "./assessment7";
import StrikeRiskResults from "./strikeRiskResults";
import BirdSaveSolutions from "./birdSaveSolutions";

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
      case "Assessment6":
        return <Assessment6 setPage={setPage} strikeRiskScore={strikeRiskScore} setStrikeRiskScore={setStrikeRiskScore} />;
      case "Assessment7":
        return <Assessment7 setPage={setPage} strikeRiskScore={strikeRiskScore} setStrikeRiskScore={setStrikeRiskScore} />;
      case "StrikeRiskResults":
        return <StrikeRiskResults setPage={setPage} strikeRiskScore={strikeRiskScore} />;
      case "BirdSaveSolutions":
        return <BirdSaveSolutions setPage={setPage} />;
      default:
        return <Home setPage={setPage} />;
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["lightblue", "white"]}
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      />
      {getPage()}
    </View>
  )
}
