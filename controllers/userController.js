import { User } from '../models/index.js';

class UserConroller {
  async new (req, res, next) {
    const user = await User.create({name: "Test"});
    console.log(user.name);
  }
}


export default new UserConroller();