module.exports = (body) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmación de Mensaje</title>
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

    .message {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Confirmación de Mensaje</h1>
    <div class="message">
     
      ${body}
    </div>
  </div>
</body>
</html>
`;
