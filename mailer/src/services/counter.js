function setCounter(){
    const grpc = require('@grpc/grpc-js');
    const protoLoader = require('@grpc/proto-loader');
    const path = require('path');
    
    const protoObjetc = protoLoader.loadSync(path.resolve(__dirname, '../contracts/counter.proto'));
    const CounterClient = grpc.loadPackageDefinition(protoObjetc);

    const counter = new CounterClient.CounterService('localhost:50051', grpc.credentials.createInsecure());

    counter.add({}, (err, count) => {
        // if(err) throw err;
        console.log("Contador: ", count);
    })
};

module.exports = {setCounter};