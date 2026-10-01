import http from "http";

const database = {
    produtos: [
        { id: 1, nome: "Samsumg A15", preco: 1400 },
        { id: 2, nome: "Playstation 8", preco: 8600 },
        { id: 3, nome: "Gta 6", preco: 540 }],
    carros: [
        { id: 1, nome: "Fiat Argo", modelo: "Drive 1.0", preco: 89990 },
        { id: 2, nome: "Chevrolet Onix", modelo: "LT 1.0 Turbo", preco: 94990 },
        { id: 3, nome: "Toyota Corolla", modelo: "XEi 2.0", preco: 149990 },
        { id: 4, nome: "Volkswagen Polo", modelo: "Track 1.0", preco: 92990 }
    ]
};

//helper function para extrair ID  
function extrairID (url){
    return Number(url.split("/")[3]);
}

//Helper function encontrar por ID
function findById (id){
    return database.carros.find(c => c.id === id);
}

//Criando servidor http
const server = http.createServer((req, res) => {
    //Headers
    let statusCode = 200;
    let contentType = "application/json";

    //Response body
    let responseBody = {mensagem:"Rota não encontrada"};
    
    const { method, url } = req    //OR  const method = req.method, const url = req.url
    
    if (method === "GET") {
        //GET /api/produtos retorna lista de produtos
        if (url === "/api/produtos") {
            responseBody = { produtos: database.produtos }
        }
        //GET /api/carros retorna lista de carros
        else if (url === "/api/carros") {
            responseBody = { carros: database.carros }
        }
        else if (url.startsWith("/api/carros/")) {
            const id = Number(url.split("/")[3])
            // percorre os elementos com o find até achar o carro cujo id seja compatível com o id da URL
            const carro = database.carros.find((c) => c.id === id);
            
            if (carro) {
                responseBody = { carro }
            }
            else {
                statusCode = 404
                responseBody = { mensagem: `Carro com o id ${id} não existe` }
            }
        }
    }
    //POST/api/carros - cria novo carro
    else if (method === "POST"){
        if(url === "/api/carros"){

            let body = "";

            req.on("data", (chunk)=>{
                body += chunk.toString()
            });
            
            req.on("end", ()=>{
                const data = JSON.parse(body)
                data.id = database.carros.length +1
                database.carros.push(data);
                responseBody = {carro:data};

                statusCode = 201

                res.writeHead(statusCode, { "Content-type":contentType });
                res.end(JSON.stringify(responseBody));
            });

        }
        else{
            statusCode = 404
            responseBody = {mensagem: "Rota não encontrada"}
            res.writeHead(statusCode, { "Content-type":contentType });
            res.end(JSON.stringify(responseBody));
        }
    }
    if(responseBody?.mensagem === "Rota não encontrada"){
        statusCode = 404
    }
    if (!["POST","PUT","PATCH"].includes(method)){
        res.writeHead(statusCode, { "Content-type":contentType });
        res.end(JSON.stringify(responseBody));
    }
    
  
    //fazendo log de dados da requisição
    console.log(req.method, new Date(Date.now()).toLocaleTimeString(), req.url, statusCode);
});

const PORT = 3000;

//Configurando para escutar requisições na porta 3000 e chamando callBack
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    
});