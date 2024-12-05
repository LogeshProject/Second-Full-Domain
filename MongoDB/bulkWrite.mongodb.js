// use ('test')

// show('dbs')

// show ('collections')

// db.developers.find()
db.userData.find()


/*
*
*                  BULK WRITE 
*

    insertOne(document) , updateOne(filter , update(atomic operator))

    deleteOne(filter) , replaceOne(filter , replacement)
*/






// db.userData.bulkWrite([
//     {
//         insertOne :{
//             document : {name : "Logu" , age : 23}
//         }
//     },
//     {
//         updateOne : {
//             filter : {name : "LogeshLogu"},
//             update : {$set : {name : 'Logesh' }}
//         }
//     },
//     {
//         deleteOne : {
//             filter : {name : "ArunKumar"}
//         }
//     },
//     {
//         deleteOne : {
//             filter : {name : "AbinBabu2"}
//         }
//     }, 
//     {
//         replaceOne : {
//             filter : {name : 'Vicky'},
//             replacement : {name : "Vignesh" , age : 23}
//         }
//     }
// ])


