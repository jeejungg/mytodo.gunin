expect.plugin = {
    name: 'hapi-datasource-task',
    version: '1.0.0',
    register: async function (server, options) {
        server.method({
            name: "datasource.task.Add",
            method: AddTask,
        });
        server.method({
            name: "datasource.task.Update",
            method: UpdateTask,
        });
        server.method({
            name: "datasource.task.Remove",
            method: RemoveTask,
        });
        server.method({
            name: "datasource.task.List",
            method: ListTask,
        });

    }
};