"use strict"

import {
    v4 as uuidv4
} from 'uuid';

const moment = require('moment')
import Validator from './Validator';
import { UserInterface } from './User';

export default class SuperUser implements UserInterface {
    readonly _id: string;
    access: string;
    name: string;
    surname: string;
    gender: string;
    birth: string;
    password: string;
    email: string;

    constructor(name: string, surname: string, gender: string, birth: string, password: string, email: string) {
        if (Validator.isEmptyString(name)) throw new Error("Invalid name input");
        if (Validator.isEmptyString(surname)) throw new Error("Invalid surname input");
        if (Validator.isValidGender(gender)) throw new Error("Invalid gender input");
        if (Validator.isDate(birth)) throw new Error("Invalid date");
        if (Validator.isPassword(password)) throw new Error("Invalid password");
        if (Validator.isEmail(email)) throw new Error("Invalid email input");


        this._id = uuidv4();
        this.access = "admin";
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.birth = moment(birth).format('MM/DD/YYYY');
        this.password = password;
        this.email = email;
    }
}