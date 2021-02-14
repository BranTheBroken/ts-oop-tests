import SuperUser from './SuperUser';
import { User, UserInterface } from './User';
import Validator from './Validator';

interface AppInterface {
    userList: UserInterface[];
    superUserList: UserInterface[];

    addUser(user: UserInterface): this;
    addSuperUser(superUser: UserInterface): this;
    changeToSuperUser(superUser: UserInterface, user: UserInterface): this;
    changeUserPassword(superUser: UserInterface, user: UserInterface, oldPassword: string, newPassword: string): this;
};

class App implements AppInterface {
    userList: UserInterface[];
    superUserList: UserInterface[];

    constructor() {
        this.userList = [];
        this.superUserList = [];
    }

    addUser(user: UserInterface): this {
        this.userList.push(user)
        return this;
    }

    addSuperUser(superUser: UserInterface): this {
        this.superUserList.push(superUser);
        return this;
    }

    changeToSuperUser(superUser: UserInterface, user: UserInterface): this {
        if (superUser.access !== 'admin') throw new Error("Not enough permissions");
        user.access = 'admin';

        this.superUserList.push(user);

        const userIdx: number = this.userList.indexOf(user)
        this.userList.splice(userIdx, 1);

        return this;
    }

    changeUserPassword(superUser: UserInterface, user: UserInterface, oldPassword: string, newPassword: string): this {
        if (superUser.access !== 'admin') throw new Error("Not enough permissions");
        if (Validator.isPassword(oldPassword) || oldPassword === user.password) throw new Error("Invalid old password input");
        if (Validator.isPassword(newPassword)) throw new Error("Invalid new password input");

        user.password = newPassword;

        return this;
    }
}

const user = new User("Macius", "Wacha", "male", '2001, 10, 4', "goHa3$jacaP#2", "ggfg@wp.pl");
const superUser = new SuperUser("Iga", "Dłaps", "female", '2009, 8, 12', "pssDSd#54d", "iga@fldls.sd")
const app = new App;

app.addUser(user).addSuperUser(superUser);
console.log(app);