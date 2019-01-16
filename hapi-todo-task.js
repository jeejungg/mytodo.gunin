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
            }),
            server.method({
                name: 'task.todoUpdate',
                method: todoUpdate
            }),
            server.method({
                name: 'task.todoDelete',
                method: todoDelete
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

let todoUpdate = (server, request) => {
    let body = {
        name: request.payload.name,
        date: request.payload.date
    }
    return new Promise ((resolve, reject) => {
        const ObjectID = request.mongo.ObjectID;
        server.methods.datasource.taskUpdate(request.mongo.db, new ObjectID(request.params.id), body)
        .then((res) => {
            if (res.result.ok == 1){
                resolve({
                    status:200,
                    message: "แก้ไขแล้ว",
                    data: (res.ops && res.ops.length > 0)  ? res.ops[0] : {}
                });
            } else {
                reject({
                    status: 500,
                    message: "แก้ไขไม่ได้",
                    data: null
                });
            }
        }).catch ((error)=>{
            reject({
                status: 500,
                message: "แก้ไขไม่ได้",
                data: null
            });
        });
    });
}

let todoDelete = (server, request) => {
    return new Promise ((resolve, reject) => {
        const ObjectID = request.mongo.ObjectID;
        server.methods.datasource.taskUpdate(request.mongo.db, new ObjectID(request.params.id))
        .then((res) => {
            if (res.result.ok == 1){
                resolve({
                    status:200,
                    message: "ลบได้แล้ว",
                    data: (res.ops && res.ops.length > 0)  ? res.ops[0] : {}
                });
            } else {
                reject({
                    status: 500,
                    message: "ลบไม่ได้",
                    data: null
                });
            }
        }).catch ((error)=>{
            reject({
                status: 500,
                message: "ลบไม่ได้",
                data: null
            });
        });
    });
    
}