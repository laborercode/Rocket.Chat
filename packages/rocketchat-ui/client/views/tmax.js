import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.tmaxPage.events({
	'submit #form'(event) {
		event.preventDefault();

		const form = event.target;
		return FlowRouter.go('/tmax/login', {},
			{ userId: form.userId.value, passwd: form.passwd.value });
	},
});
