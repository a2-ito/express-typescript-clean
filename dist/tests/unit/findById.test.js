"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepositoryImpl_1 = require("../../interface/database/memory/UserRepositoryImpl");
const FindById_1 = require("../../application/usecase/FindById");
const User_1 = require("../../domain/User");
const findByIdExpect = require('./findByIdExpect.json');
describe('auth', () => {
    const u = new UserRepositoryImpl_1.UserRepository;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const user = new User_1.User(1, "sample1", "sample1_firstname", "sample1_lastname", "sample1@example .com");
        const mockTextExec = jest.spyOn(u, 'findById').mockImplementation((param) => {
            return Promise.resolve(user);
        });
    }));
    test('', () => __awaiter(void 0, void 0, void 0, function* () {
        const findbyid = new FindById_1.FindById(u);
        yield expect(findbyid.execute(1)).resolves.toEqual(findByIdExpect);
    }));
});
