// // Exemple d'utilisation dans un composant React

// import { useEffect, useState } from 'react';
// import api from './api'; // Assurez-vous de mettre le bon chemin d'importation

// function UserList() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Appel à votre API pour récupérer les utilisateurs
//     api.get('/users')
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error('Erreur lors de la récupération des utilisateurs :', error);
//       });
//   }, []);

//   return (
//     <div>
//       {/* Affichage des utilisateurs */}
//       {users.map(user => (
//         <div key={user._id}>
//           {user.username} - {user.email}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default UserList;