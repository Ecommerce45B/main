import React from 'react';
import './Category.css';

function Category() {
  return (
    <div className="category-header">
      <label htmlFor="category">Categoría:</label>
      <select id="category">
        <option value="">Selecciona una categoría</option>
        <option value="motherboard">Tarjetas</option>
        <option value="screen">Pantalla</option>
        <option value="keyboard">Teclados</option>
      </select>

      <label htmlFor="price">Precio:</label>
      <select id="price">
        <option value="">Selecciona un rango de precios</option>
        <option value="0-50">$0 - $50</option>
        <option value="50-100">$50 - $100</option>
        <option value="100+">$100+</option>
      </select>

      <label htmlFor="brand">Marca:</label>
      <select id="brand">
        <option value="">Selecciona una marca</option>
        <option value="nvidia">Nvidia</option>
        <option value="apple">Apple</option>
        <option value="alien">Alien Ware</option>
        <option value="intel">Intel</option>
      </select>
    </div>
  );
}

export default Category;
