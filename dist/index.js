"use strict";
/*
Copyright Danny Sofftie <dankim761@gmail.com>. All rights reserved

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
*/
exports.__esModule = true;
/**
 * URI parser, takes a url to parse and provides utilities for extracting url search parameter values
 */
var Parser = /** @class */ (function () {
    /**
     *
     * @param {string} url url to parse
     */
    function Parser(url) {
        this.url = url;
        this.test = false;
        this.parse(this.url);
    }
    Parser.prototype.parse = function (url) {
        var regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        return regex.test(url) ? this.test = true : this.test = false;
    };
    Parser.prototype.extract = function (param) {
        if (this.test == false)
            throw new Error('URL does not confrom to WHATWG URL standard');
        if (typeof param == undefined)
            throw new Error('Expected param to search but found none');
        if (this.url.indexOf('?') == -1)
            return 'Can\'t get search params';
        else {
            var params = [], paramValue_1 = '';
            if (this.url.split('?')[1].indexOf('&') !== -1)
                params = this.url.split('?')[1].split('&');
            else
                params = Array.from(this.url.split('?')[1]);
            params.forEach(function (p) {
                if (p.split('=')[0].trim() === param.trim())
                    paramValue_1 = p.split('=')[1].trim();
                else
                    paramValue_1 = '';
            });
            return paramValue_1;
        }
    };
    return Parser;
}());
exports.Parser = Parser;
//# sourceMappingURL=index.js.map