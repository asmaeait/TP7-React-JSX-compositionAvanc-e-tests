// Composant Greeting - Asma Ait Elmahjoub
function Greeting({ name, role }) {
  return (
    <div>
      <h1>Bonjour, {name}</h1>
      {role && <p>Role : {role}</p>}
    </div>
  );
}

export default Greeting;