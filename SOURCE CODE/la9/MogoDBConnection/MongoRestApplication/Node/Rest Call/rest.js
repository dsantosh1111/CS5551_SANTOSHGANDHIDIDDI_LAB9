var request = require('request');
request('https://api.foursquare.com/v2/venues/search?client_id=5RYB40AYKCXC1XJBOW5VSBDX1MOSEIMUILZES5O230Q3WIRV&client_secret=5RYB40AYKCXC1XJBOW5VSBDX1MOSEIMUILZES5O230Q3WIRV&v=20160215&limit=10&near=Kansas&query=pizza', function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
//	console.log(body);
    //All is good. Print the body
    body = JSON.parse(body);
	var ven = body.response.venues;
	var i;
	for(i=0;i<ven.length;i++)
	{
		console.log(ven[i].name);
	}
	
});