

// db.developers.find({referred: { $exists : false}})

// db.developers.find(
//     {
//         hire_date :{

//             $gte : ISODate('2023-01-01T00:00:00Z') ,
//             $lt : ISODate('2023-01-04T00:00:00Z')
//         }
//     }
// )


// db.developers.find({$expr : {$gt : [{$size : '$skills'}, 5]}})


// db.developers.aggregate([
//     {
//         $unwind : "$skills"
//     },
//     {
//         $group : {_id : "$skills" , Count : {$sum : 1}}
//     },
//     {
//         $sort : {Count : -1}
//     },
//     {
//         $limit:  1
//     }
// ])


//  db.developers.aggregate([
//         {
//             $unwind : "$skills"
//         },
//         {
//             $group : {_id : "$skills" , Count : {$sum : 1}}
//         },
//         {
//             $match : { Count : 1}
//         },
        
//     ])


db.developers.aggregate([
    {
        $facet :{
            "higherSal" :[
                {
                    $group : {
                        _id : '$name' , maxSal : {$max : "$salary"}
                    }
                },
                {
                    $sort : {maxSal : -1}
                },
                {
                    $limit : 1
                }
            ],
            "fullStack":[
                {
                    $match : {fullstack : true}
                }
            ]
        }
    }
])


