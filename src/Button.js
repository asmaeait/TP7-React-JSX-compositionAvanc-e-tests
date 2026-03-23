// Composant Button - Asma Ait Elmahjoub
function Button({ label, onClick, couleur }) {
  return (
    <button
      onClick={onClick}
      style={{ background: couleur || '#534AB7' }}
    >
      {label}
    </button>
  );
}

export default Button;