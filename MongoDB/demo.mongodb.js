

//db.createCollection('myCapped',{capped : true , size : 100 , max : 3})

// db.myCapped.insertOne({y:4})

// db.myCapped.find()


// db.user.insertOne({x:1})

// db.runCommand({convertToCapped : "user" , size : 100 , max : 3})

// db.user.isCapped()


// db.createView( 'HighSalary' , 'developers' , 
//     [
//         {
//             $group : {_id : "$role" , Salary : {$max : "$salary"}}
//         }
//     ]
// )

// db.HighSalary.find()

// db.developers.find({name : {$regex : /^.*z$/i}})


// db.developers.aggregate([
//     {
//         $unwind : '$skills'
//     },
//     {
//         $group : {_id : "$skills" , Count : {$sum : 1}}
//     },
//     {
//         $match : {Count : 1}
//     },
//     {
//         $project :{ Unique : "$_id" , _id : 0}
//     },
//     {
//         $match : { Unique : {$regex : /^v.*$/i}}
//     }
// ])



// db.users.insertOne({_id : 1 , name : "Logesh" , age : 23})
// db.users.insertOne({_id : 2 , name : "Mani" , age : 26})
// db.users.insertOne({_id : 3 , name : "Sanju" , age : 24})


// db.orders.insertOne({_id : 103 , userId : 2 , product : "Shoes" , price : 3000})


// db.users.aggregate([
//     {
//         $lookup : {
//             from : 'orders',
//             localField : '_id',
//             foreignField : "userId" ,
//             as : 'OrderDetails'
//         }
//     }
// ])



// db.developers.find({$expr : {$gt : [{$size : '$skills'} , 5]}})


// db.developers.find({hire_date : {$gt :ISODate('2023-01-01T00:00:00.000Z') }})


// db.developers.aggregate([
//     {
//         $facet: {

//             higherSalary : [
//                 {$group : {_id : "$role" , MaxSalary : {$max : '$salary'}} }
//             ],
//             highSalPerson : [
//                 {$sort : {salary : -1} },
//                 {$limit : 1}
//             ]
//         }
//     }
// ])






// db.users.bulkWrite([
//     {
//         insertOne : {document : {_id : 4 , name : "Mohan" , age : 23}}
//     },
//     {
//         updateOne : {filter :{name : "Mani"} , update : {$set : {age : 29}}}
//     },
//     {
//         deleteOne : {filter : {name : 'Sanju'}}
//     },
//     {
//         replaceOne : {filter : {name : "Logesh"} , replacement : {_id : 1 , name : "Logu" , age : 24}}
//     },
    
// ],{ordered : true})



// db.users.find()