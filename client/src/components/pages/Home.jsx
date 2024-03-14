import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories, getByName, getMarcas, getProductos } from '../../Redux/ProductosSlice';
import { addProduct } from '../../Redux/ProductosSlice';
import Category from '../pages/Category/Category';
import Products from '../../Components/Products/Products';
import './Home.css';

function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedMarca, setSelectedMarca] = useState('');
  const [marcas, setMarcas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);

  const stateGlobal = useSelector((state) => state.productos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchTerm) {
      syncronized();
    }
  }, [searchTerm]);

  useEffect(() => {
    dispatch(getCategories()).then((response) => {
      setCategories(response.payload);
    }).catch((error) => {
      console.log("Error al obtener categorías:", error); 
    });
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(getMarcas()).then((response) => {
      setMarcas(response.payload);
    }).catch((error) => {
      console.log("Error al obtener Marcas:", error); 
    });
  }, [dispatch]);

  const syncronized = async () => {
    const consultaDB = await dispatch(getProductos());
    dispatch(addProduct(consultaDB.payload));
  };

  useEffect(() => {
    if (searchClicked) {
      dispatch(getByName(searchTerm.trim()))
        .then((response) => {
          setSearchResults(response.payload);
         
          const uniqueMarcas = response.payload.reduce((acc, product) => {
            if (product.Marca && !acc.find(marca => marca.id === product.Marca.id)) {
              return [...acc, product.Marca];
            }
            return acc;
          }, []);
          setMarcas(uniqueMarcas);
        })
        .catch((error) => {
          console.log("Error al obtener productos por nombre:", error);
        });
    }
  }, [searchClicked, searchTerm, dispatch]);
  
  useEffect(() => {
    if (searchClicked) {
      dispatch(getByName(searchTerm.trim()))
        .then((response) => {
          setSearchResults(response.payload);
          
          const uniqueCategories = response.payload.reduce((acc, product) => {
            if (product.Categoria && !acc.find(category => category.id === product.Categoria.id)) {
              return [...acc, product.Categoria];
            }
            return acc;
          }, []);
          setCategories(uniqueCategories);
        })
        .catch((error) => {
          console.log("Error al obtener productos por nombre:", error);
        });
    }
  }, [searchClicked, searchTerm, dispatch]);
  
  const applyFilters = () => {
    let filteredProducts = searchClicked ? searchResults : stateGlobal.products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.Categoria.id === parseInt(selectedCategory));
    }

    if (selectedMarca) {
      filteredProducts = filteredProducts.filter(product => product.Marca && product.Marca.id === parseInt(selectedMarca));
    }

    if (minPrice !== '' && maxPrice !== '') {
      filteredProducts = filteredProducts.filter(product => {
        const price = product.precio;
        return price >= minPrice && (price <= maxPrice || maxPrice === Infinity);
      });
    }

    return filteredProducts;
  };

  const filteredProducts = applyFilters();

  const tamaño = 10;
  const sections = [];

  if (filteredProducts.length <= tamaño) {
    sections.push(filteredProducts);
  } else {
    for (let i = 0; i < filteredProducts.length; i += tamaño) {
      sections.push(filteredProducts.slice(i, i + tamaño));
    }
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedMarca(''); 
  
    if (!category) {
    
      setMarcas(stateGlobal.products.reduce((acc, product) => {
        if (product.Marca && !acc.find(marca => marca.id === product.Marca.id)) {
          return [...acc, product.Marca];
        }
        return acc;
      }, []));
      return;
    }
  
    
    const filteredMarcas = stateGlobal.products
      .filter(product => product.Categoria.id === parseInt(category))
      .reduce((acc, product) => {
        if (product.Marca && !acc.find(marca => marca.id === product.Marca.id)) {
          return [...acc, product.Marca];
        }
        return acc;
      }, []);
    setMarcas(filteredMarcas);
  };
  

  const handleMarcaChange = (marca) => {
    setSelectedMarca(marca);
    
    if (selectedCategory) {
     
      const filteredProducts = stateGlobal.products.filter(product => 
        product.Categoria.id === parseInt(selectedCategory) && 
        (!marca || (product.Marca && product.Marca.id === parseInt(marca)))
      );
      setSearchResults(filteredProducts);
    } else {
      
      const filteredProducts = stateGlobal.products.filter(product => 
        (!marca || (product.Marca && product.Marca.id === parseInt(marca)))
      );
      setSearchResults(filteredProducts);
    }
  };
  
  
  const handlePriceChange = (priceRange) => {
    if (priceRange === "") {
      setMinPrice("");
      setMaxPrice("");
    } else {
      let min, max;

      if (priceRange === "1200+") {
        min = 1200;
        max = Infinity;
      } else {
        [min, max] = priceRange.split('-');
        min = parseInt(min);
        max = max === '+' ? Infinity : parseInt(max);
      }

      setMinPrice(min);
      setMaxPrice(max);
    }
  };
  
  const handleSearch = () => {
    setSearchClicked(true);
    dispatch(getByName(searchTerm.trim())).then((response) => {
      setSearchResults(response.payload);
    });
  };

  return (
    <div className="content">
      <Category
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleCategoryChange={handleCategoryChange}
        handleMarcaChange={handleMarcaChange}
        handlePriceChange={handlePriceChange}
        categories={categories}
        marcas={marcas}
        handleSearch={handleSearch}
      />
  
      <div className="pagination">
        {sections &&
          sections.map((section, index) => (
            <button
              key={index}
              className={`page-button ${index === currentPage ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              {index + 1}
            </button>
          ))}
      </div>
      <div className="cards">
        {sections &&
          sections.map((section, index) => {
            if (index === currentPage) {
              const currentCards = section.map(product => (
                <Products
                  key={product.id}
                  id={product.id}
                  imagen={Array.isArray(product.Imagenes) && product.Imagenes.length > 0 ? product.Imagenes[0].url : ''}
                  nombre={product.nombre}
                  descripcion={product.descripcion}
                  precio={product.precio}
                  nroserie={product.nroserie}
                  rating={product.rating}
                />
              ));
              return (
                <div key={index} className={`page ${index === currentPage ? 'active' : ''}`}>
                  {currentCards.length > 0 ? (
                   currentCards
                   ) : (
                   <div className="no-products-message">No se encontraron productos.</div>
                    )}
                </div>

              );
            } else {
              return null; 
            }
          })}
      </div>
    </div>
  );
        }

export default Home;