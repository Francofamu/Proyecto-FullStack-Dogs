import "./paginado.css";

const Paginado = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => {
  return (
    <div className="paginado">
      <button className="button-paginate" onClick={handlePrevPage} disabled={currentPage === 1}>
        Anterior
      </button>
      <h2 className="current-page">{currentPage}</h2>
      <button className="button-paginate" onClick={handleNextPage} disabled={currentPage === totalPages}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginado;
