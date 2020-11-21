"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URLBuilder = /** @class */ (function () {
    function URLBuilder(storageZoneName, storageZoneRegion) {
        var _this = this;
        this.baseURL = 'https://storage.bunnycdn.com';
        this.path = '';
        this.fileName = '';
        this.setPath = function (path) {
            _this.path = path;
            return _this;
        };
        this.setFileName = function (fileName) {
            _this.fileName = fileName;
            return _this;
        };
        this.build = function () {
            var url = _this.baseURL + '/' + _this.storageZoneName + '/';
            if (_this.path.length) {
                url = url + _this.path + '/';
            }
            if (_this.fileName.length) {
                url = url + _this.fileName;
            }
            return url;
        };
        this.storageZoneName = storageZoneName;
        this.storageZoneRegion = storageZoneRegion;
        if (this.storageZoneRegion && this.storageZoneRegion !== 'de') {
            this.baseURL = 'https://' + this.storageZoneRegion + '.storage.bunnycdn.com';
        }
    }
    return URLBuilder;
}());
exports.default = URLBuilder;
