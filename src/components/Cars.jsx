import Car from "./Car";
export default function Cars() {
  const luxaryCars = [
    {
      name: "Supra",
      price: 5000,
      emoji: "🥵",
    },
    {
      name: "BMW",
      price: 24000000,
      emoji: "😎",
    },
    {
      name: "Maruti",
      price: 24000002,
      emoji: "😒",
    },
  ];
  return (
    <>
      <ul>
        {luxaryCars.map((luxaryCar) => (
          <Car
            name={luxaryCar.name}
            price={luxaryCar.price}
            emoji={luxaryCar.emoji}
          />
        ))}
      </ul>
    </>
  );
}
