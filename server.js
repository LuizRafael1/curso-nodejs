import http from "http";

const database = {
    produtos: ["Samsumg A15","Playstation 8", "Gta 6"]
};

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