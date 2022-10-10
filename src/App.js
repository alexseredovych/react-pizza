import logo from "./logo.svg";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from './components/Categories'
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";


function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">All pizzas</h2>
            <div class="content__items">
              <PizzaBlock title="Mexican" price={14.99} />
              <PizzaBlock title="Hawaian" price={17.18} />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
