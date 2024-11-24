Bulit-in modules :


path : __dirname , __filename 
events : new Emitter() , emitter.on , emitter.emit


fs : 
    => readFileSync , return buffer , use 'utf-8' or toString().
    => readFile using callback async
    => writeFileSync

fsPromise : async using promise 

streams : 
    ReadStream :  createReadStream ,
    WriteStream : createWriteStreams , 
    DuplexStream : A Duplex stream is a stream that is both readable and writable,
    TransformStream : A Transform stream is a special type of Duplex stream.

http :
    createServer with text/plain , text/html , application/json , text/html - template using fs 


libuv :
    what : open source , cross platform library written by c 
    why :  because handle async non-blocking operation in node.js
    how : Thread pool , Event loop
