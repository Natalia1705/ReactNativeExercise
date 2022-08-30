import { SafeAreaView, StatusBar } from "react-native";

// import Card from "./src/components/Card";
import Search from "./src/components/Search";
import feed from "./assets/data/feed";
import SearchResults from "./src/components/SearchResults";

const card1 = feed[0];

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <Search />
        {/* <Card card={card1}/> */}
        <SearchResults />
      </SafeAreaView>
    </>
  );
}
