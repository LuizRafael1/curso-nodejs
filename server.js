import http from "http";

/* 
request = Solicita ação,
response = Resposta do servidor para cliente
*/

const server = http.createServer((req,res) => { 
    res.writeHead(200, {"Content-type": "application/json"});
    res.end(`{
    "name":"Luiz Rafael",
    "country":"Brasil",
    "age":"16"   }`)
});

const PORT = 3000;

//Configurando para escutar requisições na porta 3000
server.listen(PORT,() =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);

});