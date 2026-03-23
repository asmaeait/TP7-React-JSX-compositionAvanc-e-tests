// Demo JSX vs JavaScript pur - Asma Ait Elmahjoub
import React from 'react';

function JSXDemo() {
  const elementJSX = <h1 className="titre">Bonjour JSX !</h1>;

  const elementJS = React.createElement(
    'h1',
    { className: 'titre', style: { color: '#534AB7' } },
    'Bonjour JavaScript pur !'
  );

  const today = new Date().toLocaleDateString('fr-FR');

  return (
    <div>
      {elementJSX}
      {elementJS}
      <p style={{ fontSize: '13px', color: '#888', marginTop: '10px' }}>
        Ces deux lignes produisent le meme resultat. Date : {today}
      </p>
      <label htmlFor="champ">Entrez votre nom :</label>
      <input id="champ" placeholder="Votre nom..." />
    </div>
  );
}

export default JSXDemo;