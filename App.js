import React from "react";
import MainNavigator from "./src/navigation";
import { LogBox } from "react-native";
const App = () => {


  LogBox.ignoreAllLogs()
  return (
    <MainNavigator />
  );
}
export default App;