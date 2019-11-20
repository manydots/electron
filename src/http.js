const {
	net
} = require('electron');

function WebAPI(options, callback) {

	const request = net.request('https://music.jeeas.cn/');
	request.on('response', (response) => {
		console.log(`STATUS: ${response.statusCode}`)
		//console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
		response.on('data', (chunk) => {
			//console.log(`BODY: ${chunk}`)
		});
		response.on('end', () => {
			//console.log('No more data in response.')
		});
	});
	request.end();
};

module.exports = {
	WebAPI: WebAPI
}