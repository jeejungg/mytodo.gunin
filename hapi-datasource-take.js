exports.plugin = {
    name: 'hapi-datasource-task',
    version: '1.0.0',
    register: async function (server, options) {
        server.method({
            name : 'datasource.taskInsert',
            method : taskInsert
        }),
        server.method({
            name : 'datasource.taskQuery',
            method : taskQuery
        })
        server.method({
            name : 'datasource.taskUpdate',
            method : taskUpdate
        })
}
}


var taskInsert = (db, body) => {   
    return db.collection('ingunzamak').insert(body);
}

var taskQuery = (db) => {
    return new Promise ((resolve, reject) => {
        db.collection('ingunzamak').find({})
        .toArray((err,result) => {
            if (result){
                resolve(result);
            }else {
                reject(err);
            }
        });
    })
}

var taskUpdate = (db) => {
    return new Promise (resolve, reject) => {
        
    }
}