const db = require('../config/database');
const shortId = require('shortid');

module.exports = {
    async index(req, resp) {
        var reg = await db.all('SELECT * FROM resume_url', (err, items) => {
            if (!err) {
                return resp.render('Encurtador/Listagem/listagem', { itens: items });;
            }
        });
    },

    async encurtar(req, resp) {

        var destiny_url = req.body.destinyUrl;

        if (!destiny_url) {
            console.log('URL NÃO INFORMADA');
            return resp.redirect('/');
        }

        const INSERT_RESUME_URL =
            `INSERT INTO resume_url 
            (
                destiny_url, 
                short_url
            )
            values 
            (
                '${destiny_url}',
                '${shortId.generate()}'
            )`;

        await db.run(INSERT_RESUME_URL);

        return resp.redirect('/');
    },

    async buscarRedirect(req, resp) {

        const resumeUrl = req.params.resumeUrl;

        const FIND_RESUME_URL = `SELECT * FROM resume_url where short_url = '${resumeUrl}'`;

        if (resumeUrl) {

            await db.all(FIND_RESUME_URL, async (err, result) => {

                if (!result || err) {
                    return resp.status(404).json({ message: 'Rota não registrada.' });
                }

                const ResumeUrlRegister = result[0];

                let countIncremented = ResumeUrlRegister.click_counter + 1;
                let itemId = ResumeUrlRegister.id;

                const INCREMENTE_RESUME_URL_CLICKS = `UPDATE resume_url SET click_counter = ${countIncremented} WHERE id = ${itemId}`;

                await db.run(INCREMENTE_RESUME_URL_CLICKS);

                return resp.redirect(ResumeUrlRegister.destiny_url);

            });
        }
    }
};