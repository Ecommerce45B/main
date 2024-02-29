import React from 'react'; 


const AboutUs = () => {
  return (
    <div className="about-us">
      <center><h1 >Acerca de Nosotros</h1></center>
      
      <hr></hr>
      <br></br>
     <center> < text-align ><p2>
      Un grupo de estudiantes de la carrera de Desarrollo Web Henry ha presentado un proyecto de e-commerce que ha generado gran expectación entre la comunidad académica y empresarial.</p2>
     <p> El proyecto, denominado Tech store, se destaca por su diseño innovador, su enfoque en la usabilidad y su potencial para revolucionar la forma en que se realizan las compras en línea.</p>      
     <br></br>
     <p> Los estudiantes, [Nombres de los estudiantes], han desarrollado una plataforma de e-commerce que ofrece una experiencia de compra única y personalizada.</p>
      <p>La plataforma se caracteriza por su diseño intuitivo y atractivo, su facilidad de navegación y su amplia gama de funcionalidades.  </p>      
      <p>Además, "[Nombre del proyecto]" se integra con las últimas tecnologías en materia de pagos online y seguridad informática, lo que garantiza una experiencia de compra segura y confiable.</p>
      </text-align></center>
      <div className="team-members">
      <br></br>
        <h2>Conoce al equipo</h2>
        <div className="member">
          <img src="images/miembro1.jpg" alt="Miembro 1" />
          <h3>Nombre del Miembro 1</h3>
          <p>Cargo del Miembro 1</p>
        </div>
        <div className="member">
          <img src="images/miembro2.jpg" alt="Miembro 2" 
          />
          
          <h3>Nombre del Miembro 2</h3>
          <p>Cargo del Miembro 2</p>
        </div>
      </div>
      <p>
        Nos apasiona crear soluciones innovadoras y eficientes que satisfagan las necesidades de nuestros clientes. Estamos comprometidos con la calidad y la excelencia en todo lo que hacemos.
      </p>
      <p>
        Si tienes un proyecto en mente, no dudes en contactarnos. Estaremos encantados de ayudarte a hacerlo realidad.
      </p>
    </div>
  );
};

export default AboutUs;