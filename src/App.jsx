import { useSelector, useDispatch, Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
  // SUBSCRIBE
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();

  const handleAddCheese = () => {
    // ACTION
    // DISPATCH
    dispatch({ type: 'pizzas/addPizza', payload: 'Cheese' });
  };

  const handleAddPepperoni = () => {
    // ACTION
    // DISPATCH
    dispatch({ type: 'pizzas/addPizza', payload: 'Pepperoni' });
  };

  const handleAddHawaiian = () => {
    // ACTION
    // DISPATCH
    dispatch({ type: 'pizzas/addPizza', payload: 'Hawaiian' });
  };

  const handleToggleGlutenFree = () => {
    dispatch({ type: 'pizzas/toggleGlutenFree' });
  };

  return (
    <>
      <div>
        <h1>COMP-3123-lab10</h1>
        <h2>Pizza</h2>
        <ul>
          {Object.keys(pizza.pizzas).map((pizzaType) => (
            <li key={pizzaType}>
              {pizzaType}: {pizza.pizzas[pizzaType]}
            </li>
          ))}
        </ul>
        <div className="pizza-buttons">
          <button onClick={handleAddCheese}>Add Cheese</button>
          <button onClick={handleAddPepperoni}>Add Pepperoni</button>
          <button onClick={handleAddHawaiian}>Add Hawaiian</button>
        </div>
        <p>Gluten Free: {pizza.glutenFree ? 'on' : 'off'}</p>
        <button onClick={handleToggleGlutenFree}>Toggle Gluten Free</button>
      </div>
    </>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
