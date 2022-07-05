function setCounter(){
    const grpc = require('@grpc/grpc-js');
    const protoLoader = require('@grpc/proto-loader');
    // const path = require('path');
    
    const protoObjetc = protoLoader.loadSync('./src/contracts/counter.proto');
    // console.log(path.resolve(__dirname, './contracts/counter.proto'));
    const CounterClient = grpc.loadPackageDefinition(protoObjetc);

    const counter = new CounterClient.CounterService('counter:50051', grpc.credentials.createInsecure());

    counter.Add({}, (err, count) => {
        if(err){
            console.log(err);
            throw err;
        };
        console.log("Contador: ", count);
    })
};

module.exports = {setCounter};