import axios from 'react-native-axios';
import NavigatorService from '../services/navigator';
import { NetInfo } from 'react-native';
import { omit } from 'ramda';
import alert from '../functions/alert';
import { autobind } from 'core-decorators';

console.group = console.group || (() => {});
console.groupEnd = console.groupEnd || (() => {});

export default class Request {
  host = 'http://120.0.0.1:8000';

  headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  constructor(token) {
    if (token) {
      this.setToken(token);
    }

    this.axios = axios.create({
      baseURL: this.host,
      headers: this.headers,
    });
  }

  @autobind
  static init(token) {
    return new this(token);
  }

  setToken(token) {
    this.headers['Authorization'] = 'Bearer ' + token;

    return this;
  }

  clearToken() {
    this.headers = omit(['Authorization'], this.headers);

    return this;
  }

  request(url, method = 'GET', data = {}) {

    url = url.startsWith('http') ? url : this.host + url;

    const options = {
      method,
      data,
      url
    };

    if (method.toUpperCase() === 'GET') {
      options.body = undefined;
      options.data = undefined;
      options.params = data;
    }

    console.group('Making request on [' + this.__proto__.constructor.name + ']:');
    console.log('Url:', url);
    console.log('Data:', data);
    console.groupEnd();

    return new Promise((resolve, reject) => {
      this.axios.request(options)
        .then(response => {
          console.group('Request SUCCESS on [' + this.__proto__.constructor.name + ']:');
          console.log('Url:', url);
          console.log('Data:', data);
          console.log('Response:', response);
          console.log('Status:', response.status);
          console.log('Success:', response.data.success);
          console.log('Data:', response.data);
          console.log('Message:', response.data.message);
          console.groupEnd();

          if (response.data.success) {
            resolve(response.data);
          }

          if (response.data.message) {
            reject(response.data.message);
          }

          resolve(response.data);
        })
        .catch(error => {
          console.group('Request ERROR on [' + this.__proto__.constructor.name + ']:');

          console.log('Url:', url);
          console.log('Data:', data);
          console.log('Response:', error.response || 'No response');

          if (error.response) {
            console.log('Status:', error.response.status);
            console.log('Success:', error.response.data.success);
            console.log('Data:', error.response.data);
            console.log('Message:', error.response.data.message);
          }

          console.groupEnd();

          reject(error)
        });
    });
  }
}
