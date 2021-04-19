import "./App.css";
import { useState } from "react";
import StripScroll from "./components/StripScroll";
function App() {
  const [data] = useState([
    {
      id: 1,
      label: "YES",
      marketPrice: "7019.19",
      direction: "positive",
      value: 88.9,
      percentageValue: 87.1,
    },
    {
      id: 2,
      label: "SDU",
      marketPrice: "7019.19",
      direction: "positive",
      value: 88.9,
      percentageValue: 87.1,
    },
    {
      id: 3,
      label: "KAREN BOSS",
      marketPrice: "7019.19",
      direction: "positive",
      value: 88.9,
      percentageValue: 87.1,
    },
    {
      id: 4,
      label: "JIGV",
      marketPrice: "-7.9.19",
      direction: "negative",
      value: 88.9,
      percentageValue: 87.1,
    },
    {
      id: 5,
      label: "IHUI",
      marketPrice: "19.19",
      direction: "positive",
      value: 88.9,
      percentageValue: 87.1,
    },
    {
      id: 6,
      label: "PPO",
      marketPrice: "-9.19.19",
      direction: "negative",
      value: 88.9,
      percentageValue: 87.1,
    },
    {
      id: 7,
      label: "IPOIO",
      marketPrice: "7019.19",
      direction: "positive",
      value: 88.9,
      percentageValue: 87.1,
    },
    {
      id: 8,
      label: "BOOSSES",
      marketPrice: "-019.19",
      direction: "negative",
      value: 88.9,
      percentageValue: 87.1,
    },
    {
      id: 9,
      label: "COME ON",
      marketPrice: "819.19",
      direction: "positive",
      value: 88.9,
      percentageValue: 87.1,
    },
    {
      id: 10,
      label: "HAAN",
      marketPrice: "-09.19",
      direction: "negative",
      value: 88.9,
      percentageValue: 87.1,
    },
  ]);

  return <StripScroll data={data} />;
}

export default App;
