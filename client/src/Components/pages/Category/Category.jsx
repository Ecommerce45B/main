import { useEffect} from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { getCategorias } from '../../../Redux/CategoriasSlice';
import { getMarcas } from '../../../Redux/MarcasSlice';

import React from 'react';
import './Category.css';
import searchIcon from "../../../../../client/public/icons/search.png"

const SearchBar = ({ setFilterTerm }) => {
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.trim();
    setFilterTerm(searchTerm);
  };

  const categoriaGlobal = useSelector((state) => state.categorias)
  const categorias      = categoriaGlobal['categorias'];

  const marcaGlobal = useSelector((state) => state.marcas)
  const marcas      = marcaGlobal['marcas'];

  const dispatch = useDispatch()

  useEffect(()=>{
    const syncronized = async() => {
      await dispatch(getCategorias());
    }
    syncronized()
  }, [dispatch])
  console.log('categorias--->',categorias)

  useEffect(()=>{
    const syncronized = async() => {
      await dispatch(getMarcas());
    }
    syncronized()
  }, [dispatch])
  console.log('marcas--->',marcas)
  

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
      <div className='containerSearchBar'>
      <button>
      <img src={searchIcon} alt="search" className='search' />
      </button> 
      </div>
    </div>
  );
}

export default SearchBar;
