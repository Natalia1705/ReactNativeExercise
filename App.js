import { SafeAreaView, StatusBar } from "react-native";
import Router from "./src/navigation/Router";

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <Router />
      </SafeAreaView>
    </>
  );
}
