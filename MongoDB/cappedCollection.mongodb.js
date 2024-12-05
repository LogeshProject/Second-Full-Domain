
/*

            Two ways to create capped collection

*/

show ('collections')

// db.createCollection('myCapped', {capped : true , size : 100 , max : 3});



// db.runCommand({convertToCapped : 'orders' , size : 100 , max : 3})