var request = require('request'),
	util 	= require('../util');

module.exports = function (param) {
	var	channel		= param.channel,
		endpoint	= param.commandConfig.endpoint,
    	dunnos		= Array("dunno!", "no idea!", "no fucking idea!", "Sorry, we are missing these data!", "wtf !!!!!", "euhhhhh!"),
    	info 		= [];
		
	

	var _setLocation = function (url) {
		var endpoint = url;

		/*
		TODO We need to modify the endpoint url and replace the tag {CityCountry} with the equivalent City,Country based on the param.args values
		The first found args having a city value like paris, tunis, florida, madrid will determine what we will return.
		*/

        endpoint = url.replace('{CityCountry}', "Paris,France");
			

		return endpoint
	};

	/*
	var _getRandomDunno = function () {
		var dunnos		= Array("dunno!", "no idea!", "no fucking idea!", "Sorry, we are missing these data!", "wtf !!!!!", "euhhhhh!")
		return dunnos[Math.floor(Math.random()*dunnos.length)]
	};
	*/

    //Calling the Api and post the result
    var _callWeatherApi = function (message) {
        if (endpoint.indexOf('{CityCountry}') === -1) {
            request(endpoint, function (err, response, body) {
                info = [];

                if (!err && response.statusCode === 200) {
                    body = JSON.parse(body);

                    info.push('Location: ' + body.location);
                    info.push(body.description + " " + body.condition);
                }
                else {
                    info.push(_getRandomDunno()); // arbitrary dunno!
                }
            });
        }
        else {
            info.push(_getRandomDunno()); // arbitrary dunno!
        }
    };

    var _postMessage = function (message) {
        util.postMessage(channel, message.join('\n'));
    };

	endpoint	= _setLocation(param.commandConfig.endpoint);
	_callWeatherApi();
    _postMessage("Sorry, it's not yet implemented !!");// not yet implemented message



};