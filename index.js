"use strict";
exports.__esModule = true;
var flysh_1 = require("flysh");
let IM = new InputMessage('.','/test.html');

IM.addFilterSelector("table tr td")
     .addField('prod','td','')
     .addField('brol1','td','')
     .addField('brol2','td','');

console.log(flysh_1.IOMessageMapper.toJSON(IM));

/**
 * todo create a cserv.be/test/page.html for distant tests
 */
var flyshInstance = new flysh_1.Flysh(IM);
flyshInstance.run().then(function (results) {
    console.log('Pages/Total of Records [' + results.numberOfPages + ', '
        + results.numberOfRecords + ']'
        + "\n" + 'Integrity Check ' + ': '
        + results.integrityCheck);
    results.pageRecordList.forEach(function (e) { console.log(e); });
    console.log("\n### End of process ###\n");
});
