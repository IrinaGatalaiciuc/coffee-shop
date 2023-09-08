import Coffeebuild from "./blocks/Coffeebuild";
import Combos from "./blocks/Combos";
import Giftsets from "./blocks/Giftsets";
import Shopitems from "./blocks/Shopitems";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/app.css"

function App() {



  return (
    <div className="App">
      <Header />
      <section id="coffee">
        <Coffeebuild />
      </section>
      <section id="phin">
        <Shopitems />
      </section>
      <section id="giftset"> 
        <Giftsets />
      </section>
      <section id="combo">
        <Combos />
      </section>
      <section id="lien">
        <Footer />
      </section>
    </div>
  );
}

export default App;
