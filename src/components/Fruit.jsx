export default function Fruit({ name, price, soldOut }) {
  return (
    <>
      <h1>
        <li key={name}>
          {" "}
          {name} {price} {soldOut ? "soldout" : ""}
        </li>
      </h1>
    </>
  );
}
