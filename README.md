# TP7 — React : JSX, Composition avancee et Tests

---

## Objectifs

- Comprendre JSX et sa transformation en JavaScript pur
- Creer des composants reutilisables avec HOC et Render Props
- Ecrire des tests unitaires et d'integration avec Jest et Testing Library

---

## Installation

```bash
npm install
npm start
```

Pour lancer les tests :
```bash
npm test
```

---

## Structure

<img width="591" height="836" alt="image" src="https://github.com/user-attachments/assets/649ac387-dc9f-45c6-9311-3615186cbff2" />


---

## Composants

### JSXDemo
Montre la difference entre JSX et React.createElement(). Les deux produisent le meme resultat — JSX est juste plus lisible.

### HOC withLogging
Higher-Order Component qui enveloppe un composant et affiche ses props dans la console a chaque rendu.

### HOC withTimestamp
Higher-Order Component qui ajoute la date et l'heure du rendu au-dessus du composant enveloppe.

### DataLoader avec Render Props
Composant flexible qui passe ses donnees via une fonction render. Le parent decide comment afficher les donnees.

### FilterLoader avec Render Props
Composant avec filtre en temps reel. L'utilisateur tape un nom et la liste se filtre automatiquement.

---

## Tests

| Fichier | Tests |
|---|---|
| Greeting.test.js | Affiche le bon message, affiche le role, cache le role si absent |
| Counter.test.js | Compteur a 0, incremente, decremente, reset |
| App.test.js | Titre principal, sections HOC et Render Props |

Resultats : **9 tests passes** 

---

## Captures d'ecran


https://github.com/user-attachments/assets/4ef26202-e2de-4e87-8e25-3a3429afb311




### Console F12 — HOC withLogging
<img width="1920" height="655" alt="image" src="https://github.com/user-attachments/assets/fa9db9f8-15bf-4949-8f98-2e507185fe7f" />

---
