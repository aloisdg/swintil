import test from 'ava';
require('./../source/index.js')

const date = new Date(1992, 11, 25, 0, 0, 0)

test('is hour valid', t => {
    date.setHours(10)
    t.is(date.toInternetTime(0), '@229')
    date.setHours(0)
})

test('is minute valid', t => {
    date.setMinutes(30)
    t.is(date.toInternetTime(0), '@833')
    date.setMinutes(0)
})
 
test('is second valid', t => {
    date.setSeconds(42)
    t.is(date.toInternetTime(0), '@812')
    date.setSeconds(0)
})