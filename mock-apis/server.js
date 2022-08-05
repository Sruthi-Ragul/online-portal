const http = require('http');
const mockserver = require('mockserver');


const config = {
	"mockServer": {
		"dir": "src",
		"port": 4000
	}
}

const port = config.mockServer.port;
const baseDir = config.mockServer.dir;

console.info(`[APP] Scanning ${baseDir}`);
console.info(`[APP] Running on ${port}`);

http.createServer(mockserver(baseDir, true)).listen(port);
