import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Carousel from "./component/Carousel";
import ProductList from "./component/ProductList";
import Promotion from "./component/Promotion";
function App() {
  return (
    <div>
      <div>
        <Header />
        <Carousel/>
        <ProductList/>
        <Promotion />
      </div>
    </div>
  );
}

export default App;
