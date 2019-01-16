exports.plugin = {
    name: 'hapi-datasource-task',
    version: '1.0.0',
    register: async function (server, options) {
        server.method({
            name : 'datasource.taskInsert',
            method : taskInsert
        })
}
}

var taskInsert = (request,body) => {
    let db = request.mongo.db;
    return db.collection('ingunzamak').insert(body);
}