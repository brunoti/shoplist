import Request from './Request';

class UserRequest extends Request {
  signUp(user) {
    return this.request('/sign-up', 'POST', user);
  }
}

export default UserRequest;
