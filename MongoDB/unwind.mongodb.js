
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


