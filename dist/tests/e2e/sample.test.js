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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
let browser;
let page;
describe('Google', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        browser = yield puppeteer_1.default.launch({
            headless: true,
            slowMo: 18,
        });
        page = yield browser.newPage();
        yield page.goto('https://google.com');
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield page.close();
        yield browser.close();
    }));
    it('should be titled "Google"', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect(page.title()).resolves.toMatch('Google');
    }));
});
