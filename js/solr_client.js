import fetch from 'isomorphic-fetch'

export default class StreamingExprClient {
    constructor(url) {
        this.baseUrl = url;

    }

    getGraphData(expr) {

         return fetch(`${this.baseUrl}?expr=${expr}`)
            .then(response => response.json())


    }
}