var request = require('request'),
	util 	= require('../util');

module.exports = function (param) {
	var	channel		= param.channel,
		endpoint	= param.commandConfig.endpoint,
    	dunnos		= Array("Sayeb Salah!", "no idea!", "no fucking idea!", "Sorry, we are missing these data!", "wtf !!!!!", "euhhhhh!");



	var _setLocation = function (url) {
		var endpoint = url;

		/*
		TODO We need to modify the endpoint url and replace the tag {CityCountry} with the equivalent City,Country based on the param.args values
		The first found args having a city value like paris, tunis, florida, madrid will determine what we will return.
		*/
        if(param.args.some(elem => elem.toLowerCase().indexOf("paris") !== -1 ))
            endpoint = url.replace('{CityCountry}', "Paris,France");
        if(param.args.some(elem => elem.toLowerCase().indexOf("Tunis") !== -1 ))
            endpoint = url.replace('{CityCountry}', "Tunis,Tunisie");

        if(param.args.some(elem => elem.toLowerCase().indexOf("Orlando") !== -1 ))
            endpoint = url.replace('{CityCountry}', "Orlando,Florida");
            
		return endpoint
	};


	var _getRandomDunno = function () {

        return dunnos[0];
        //return dunnos[Math.floor(Math.random()*dunnos.length)]
	};


    //Calling the Api and post the result
    var _callWeatherApi = function (postMessage) {
        var info = [];

        if (endpoint.indexOf('{CityCountry}') === -1) {
            request(endpoint, function (err, response, body) {

                if (!err && response.statusCode === 200) {
                    body = JSON.parse(body);

                    info.push('Location: ' + body.location);
                    info.push(body.description + " " + body.condition);
                    _postMessage(info.join('\n'));
                    return;
                }
                else {
                    info.push(_getRandomDunno()); // arbitrary dunno!
                }

            });
        }
        else {
            info.push(_getRandomDunno()); // arbitrary dunno!
        }

        info.push("Sorry not yet implemented");
        _postMessage(info.join('\n'));
    };

    var _postMessage = function (message) {
        console.log("final " + message);
        util.postMessage(channel, message);
    };

	endpoint	= _setLocation(param.commandConfig.endpoint);
	_callWeatherApi();

};