export default function Car({ name, price, emoji }) {
  return (
    <>
      {price < 1000000 ? (
        <li key={value}>
          {name} {price} {emoji}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
