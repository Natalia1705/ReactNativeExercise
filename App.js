import { SafeAreaView, StatusBar } from "react-native";

import Main from "./src/screens/Main";

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <Main />
      </SafeAreaView>
    </>
  );
}
