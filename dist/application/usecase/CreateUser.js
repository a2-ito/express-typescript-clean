"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute(user) {
        console.log('usecase CraeteUser');
        return this.userRepository.create(user);
    }
}
exports.CreateUser = CreateUser;
