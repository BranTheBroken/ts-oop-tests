"use strict"

import {
    v4 as uuidv4
} from 'uuid';
import Validator from './Validator';

export { Book, BookInterface }

interface BookInterface {
    readonly _id: string;
    title: string;
    author: string;
    desc: string;
}

class Book implements BookInterface {
    readonly _id: string;
    title: string;
    author: string;
    desc: string;

    constructor(title: string, author: string, desc: string) {
        if (!Validator.isEmptyString(title)) throw new Error("Title input is invalid");
        if (!Validator.isEmptyString(author)) throw new Error("Author input is invalid");
        if (!Validator.isEmptyString(desc)) throw new Error("Desc input is invalid");


        this._id = uuidv4();
        this.title = title;
        this.author = author;
        this.desc = desc;
    }
}