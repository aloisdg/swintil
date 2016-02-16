#!/usr/bin/env node

require('./index.js')

function getTime(accurancy) {
    return (new Date()).toInternetTime(accurancy)
}

function getOneHour(accurancy) {
    var birthday = new Date(1992, 11, 25, 10, 0, 0)
    return birthday.toInternetTime(accurancy)
}

console.log(getTime(3))
console.log(getTime(1))
console.log(getOneHour(3))