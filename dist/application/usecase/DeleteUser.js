"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = void 0;
class DeleteUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute(id) {
        console.log('usecase FindById');
        return this.userRepository.delete(id);
    }
}
exports.DeleteUser = DeleteUser;
