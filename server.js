"use strict";

const Hapi = require("hapi");

const dbOpts = {
    url:
        "mongodb://admin:admin@cluster0-shard-00-00-sdzlc.gcp.mongodb.net:27017,cluster0-shard-00-01-sdzlc.gcp.mongodb.net:27017,cluster0-shard-00-02-sdzlc.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true",
    settings: {
        poolSize: 10
    },
    decorate: true
};
// Create a server with a host and port
const server = Hapi.server({
    host: "0.0.0.0",
    port: process.env.PORT || 8000
});

// Add the route
server.route({
    method:'POST',
    path:'/add',
    handler: function (request, reply) {
        return server.method.task.todoAdd(server, request).then(reply);
    }
     
});

// Start the server
const start = async function () {
    try {
        await server.register([
            {
                plugin: require("hapi-mongodb"),
                options: dbOpts
            },
            require("./hapi-datasource-take"),
            require("./hapi-todo-task")
        ]);
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log("Server running at:", server.info.uri);
};

start();