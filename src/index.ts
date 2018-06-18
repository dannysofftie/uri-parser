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



/**
 * URI parser, takes a url to parse and provides utilities for extracting url search parameter values
 */
export class Parser {
    private url: string
    /**
     * 
     * @param {string} url url to parse
     */
    constructor(url: string) {
        if (typeof url == "undefined")
            throw new Error('Expected url to parse but found none')
        if (!this.parse(url))
            throw new Error('URL does not conform to WHATWG URL specs')
        this.url = url
    }
    private parse(url: string) {
        let regex: RegExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
        return regex.test(url)
    }
    public extract(param?: string) {
        if (this.url.indexOf('?') == -1)
            return 'Can\'t get search params'
        else {
            let u: string = this.url.split('?')[1], s, obj: any = {}
            if (u.indexOf('&') != -1) s = u.split('&')
            else s = u
            if (typeof s == "string")
                obj[s.split('=')[0].trim()] = s.split('=')[1]
            else
                s.map(p => obj[p.split('=')[0].trim()] = p.split('=')[1])
            if (typeof param != "undefined")
                return obj[param]
            else return obj
        }

    }
}
