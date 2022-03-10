"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, firstname, lastname, email) {
        this._id = id;
        this._name = name;
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get firstname() {
        return this._firstname;
    }
    set firstname(firstname) {
        this._firstname = firstname;
    }
    get lastname() {
        return this._lastname;
    }
    set lastname(lastname) {
        this._lastname = lastname;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
}
exports.User = User;
