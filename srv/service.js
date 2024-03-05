const cds = require('@sap/cds');
const { log } = require('console');
const { response } = require('express');

module.exports = cds.service.impl(async function init() {
    let {
        college
    } = this.entities;

    this.before('READ', college, async (req) => {
        req.query.SELECT.orderBy = [{ ref: ['collid'], sort: 'asc' }];
    })

    this.on('POST', college, async (req) => {
        debugger;
        try {
            const { maxID } = await SELECT.one`max(collid) as maxID`.from(college);
            req.data.collid = maxID + 1;
            await INSERT.into(college).entries(req.data);
            return req.data;
        } catch (error) {
            console.log("error ==> ", error);
        }
    })

    // this.after('POST',college,async(req) => )
})