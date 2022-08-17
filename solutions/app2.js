const user = {
  firstName: 'John',
  lastName: 'Doe',
  jobb: 'unknown'
};
const {firstName: f, lastName: l, jobb: j} = user;

// ## 2. feladat
// - A `solutions/app2.js` fájlban dolgozz!
// - Adott az alábbi objektum:
// ```javascript
//     const user = {
//         firstName: 'John',
//         lastName: 'Doe'
//     };
// ```
// - Mentsd el külön `l`, `f` és `j` változókba a fenti objektum lastName, firstName és job property-jeit! 
// - Ha valamelyik nincs megadva, akkor az érték legyen az "unknown" string!