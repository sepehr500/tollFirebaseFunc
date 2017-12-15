

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const genFunc  = require('./functionGen')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
admin.initializeApp(functions.config().firebase)
exports.glebeWashington = genFunc.genFunc( '/eb/glebe/washington')
exports.dullesWashington = genFunc.genFunc('/eb/dulles/washington');
exports.washingtonDulles = genFunc.genFunc('/wb/washington/dulles');
exports.washingtonGlebe = genFunc.genFunc( '/wb/washington/glebe')
exports.nutleyWashington = genFunc.genFunc( '/eb/nutley/washington')
exports.washingtonNutley = genFunc.genFunc( '/wb/washington/nutley')
