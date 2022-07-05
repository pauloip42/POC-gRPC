const grpc = require('grpc');
const countProto = grpc.load('./contracts/counter.proto');
const server = new grpc.Server();

var counter = 0;

function addCount() {
    counter = counter + 1;
    return counter;
}

server.addService(countProto.CounterService.service, {
    Add: (_, callback) => {
        let count = addCount();
        callback(null, count);
    }
});

server.bindAsync('counter:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log('Server running at 127.0.0.1:50051');
});
