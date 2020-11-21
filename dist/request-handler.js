'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
var axios_1 = __importDefault(require('axios'));
// declare module 'axios' {
//     type AxiosResponse<T = any> = Promise<T>;
// }
var RequestHandler = /** @class */ (function () {
    function RequestHandler(apiAccessKey) {
        this.handleResponse = function (_a) {
            var data = _a.data;
            return data;
        };
        this.handleError = function (error) {
            var _a;
            return Promise.reject((_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
        };
        this.client = axios_1.default.create({
            headers: { AccessKey: apiAccessKey },
        });
        this.client.interceptors.response.use(this.handleResponse, this.handleError);
    }
    return RequestHandler;
})();
exports.default = RequestHandler;
