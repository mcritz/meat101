import { Template } from 'meteor/templating';

import '../../client/main.html';

Template.body.helpers({
	tacks : [
		{text : 'Steal Underwear'},
		{text : '????'},
		{text : 'PROFIT!'}
	],
});
