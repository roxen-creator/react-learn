export default function Hello({ person }) {
  return (
    <>
      <p>
        hello {person.name} your age is {person.age} your seat no is{" "}
        {person.seatNo} your gender is {person.gender}
      </p>
    </>
  );
}
