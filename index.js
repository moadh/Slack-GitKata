var slackTerminal = require('slack-terminalize');

slackTerminal.init(process.env.BOT_API_KEY || 'xoxb-109593544883-SUhQ5vS5vDxbXaVSRP4clzGj', {
    // slack rtm client options here
    // more info at: https://github.com/slackhq/node-slack-client/blob/master/lib/clients/rtm/client.js
}, {
    // app configurations to suit your project structure
    // to see the list of all possible config,
    // check this out: https://github.com/ggauravr/slack-terminalize/blob/master/util/config.js
	CONFIG_DIR: __dirname + '/config',
	COMMAND_DIR: __dirname + '/commands'
});
