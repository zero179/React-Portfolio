import { VStack, Flex } from "@chakra-ui/layout";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer";

function App() {

  return (
    <VStack p={5}>
      <Flex w="100%">
      <Sidebar />
      <Header></Header>
      
    </Flex>
    <Footer/>
    </VStack>
  );
}

export default App;
