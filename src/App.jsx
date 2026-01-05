import { Header } from './Components/Header.jsx';
import { Shop } from './Components/Shop.jsx';
import { Footer } from './Components/Footer.jsx';
import {ContextProvider} from "./context.jsx";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
