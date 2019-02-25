import axios from 'axios';
// import htmlparser from 'htmlparser2';
// import querystring from 'querystring';
import axios_cookiejar_support from 'axios-cookiejar-support';
// import tough_cookie from 'tough-cookie';

axios_cookiejar_support(axios);

// const cookieJar = new tough_cookie.CookieJar();

// const loginUrl = 'https://stims.tmax.co.kr/checkUserInfo.tmv?tmaxsso_nsso=yes';
// const ssoUrl = 'https://sso.tmax.co.kr/ssoserver/__tmax_eam_server__?tmaxsso_action=';
// const timsUrl = 'https://stims.tmax.co.kr/frame.screen';

// const parseParam = function(response) {
// 	var tmaxsso_params = {};
// 	var parser = new htmlparser.Parser({
// 		onopentag: function(name, attrs) {
// 			if (name === 'input' && attrs.name.startsWith('tmaxsso_')) {
// 					console.log(attrs.name + ": " + attrs.value);
// 					tmaxsso_params[attrs.name] = attrs.value;
// 				}
// 			}
// 		});
//
// 	parser.write(response.data);
// 	parser.end();
//
// 	return tmaxsso_params;
// }

// const token_registration = function(params) {
// 	const config = {
// 		jar: cookieJar,
// 		withCredentails: true,
// 		headers: {
// 			'Content-Type': 'application/x-www-form-urlencoded',
// 		}
// 	}
// 	axios.post(ssoUrl + 'token_registration', querystring.stringify(params), config)
// 	.then(response => { response; })
// 	.catch((err) => { throw err; })
// }

// class Tmax {
//	constructor() {
//	}
//
//	login(id, passwd) {
//		return new Promise(function(resolve, reject) {
//			const config = {
//				jar: cookieJar,
//				withCredentails: true,
//				headers: {
//					'Content-Type': 'application/x-www-form-urlencoded',
//				}
//			}
//			const params = {
//				userId: id,
//				passwd: passwd,
//			}
//
//			axios.post(loginUrl, querystring.stringify(params), config)
//					.then(parseParam)
//					.catch(reject)
//					.then(token_registration)
//					.catch(reject)
//					.then(resolve)
//					.catch(reject);
//		});
//	}
// }
