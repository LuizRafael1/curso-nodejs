import http from "http";

const database = {
    produtos: [
        {id:1, nome:"Samsumg A15", preco:1400},
        {id:1, nome:"Playstation 8", preco:8600},
        {id:3, nome: "Gta 6", preco:540}],
    carros: [
        { id: 1, nome: "Fiat Argo", modelo: "Drive 1.0", preco: 89990 },
        { id: 2, nome: "Chevrolet Onix", modelo: "LT 1.0 Turbo", preco: 94990 },
        { id: 3, nome: "Toyota Corolla", modelo: "XEi 2.0", preco: 149990 },
        { id: 4, nome: "Volkswagen Polo", modelo: "Track 1.0", preco: 92990 }
]
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
           return res.end(JSON.stringify({produtos: database.produtos}))
        }
        else if(url === "/api/carros"){
            return res.end(JSON.stringify({carros:database.carros}))
        };
    };

res.end(`{"mensagem": "resposta não encontrada."}`);

});
    
const PORT = 3000;

//Configurando para escutar requisições na porta 3000 e chamando callBack
server.listen(PORT,() =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);

});