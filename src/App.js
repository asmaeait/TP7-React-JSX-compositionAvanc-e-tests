import JSXDemo from './JSXDemo';
import ButtonWithLogging from './ButtonWithLogging';
import DataLoader from './DataLoader';
import withTimestamp from './withTimestamp';
import Button from './Button';
import FilterLoader from './FilterLoader';
import './App.css';

const ButtonWithTimestamp = withTimestamp(Button);

function App() {
  return (
    <div className="app-container">
      <h1 className="titre">TP JSX et Composition</h1>

      <div className="card">
        <h2>Demo JSX</h2>
        <p className="description">JSX est une syntaxe simplifiee de React.createElement().</p>
        <JSXDemo />
      </div>

      <div className="card">
        <h2>Higher-Order Component (HOC)</h2>
        <p className="description">
          withLogging enveloppe un composant et affiche ses props dans la console.
        </p>
        <ButtonWithLogging label="Cliquer ici" couleur="#534AB7" />
        <ButtonWithLogging label="Bouton rouge" couleur="#993C1D" />
        <p style={{ fontSize: '13px', color: '#888', marginTop: '10px' }}>
          Ouvre la console (F12) pour voir les props loggees !
        </p>
      </div>

      <div className="card">
        <h2>Render Props</h2>
        <p className="description">
          Le composant DataLoader passe ses donnees via une fonction render.
        </p>
        <DataLoader
          titre="Liste des utilisateurs :"
          render={(data) => (
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  <strong>{item.nom}</strong> — {item.ville}
                </li>
              ))}
            </ul>
          )}
        />
      </div>

      <div className="card">
        <h2>HOC avec Timestamp</h2>
        <p className="description">Ajoute la date de rendu au composant.</p>
        <ButtonWithTimestamp label="Bouton avec timestamp" couleur="#534AB7" />
      </div>

      <div className="card">
        <h2>Render Props avec filtre</h2>
        <p className="description">Filtre la liste en temps reel.</p>
        <FilterLoader
          render={(data) => (
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  <strong>{item.nom}</strong> — {item.ville}
                </li>
              ))}
            </ul>
          )}
        />
      </div>
    </div>
  );
}

export default App;