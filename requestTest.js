
var request = require('request'); //require do módulo "request" do node.js.

request('http://api.openweathermap.org/data/2.5/weather?q=Natal&APPID=KEY', function (error, response, body) {
  console.log ('erro:', error);  // Imprime o erro ocorrido (de conexão)
 
  console.log ('statusCode:', response && response.statusCode);  // Imprime o código de status da resposta se uma resposta foi recebida
  
  // console.log ('body:', body);  // Imprime o HTML da página acima.
  var parsedWeather = JSON.parse(body);

  console.log("Os dados climáticos atuais de Natal/RN são:", parsedWeather); 

});