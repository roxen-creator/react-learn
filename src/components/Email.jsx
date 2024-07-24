export default function Email({ email, id }) {
  return (
    <>
      <li key={id}>
        {" "}
        {email} {id}
      </li>
    </>
  );
}
