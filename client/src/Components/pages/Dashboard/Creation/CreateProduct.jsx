import { useState, useEffect } from "react";
import validation from "./validationProduct";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./creationProduct.module.css"

const CreateProduct = () => {
    const URL = 'http://localhost:3001';

    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        especificaciones: '',
        nroserie: '',
        nromac: '',
        precio: '',
        stock: '',
        idCategoria: '',
        idMarca: '',
        idFabricante: '',
        minimo:'',
        preferencia:''
    });

    const [formErrors, setFormErrors] = useState({});
    const [formHasErrors, setFormHasErrors] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [fabricantes, setFabricantes] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [marcas, setMarcas] = useState([]);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await axios.get(`${URL}/categorias`);
                setCategorias(response.data);
            } catch (error) {
                console.error("Error al obtener las categorias:", error);
            }
        }
        fetchCategorias();
    }, []);

    useEffect(() => {
        const fetchFabricantes = async () => {
            try {
                const response = await axios.get(`${URL}/fabricantes`);
                setFabricantes(response.data);
            } catch (error) {
                console.error("Error al obtener los fabricantes:", error);
            }
        }
        fetchFabricantes();
    }, []);

    useEffect(() => {
        const fetchMarcas = async () => {
            try {
                const response = await axios.get(`${URL}/marcas`);
                setMarcas(response.data);
            } catch (error) {
                console.error("Error al obtener las marcas:", error);
            }
        }
        fetchMarcas();
    }, []);

    useEffect(() => {
        const errors = validation(formData);
        
        setFormErrors(errors);
    }, [formData]);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        setFormHasErrors(false); 
        
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        const errors = validation(formData);
        

        if (Object.values(errors).some((error) => error !== "")) {
            setFormErrors(errors);
            setFormHasErrors(true);
            return;
        }

        try {
            await axios.post(`${URL}/productos/new`, formData);
            setSuccessMessage("Producto creado exitosamente.");
            setFormData({
                nombre: "",
                descripcion: "",
                especificaciones: "",
                nroserie: "",
                nromac: "",
                precio: "",
                stock: "",
                idCategoria: "",
                idMarca: "",
                idFabricante: "",
                minimo:'',
                preferencia:''
            });
            setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
        } catch (error) {
            console.error("Error al enviar la solicitud al backend:", error);
        }
    };
 return(
    <div className={styles.container}>
         <h2 className={styles.titulo}>Crear Nuevo Producto</h2>
         {successMessage && <p className={styles.successMessage}>{successMessage}</p> }
         <form onSubmit={onSubmit}>
            <div className={styles.formControl}>
                <label className={styles.nombre}>Nombre: </label>
                <input 
                type="text" 
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                />
                {formErrors.nombre && <p className={styles.errors}>{formErrors.nombre}</p>}
            </div>

            <div className={styles.formControl}>
                <label className={styles.descripcion}>Descripción: </label>
                <input 
                type="text" 
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                />
                {formErrors.descripcion && <p className={styles.errors}>{formErrors.descripcion}</p>}
            </div>

            <div className={styles.formControl}>
                <label className={styles.especificaciones}>Especificaciones: </label>
                <input 
                type="text" 
                name="especificaciones"
                value={formData.especificaciones}
                onChange={handleChange}
                />
                {formErrors.especificaciones && <p className={styles.errors}>{formErrors.especificaciones}</p>}
            </div>

            <div className={styles.formControl}>
                <label className={styles.nroserie}>Nro.Serie: </label>
                <input 
                type="text" 
                name="nroserie"
                value={formData.nroserie}
                onChange={handleChange}
                />
                {formErrors.nroserie && <p className={styles.errors} >{formErrors.nroserie}</p>}
            </div>

            <div className={styles.formControl}>
                <label className={styles.nromac}>Nro.mac: </label>
                <input 
                type="text" 
                name="nromac"
                value={formData.nromac}
                onChange={handleChange}
                />
                {formErrors.nromac && <p className={styles.errors}>{formErrors.nromac}</p>}
            </div>

            <div className={styles.formControl}>
                <label className={styles.precio}>Precio: </label>
                <input 
                type="text" 
                name="precio"
                value={formData.precio}
                onChange={handleChange}
                />
                {formErrors.precio && <p className={styles.errors}> {formErrors.precio}</p>}
            </div>

            <div className={styles.formControl}>
                <label className={styles.stock}>Stock: </label>
                <input 
                type="text" 
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                />
                {formErrors.stock && <p className={styles.errors}> {formErrors.stock}</p>}
            </div>

            <div className={styles.formControl}>
                <label className={styles.minimo}>Minimo: </label>
                <input 
                type="text" 
                name="minimo"
                value={formData.minimo}
                onChange={handleChange}
                />
                {formErrors.minimo && <p className={styles.errors}>{formErrors.minimo}</p>}
            </div>

            <div className={styles.formControl}>
                <label className={styles.preferencia}>Preferencia: </label>
                <input 
                type="text" 
                name="preferencia"
                value={formData.preferencia}
                onChange={handleChange}
                />
                {formErrors.preferencia && <p className={styles.errors}>{formErrors.preferencia}</p>}
            </div>

            <div className={styles.formControl}>
                <label className={styles.categoria}>Categoria: </label>
                <select
                
                name="idCategoria"
                value={formData.idCategoria}
                onChange={handleChange}
                className={styles.select}
                >
                <option value='' disabled>
                    Seleccione una categoria
                </option>
                {categorias.map((categoria,index) => ( 
                    <option key={index} value={categoria.id} className={styles.option}>
                        {categoria.nombre}
                    </option>
                
                ))}
                </select>
                {formErrors.idCategoria && <p className={styles.errors}>{formErrors.idCategoria}</p>}
            </div>

            <div className={styles.formControl}>
                <label className={styles.fabricante}>Fabricantes: </label>
                <select
                
                name="idFabricante"
                value={formData.idFabricante}
                onChange={handleChange}
                className={styles.select}
                >
                <option value='' disabled>
                    Seleccione un fabricante
                </option>
                {fabricantes.map((fabricante,index) => ( 
                    <option key={index} value={fabricante.id} className={styles.option}>
                        {fabricante.nombre}
                    </option>
                
                ))}
                </select>
                {formErrors.idFabricante && <p className={styles.errors}>{formErrors.idFabricante}</p>}
            </div>

            <div className={styles.formControl}>
                <label className={styles.marca}>Marcas: </label>
                <select
                
                name="idMarca"
                value={formData.idMarca}
                onChange={handleChange}
                className={styles.select}
                >
                <option value='' disabled>
                    Seleccione una marca
                </option>
                {marcas.map((marca,index) => ( 
                    <option key={index} value={marca.id} className={styles.option}>
                        {marca.nombre}
                    </option>
                
                ))}
                </select>
                {formErrors.idMarca && <p className={styles.errors}>{formErrors.idMarca}</p>}
            </div>

            <button type="sumbit"  className={styles.button}>Crear Producto</button>
         </form>

         <Link to="/dashboard/HomeDashboard"className={styles.link}>Volver a HomeDashboard</Link>
    </div>
 )
 }
export default CreateProduct