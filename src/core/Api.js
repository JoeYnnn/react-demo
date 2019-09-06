/**
 * Created by yueer on 16/10/19.
 */
import cookie from 'react-cookie';
import Const from './Const';
import fetch from './fetch'
import fetchJsonp from 'fetch-jsonp'

export const PROXY_TO_API = 'proxy_to_api';
export const API_HOST = process.env.NODE_ENV === 'production' ? 'http://api.kachexiongdi.com' : 'http://test.api.kachexiongdi.com';

const Api = {

	// 使用代理，让node服务器请求leancloud的接口
	host: {
		main: process.env.NODE_ENV === 'production' ? PROXY_TO_API : PROXY_TO_API,
		appMain: process.env.NODE_ENV === 'production' ? 'http://123.56.126.153:3000' : 'http://123.56.126.153:9000',
		apiMain: process.env.NODE_ENV === 'production' ? 'http://39.106.248.16' : 'http://test.api.kachexiongdi.com',
	},

	path: {
		//登录接口 username:用户名 password:密码
		login: '/v1/user/login',
		logout: '/v1/user/logout',
},

	/**
	 * 拼接一个可以访问的url
	 * @param host eg. http://kcsj.leanapp.cn
	 * @param path eg. /login
	 * @param queryObject eg. {name: 'xunaixuan', phone: '18610351888'}
	 */
	assembleUrl(host, path, queryObject) {
		return host + path + this.assembleQueryParams(queryObject);
	},
	/*
	* 拼接文件上传的url
	* @param path eg. /uploadFile
	* */
	assembleFileUrl(path){
		return this.host.apiMain + path;
	},

	/**
	 * 将一个object转为一个query类型的string
	 * @param object
	 * @returns {string}
	 */
	assembleQueryParams(object) {
		let query = "";
		let index = 0;
		for (let key in object) {
			if (index == 0) {
				query += '?' + key + '=' + object[key];
			} else {
				query += '&' + key + '=' + object[key];
			}
			index++;
		}
		return query;
	},

	request(url, successCallback, errorCallback) {
		fetch(url,
			{headers: {"Cookies": cookie.load(Const.cookie.SESSION_ID)}}
		)
			.then(response => response.json())
			.then(response => {
				successCallback && successCallback(response);
			})
			.catch(error => {
				if (errorCallback) {
					errorCallback(error);
				} else {
					console.log(error);
				}
			});
	},

	requestPost(url, data, successCallback, errorCallback) {
		fetch(url,
			{
				headers: {
					"Content-Type": 'application/json',
					"Cookies": cookie.load(Const.cookie.SESSION_ID)
				},
				method: "POST",
				body: JSON.stringify(data),
			}
		)
			.then(response => response.json())
			.then(data => {
				successCallback && successCallback(data);
			}).catch(error => {
      errorCallback && errorCallback(error)
		});
	},

	uploadFile(url, data, successCallback, errorCallback){
		fetch(url, {
			method: "POST",
			body: data,
		})
			.then(response => response.json())
			.then(data => {
				successCallback && successCallback(data);
		}).catch(error => {
      errorCallback && errorCallback(error)
		});
	},

  requestByJsonp(url, successCallback, errorCallback) {
      console.log('url', url);
      fetchJsonp(url)
          .then(response => response.json())
          .then(response => {
            successCallback && successCallback(response);
          })
          .catch(error => {
            if (errorCallback) {
              errorCallback(error);
            } else {
              console.log(error);
            }
          });
    },


};

export default Api;
