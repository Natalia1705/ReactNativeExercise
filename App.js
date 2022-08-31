import { SafeAreaView, StatusBar } from "react-native";

// import Main from "./src/screens/Main";
import SearchResults from "./src/screens/SearchResults";

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        {/* <Main /> */}
        <SearchResults />
      </SafeAreaView>
    </>
  );
}
