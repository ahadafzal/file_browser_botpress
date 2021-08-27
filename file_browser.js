
const http = require('http');
const express = require('express');
const path = require('path');
const fs = require('fs');
const WebSocket = require('ws');
const cors = require('cors');


dirs = process.argv
dirs.splice(0,2)
dirs.forEach(d => {
    if (!fs.existsSync(d)){
        console.log(d+" is not a valid directory. Please enter a valid directory")
        process.exit(1)
    }
});


const app = express();
app.use(cors());
app.options('*', cors());
var server = http.createServer(app);
app.use(express.static(__dirname));
app.use(express.static("public"));


const wss = new WebSocket.Server({ server : server})

const returnTree = async (dir,ws) => {
    let response_array = []
    await fs.readdir(dir,(err,files) => {
        if (err) {
            

        } else {
            files.forEach(f => {
                try {
                    if (fs.statSync(path.join(dir, f)).isDirectory()){
                        response_array.push({path:path.join(dir, f),name:f,isDir:true,children:[{path:path.join(dir, f,'ra'),name:'loading..'}]})
                    }
                    else{
                        response_array.push({path:path.join(dir, f),name:f,isDir:false})
                    }
                } catch (error) {
                    console.log('ignoring non-accessible file/folder: '+path.join(dir, f)+" type restarting with 'sudo node file_browser'")
                }
               
                
            });
        }

        ws.send(JSON.stringify(response_array))
    });
    
    
}

wss.on('connection',(ws)=>{
    ws.on('message',function incoming(message) {
        returnTree(JSON.parse(message).dir,ws)
        fs.watch(JSON.parse(message).dir, (eventType, filename) => {
            setTimeout(() => returnTree(JSON.parse(message).dir,ws),500)
            
          });
      }) 
    
   
})





app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));

})

app.get('/dirs',(req,res) => {
    if (dirs.length === 0){
        console.log('no directory specified, using current directory.')
        res.end(JSON.stringify(['.']))
    }
    

    res.end(JSON.stringify(dirs))

})

PORT = 3000 

server.listen(PORT,() => console.log(`Serving on port:${PORT}\n\nOpen http://localhost:${PORT} in the browser.`));