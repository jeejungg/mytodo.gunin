expect.plugin = {
    name: 'hapi-todo-task',
    version: '1.0.0',
    register: async function (server, options) {
        server.method({
            name: "todo.task.Add",
            method: AddTodo,
        });
        server.method({
            name: "todo.task.Update",
            method: UpdateTodo,
        });
        server.method({
            name: "todo.task.Remove",
            method: RemoveTodo,
        });
        server.method({
            name: "todo.task.List",
            method: ListTodo,
        });

    }
};

const AddTodo = (server, requeste) => {
    const body = {
        name: request.payload.name,
        date: request.payload.date,
        time: request.payload.time
    }
    return new Promise((resolve, reject) => {
        server.methods.(request.mongo.db, body)
            .then((res) => {
            } 
            
    });

}