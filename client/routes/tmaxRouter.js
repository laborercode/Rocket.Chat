import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Tmax } from 'meteor/tmax:auth';

FlowRouter.route('/tmax', {
	name: 'tmax',
	action() {
		BlazeLayout.render('tmaxPage');
	},
});

FlowRouter.route('/tmax/login', {
	name: 'tmax-login',
	action(params, queryParams) {
		console.log(queryParams);

		window.addEventListener('message', (e) => {
			// FIXME
			// if (! _.isObject(e.data)) {
			// return;
			// }

			switch (e.data.event) {
				case 'login-error':
					console.log(e.data.response);
					FlowRouter.go('/login');
					break;
			}
		});

		Tmax.login(queryParams.userId, queryParams.passwd)
			.then(() => {
				console.log('login success');
			})
			.catch((err) => { console.log(err); });

		window.parent.postMessage({
			event: 'login-with-token',
			loginToken: 'asdfasdf',
		}, this);
	},
});
