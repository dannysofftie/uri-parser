
/**
 * URI parser, takes a url to parse and provides utilities for extracting url search parameter values
 */
export class Parser {
    private url: string
    private test: boolean
    /**
     * 
     * @param {string} url url to parse
     */
    constructor(url: string) {
        this.url = url
        this.test = false
        this.parse(this.url)
    }
    private parse(url: string) {
        let regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
        return regex.test(url) ? this.test = true : this.test = false
    }
    public extract(param: string): string {
        if (this.test == false)
            throw new Error('URL does not confrom to WHATWG URL standard')
        if (typeof param == undefined)
            throw new Error('Expected param to search but found none')
        if (this.url.indexOf('?') == -1)
            return 'Can\'t get search params'
        else {
            let params: Array<string> = [],
                paramValue = ''
            if (this.url.split('?')[1].indexOf('&') !== -1)
                params = this.url.split('?')[1].split('&')
            else
                params = Array.from(this.url.split('?')[1])
            params.forEach(p => {
                if (p.split('=')[0].trim() === param.trim())
                    paramValue = p.split('=')[1].trim()
                else
                    paramValue = ''
            })
            return paramValue
        }
    }
}