"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindById = void 0;
class FindById {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute(id) {
        console.log('usecase FindById: ' + id);
        return this.userRepository.findById(id);
    }
}
exports.FindById = FindById;
