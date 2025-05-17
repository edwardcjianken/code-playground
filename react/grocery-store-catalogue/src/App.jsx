import List from "./List/List.jsx";
import LoginPrompt from "./LoginPrompt/LoginPrompt.jsx";

function App() {
  const fruits = [
    {
      id: 1,
      name: "Apple",
      calories: 58,
      price: 2.5,
    },
    {
      id: 2,
      name: "Orange",
      calories: 60,
      price: 3.5,
    },
    {
      id: 3,
      name: "Mango",
      calories: 70,
      price: 4.5,
    },
    {
      id: 4,
      name: "Watermelon",
      calories: 120,
      price: 12.5,
    },
    {
      id: 5,
      name: "Durian",
      calories: 192,
      price: 32.9,
    },
  ];

  const vegetables = [
    {
      id: 6,
      name: "Cucumber",
      calories: 28,
      price: 1.2,
    },
    {
      id: 7,
      name: "Cabbage",
      calories: 35,
      price: 2.3,
    },
    {
      id: 8,
      name: "Brinjal",
      calories: 15,
      price: 4.5,
    },
    {
      id: 9,
      name: "Carrot",
      calories: 22,
      price: 3.5,
    },
    {
      id: 10,
      name: "Bell Pepper",
      calories: 54,
      price: 3.9,
    },
  ];

  const isLoggedIn = true;

  return (
    <>
      <LoginPrompt isLoggedIn={isLoggedIn} />
      {isLoggedIn && (
        <>
          {fruits.length > 0 && <List items={fruits} category="Fruits" />}
          {vegetables.length > 0 && (
            <List items={vegetables} category="Vegetables" />
          )}
        </>
      )}
    </>
  );
}

export default App;
