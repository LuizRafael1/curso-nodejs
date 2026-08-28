import http from "http";

const database = {
    produtos: ["Samsumg A15","Playstation 8", "Gta 6"]
};

//Criando servidor http
const server = http.createServer((req,res) => { 
    
    const {method,url} = req    //OR  const method = req.method, const url = req.url

    //Define o tipo de resposta
    res.writeHead(200,{"Content-type": "application/json"});

    //fazendo log de dados da requisição
    console.log(req.method,new Date(Date.now()).toLocaleTimeString(), req.url);

    if (method === "GET"){
        if (url === "/api/produtos") {
           return res.end(`{ "produtos": ["produto-1", "produto-2", "produto-3"]}`)
        }
        else if(url === "/api/carros"){
            return res.end(`{"carros" : ["Onix", "Corsa", "Uno"]}`)
        };
    };

res.end(`{"mensagem": "resposta não encontrada."}`);

});
    
const PORT = 3000;

//Configurando para escutar requisições na porta 3000 e chamando callBack
server.listen(PORT,() =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);

});