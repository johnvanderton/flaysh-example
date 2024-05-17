import { Flysh, IOMessageMapper, InputMessage, PageRecords } from "flysh";

 let IM = new InputMessage('.','/test.html');
 IM.addFilterSelector("table tr td")
     .addField('field_1','td','')
     .addField('field_2','td','')
     .addField('field_3','td','');

console.log(IOMessageMapper.toJSON(IM));

/**
 * todo create a cserv.be/test/page.html for distant tests
 */

let flyshInstance = new Flysh(IM);
flyshInstance.run().then((results) => {
    console.log('Pages/Total of Records [' + results.numberOfPages + ', ' 
                                                                       + results.numberOfRecords + ']' 
                                                                       + "\n" + 'Integrity Check ' + ': ' 
                                                                       + results.integrityCheck);
                                results.pageRecordList.forEach((e: PageRecords)=> {console.log(e);});
                                console.log("\n### End of process ###\n");
});
