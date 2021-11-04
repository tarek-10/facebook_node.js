let io;

module.exports ={

    init:(httpServer)=>{
        io = require("socket.io")(httpServer,{
            cors:"*"
        });
        return io
    },
    getIo:()=>{
        if(!io)throw new Error("socket error");
        return io;
    }
};
