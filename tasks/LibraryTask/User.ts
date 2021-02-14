"use strict"

import {
    v4 as uuidv4
} from 'uuid';
import Validator from "./Validator";

export { User, UserInterface };

interface UserInterface {
    readonly _id: string;
    name: string;
    surname: string;
}

class User implements UserInterface {
    readonly _id: string;
    name: string;
    surname: string;

    constructor(name: string, surname: string) {
        if (!Validator.isEmptyString(name)) throw new Error("Invalid name input");
        if (!Validator.isEmptyString(surname)) throw new Error("Invalid surname input")

        this._id = uuidv4();
        this.name = name;
        this.surname = surname;
    }
}