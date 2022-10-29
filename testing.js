const http = require('http')
var fs = require('fs')


const server = http.createServer(function(req, res){

        fs.readFile('Home.html', function(err, data){

        res.writeHead ( 200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
})
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log('Server running on port `$[PORT]`'))
