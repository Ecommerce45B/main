
import React from 'react';
import './Category.css';
import { FaMagnifyingGlass } from "react-icons/fa6";

function Category({ searchTerm, setSearchTerm, handleCategoryChange, handleMarcaChange, handlePriceChange, handleSearch, categories, marcas }) {

  const handleCategory = (e) => {
    handleCategoryChange(e.target.value);
  };

  const handleMarca = (e) => {
    handleMarcaChange(e.target.value);
  };

  const handlePrice = (e) => {
    const priceRange = e.target.value;
    handlePriceChange(priceRange);
  };

  return (
    <div className="category-header">
      <label htmlFor="category">Categoría:</label>
      <select id="category" onChange={handleCategory}>
        <option value="">Selecciona una categoría</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.nombre}
          </option>
        ))}
      </select>

      <label htmlFor="price">Precio:</label>
      <select id="price" onChange={handlePrice}>
        <option value="">Selecciona un rango de precios</option>
        <option value="0-199">$0 - $199</option>
        <option value="200-399">$200 - $399</option>
        <option value="400-799">$400 - $799</option>
        <option value="800-1199">$800 - $1199</option>
        <option value="1200+">$1200+</option>
      </select>

      <label htmlFor="brand">Marca:</label>
      <select id="brand" onChange={handleMarca}>
  <option value="">Selecciona una marca</option>
  {marcas.map((marca) => (
    <option key={marca.id} value={marca.id}>
      {marca.nombre}
    </option>
  ))}
</select>


      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Busca lo que necesites..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          <FaMagnifyingGlass />
        </button>
      </div>
    </div>
  );
}

export default Category;
