// Render Props avec filtre - Asma Ait Elmahjoub
import { useState } from 'react';

function FilterLoader({ render }) {
  const data = [
    { id: 1, nom: 'Asma', ville: 'Rabat' },
    { id: 2, nom: 'Sara', ville: 'Casablanca' },
    { id: 3, nom: 'Youssef', ville: 'Marrakech' },
    { id: 4, nom: 'Mehdi', ville: 'Fes' },
    { id: 5, nom: 'Nadia', ville: 'Rabat' },
  ];

  const [filtre, setFiltre] = useState('');

  const filteredData = data.filter((item) =>
    item.nom.toLowerCase().includes(filtre.toLowerCase())
  );

  return (
    <div>
      <input
        value={filtre}
        onChange={(e) => setFiltre(e.target.value)}
        placeholder="Filtrer par nom..."
      />
      <p style={{ fontSize: '13px', color: '#888', marginBottom: '8px' }}>
        {filteredData.length} resultat(s)
      </p>
      {render(filteredData)}
    </div>
  );
}

export default FilterLoader;