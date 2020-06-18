module.exports = {
    index(req, resp) {
        return resp.status(200).json({ message: 'Sucesso!' });
    }
};