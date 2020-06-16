import {City} from './cityAndCommunity.js'
import {Community} from './cityAndCommunity.js'
import functions from './fetch.js'
global.fetch = require('node-fetch');


let testCommunity = new Community;
let key = 0;


test('Does the fetch initial test work?', () => {
    expect(testCommunity).toEqual({"cities": []});
});

test('Does the fetch request work?', async () => {
    let data = await functions.postData('http://127.0.0.1:5000/all')
    console.log(data);
    data.forEach(value => {
        community.createCity(value.name, parseFloat(value.lat, 10), parseFloat(value.long, 10), parseFloat(value.key));
        if (value.key >= key) key = value.key + 1;
    })

    expect(testCommunity).toEqual({"cities": [232903832094]});

})
