// Composant Render Props - Asma Ait Elmahjoub
function DataLoader({ render, titre }) {
  const data = [
    { id: 1, nom: 'Asma', ville: 'Rabat' },
    { id: 2, nom: 'Sara', ville: 'Casablanca' },
    { id: 3, nom: 'Youssef', ville: 'Marrakech' },
    { id: 4, nom: 'Mehdi', ville: 'Fes' },
  ];

  return (
    <div>
      <p style={{ fontSize: '13px', color: '#888', marginBottom: '10px' }}>
        {titre || 'Liste de donnees :'}
      </p>
      {render(data)}
    </div>
  );
}

export default DataLoader;