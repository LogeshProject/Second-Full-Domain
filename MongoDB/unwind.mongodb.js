db.developers.find()



// db.developers.aggregate([

//     { $unwind : "$skills"},
//     { $group : {_id : '$skills' , count : {$sum : 1}} },
//     { $match : {count : 1}}
// ])


// db.developers.aggregate([

//     {$group : {_id : '$role' , Count : {$sum : 1}}},
//     {$sort : {Count : -1}} ,
//     {$limit : 1}
    
// ])


// db.developers.aggregate([

//     {$unwind : "$skills"},
//     {$match : {skills : {$regex : /^java.*$/i}}},
    
// ])





// db.developers.aggregate([
//     {$match : {$and : [{age :{$gt : 20}} , {age :{$lt: 30}}]}},
//     {$match : {salary : {$gt : 80000}}},
//     {$unwind : "$skills"},
//     {$match : { skills : {$regex : /^java.*$/}}},
    
// ])



