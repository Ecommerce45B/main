import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getVotos, postVotos } from '../../../Redux/Store/Slices/votosSlice';
import style from './Ranking.module.css'

const Ranking = ({idProducto, idUsuario}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const votos = useSelector((state)=>state.votos);
  //Recuperando los datos de los votos del producto
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getVotos(idProducto));
      setLoading(false);
    };
    fetchData();
  }, [dispatch, idProducto]);

  if (loading) {
    return <p>Cargando...</p>;
  }
  let sw=0;
  let promedio=0;
  let totalVotos=0;
  let comentarios="";
  if(votos.ranking && votos.ranking.length > 0) {
    promedio=parseFloat(votos.ranking[0].promedio).toFixed(2); 
    totalVotos=votos.ranking[1].count;
    const listacomentarios = [];
    for (let i = 2; i < votos.ranking.length; i++) {
      listacomentarios.push(votos.ranking[i].comentario);
    }
    comentarios = listacomentarios.join("<br/>");
    if(idUsuario>0){
      //useEffect(()=>{dispatch(getvotosUser(idUser));},[dispatch, idUser])
      if(votos.ranking && votos.ranking.length > 0) sw=0;
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    const voto = document.getElementById('voto').value;
    const comentario = document.getElementById('comentario').value;
    const newVote={
      idUsuario  : idUsuario,
      idProducto : idProducto,
      voto       : voto,
      comentario : comentario
    };
    console.log("Voto nuevo--->",newVote);
    dispatch(postVotos(newVote));
  }
  //Configurando el área para voto y comentario del usuario
  let datosRankingUser=null;
  if(idUsuario>0 && sw===0) {
    datosRankingUser=(
        <div id="datosRankingUser" className="ranking-conteiner">
          <form onSubmit={handleSubmit}>
              <label>Calificar el producto</label>
              <select name="voto" id="vote" tabIndex={1}>
                <option value="1">1 min</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 max</option>
              </select>
              <h4>Agregar comentario</h4>
                <textarea
                  name="comentario" 
                  id="comentario" 
                  placeholder="Escriba su comentario sobre el producto"
                  rows={2}
                  maxLength={700} 
                  tabIndex={2}
                />
            <button type='submit' tabIndex={3}>Votar</button>
        </form>
        <h4>Comentarios sobre el producto:</h4>
        <h4>{comentarios}</h4>
      </div>
    )
  }
  const datosRanking=(
  <div>
    <hr/>
    <h4 className="ranking-text">⭐ Ranking:{promedio}&nbsp;&nbsp;🗳 Votos:{totalVotos}</h4>
  </div>)
  return (
    <div className="ranking-conteiner" >
        {datosRanking}
        {datosRankingUser}
    </div>
  )
}
export default Ranking;