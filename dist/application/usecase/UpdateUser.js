"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = void 0;
class UpdateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute(user) {
        console.log('usecase Update: ' + user.id + ' ' + user.name);
        return this.userRepository.update(user);
    }
}
exports.UpdateUser = UpdateUser;
