import { useState } from "react";
import Home from "./home";

export default function Index() {
  const [page, setPage] = useState("Home");

  function getPage() {
    switch (page) {
      case "Home":
        return <Home />;
      default:
        return <Home />;
    }
  }

  return getPage();
}
