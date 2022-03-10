"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllUsers = void 0;
class FindAllUsers {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute() {
        console.log('usecase FindAllUsers');
        return this.userRepository.findAll();
    }
}
exports.FindAllUsers = FindAllUsers;
