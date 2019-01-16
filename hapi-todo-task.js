exports.plugin = {
    name: 'hapi-todo-task',
    version: '1.0.0',
    register: async function (server, options) {
        server.method({
                name: 'task.todoAdd',
                method: todoAdd
            }),
            server.method({
                name: 'task.todoQuery',
                method: todoQuery
            })
    }
};

let todoAdd = (server, request) => {
    let body = {
        name: request.payload.name,
        date: request.payload.date
    }
    return new Promise((resolve, reject) => {
        server.methods.datasource.taskInsert(request.mongo.db, body).then((res) => {
            if (res.result.ok == 1) {
                resolve({
                    status: 200,
                    message: "เพิ่มได้",
                    data: res.ops[0]
                });
            } else {
                reject({
                    status: 500,
                    message: 'ไม่ได้',
                    data: null
                })
            }
        })

    });

}

let todoQuery = (server, request) => {
    return new Promise((resolve, reject) => {
        server.methods.datasource
        .taskQuery(request.mongo.db).then((res) => {
            resolve(res);
        });
    })
}