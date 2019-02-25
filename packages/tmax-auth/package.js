Package.describe({
	name: 'tmax:auth',
	version: '0.1.0',
	summary: '',
	git: '',
	documentation: 'README.md',
});

Package.onUse(function(api) {
	api.use([]);

	api.addFiles('client/tmax.js', 'client');

	api.export('Tmax', 'client');
});
