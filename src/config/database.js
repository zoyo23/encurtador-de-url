const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const RESUME_URL_SCHEMA = `
CREATE TABLE IF NOT EXISTS resume_url (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    destiny_url VARCHAR(255) NOT NULL, 
    short_url VARCHAR(255) NOT NULL, 
    click_counter int NOT NULL default 0,
    create_date datetime default CURRENT_TIMESTAMP
)
`;

const INSERIR_URL_1 = 
`
INSERT INTO resume_url (
    destiny_url, 
    short_url
)
values (
'https://google.com.br',
'teste01'
)
`;

bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(RESUME_URL_SCHEMA);
    // bd.run(INSERIR_URL_1);

    // bd.each("SELECT * FROM resume_url", (err, usuario) => {
    //     console.log('resume_url: ');
    //     console.log(usuario);
    // });
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;