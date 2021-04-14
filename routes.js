const { request, response } = require('express');

const createRoutes = (app, firebase) => {
    app.get('/', (request, response) => {
        response.sendFile(__dirname+'/public/index.html');
    });
}

module.exports = createRoutes;