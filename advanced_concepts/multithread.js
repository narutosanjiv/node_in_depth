process.env.UV_THREADPOOL_SIZE=6
const fs = require('fs')
const crypto = require('crypto')
const https = require('https')

const startTime = Date.now()

function doRequest(){
    https.request('https://www.google.com', res => {
        res.on('data', () => {})
        res.on('end', () => {
        console.log('https', Date.now() - startTime)
        })
    })
    .end()
}

function doHash(i){
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log(`Hash${i}`, Date.now() - startTime)	
    });
}

doRequest()


doHash(1)
doHash(2)
doHash(3)
doHash(4)
doHash(5)

fs.readFile('./multithread.js', 'utf-8', () => {
    console.log("File Read", Date.now() - startTime)
})