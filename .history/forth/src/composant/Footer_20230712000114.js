import React from "react";

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuez ici l'action de recherche avec la valeur du terme de recherche
    const searchTerm = e.target.elements.search.value;
    console.log(searchTerm);
    // Réinitialisez le champ de recherche après la soumission
    e.target.reset();
  };

  return (
    <div className="d-flex justify-content-around m-2">
      <p>Copyright - 2023</p>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
