import React from "react";
// import React, { useState } from "react";

export default function Registration() {
  // const [user, setUser] = useState({
  //   fullname: "",
  //   email: "",
  //   password: "",
  //   createAt: "",
  //   UpdateAt: "",
  //   role: "",
  // });

  // function handleClick() {
  //   window.alert("Le formulaire a été transmis");
  // }
  // { ...user } crée une copie de l'objet user existant à l'aide de la syntaxe de
  //décomposition des objets
  //setUser est appelée pour mettre à jour l'état de l'objet user
  // function handleChange(e) {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // une nouvelle version de l'objet user est créée avec la propriété spécifiée mise à jour avec la nouvelle valeur du champ de formulaire.
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(user);
  // }

  return (
    <div>
      <h1>s'inscrire</h1>
    </div>
    // <form action="" onSubmit={handleSubmit}>
    //   <label className="m-2 form-label" htmlFor="fullname">
    //     Entrez le nom et le prénom
    //   </label>
    //   <input
    //     className="m-2 form-control"
    //     type="text"
    //     name="fullname"
    //     id="fullname"
    //     onChange={handleChange}
    //   />

    //   <label className="m-2 form-label" htmlFor="email">
    //     Entrez l'email
    //   </label>
    //   <input
    //     className="m-2 form-control"
    //     type="text"
    //     name="email"
    //     id="email"
    //     onChange={handleChange}
    //   />

    //   <label className="m-2 form-label" htmlFor="createAt">
    //     Entrez la date de naissance
    //   </label>
    //   <input
    //     className="m-2 form-control"
    //     type="date"
    //     name="createAt"
    //     id="createAt"
    //     onChange={handleChange}
    //   />
    //   <label className="m-2 form-label" htmlFor="password">
    //     Password:
    //     <input
    //       type="password"
    //       name="password"
    //       id="password"
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <label className="m-2 form-label" htmlFor="role">
    //     Role:
    //     <input type="text" name="role" id="role" onChange={handleChange} />
    //   </label>
    //   <button
    //     className="m-2 btn btn-primary"
    //     type="submit"
    //     onClick={handleClick}
    //   >
    //     Valider
    //   </button>
    // </form>
  );
}
