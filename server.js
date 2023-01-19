const http = require("http");
const fs = require("fs");
const PORT = 2000;
const localhost = "localhost";
const  home = fs.readFileSync('./index.html', "utf-8")
const about = fs.readFileSync('./about.html', 'utf-8')
const server = http.createServer((getRequest, sendResponse) => {
    
    if (getRequest.url === "/")
    {
        return sendResponse.end(home)
    }

    else if (getRequest.url === "/about")
    {
        return sendResponse.end(about)
    }
    
})

server.listen(PORT,localhost, ()=> {
    console.log(`start on http://${localhost}:${PORT}`);
})