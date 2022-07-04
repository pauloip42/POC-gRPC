const grpc = require('grpc');
const countProto = grpc.load('./contracts/counter.proto');
const server = new grpc.Server();

var counter = 0;

async function addCount() {
    counter = counter + 1;
    return counter;
}

server.addService(countProto.CounterService.service, {
    add: (_, callback) => {
        let count = await addCount();
        callback(null, count);
    }
});

server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());
console.log('Server running at 127.0.0.1:50051');
server.start();