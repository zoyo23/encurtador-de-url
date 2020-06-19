module.exports = {
    index(req, resp) {
        return resp.marko(
            require('../Views/Encurtador/Listagem/listagem.marko'),
            {
                itens: listaItens
            }
        );
    }
};

let listaItens = [
    { id: 0, shortUrl: "https://resumeurl.herokuapp.com/teste01", destinyUrl: "https://google.com.br", clickCounter: 55, createDate: new Date(Date.now()).toLocaleString("pt-BR")},
    { id: 1, shortUrl: "https://resumeurl.herokuapp.com/teste02", destinyUrl: "https://google.com.br", clickCounter: 55, createDate: new Date(Date.now()).toLocaleString("pt-BR")},
    { id: 2, shortUrl: "https://resumeurl.herokuapp.com/teste03", destinyUrl: "https://google.com.br", clickCounter: 55, createDate: new Date(Date.now()).toLocaleString("pt-BR")},
    { id: 3, shortUrl: "https://resumeurl.herokuapp.com/teste04", destinyUrl: "https://google.com.br", clickCounter: 55, createDate: new Date(Date.now()).toLocaleString("pt-BR")},
];