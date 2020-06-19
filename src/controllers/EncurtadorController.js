module.exports = {
    index(req, resp) {
        return resp.marko(
            require('../Views/Encurtador/Listagem/listagem.marko')
        );
    }
};