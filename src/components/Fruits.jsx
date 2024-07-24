import Fruit from "./Fruit";
export default function Fruits() {
  const fruits = [
    { name: "guwava", price: 4, solOut: false },
    { name: "apple", price: 44, soldOut: true },
    { name: "grape", price: 52, soldOut: false },
    { name: "mango", price: 70, solOut: true },
    { name: "pear", price: 93, solOut: false },
  ];

  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            name={fruit.name}
            price={fruit.price}
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
    </>
  );
}
