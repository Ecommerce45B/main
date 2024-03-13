module.exports = (name, html, link) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TechStore - Registro Exitoso</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f8f9fa;
      color: #333;
      margin: 0;
      padding: 0;
      text-align: center;
    }
    
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #007bff;
    }
    
    h3 {
      color: #333;
    }

    p {
      margin: 20px 0;
      color: #666;
    }

    a {
      display: inline-block;
      padding: 10px 20px;
      margin: 20px 0;
      color: #fff;
      text-decoration: none;
      background-color: #007bff;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }
    
    a:hover {
      background-color: #0056b3;
    }

    a.button {
      color: #fff;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Bienvenido a TechStore</h1>
    <h3>Hola, ${name}</h3>
    <p>${html}</p>
    <a href=${link} class="button">Visita TechStore</a>
  </div>
</body>
</html>
`;
