
// pattern matching 

// db.developers.find({name : {$regex : /^d.*z$/i }})





// date

// db.developers.find({hire_date : {$gt : ISODate("2023-06-01T00:00:00Z") }})





// compare with same Field

// db.developers.find({
//     $expr : { $gt : [{$size : '$skills'},5]}
// })


// max , avg , min = using aggregation group stage

// db.developers.aggregate([ 
//     {
//         $group : {_id : "$role" , MaxSalary : {$max : '$salary'}}
//     }
// ])
