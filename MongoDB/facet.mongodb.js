

db.developers.aggregate([

    {
        $facet :{
            UniqueSkills :[
                {$unwind : '$skills'},
                {$group : {_id : '$skills' , Count : {$sum : 1}}},
                {$match : {Count : 1}}
            ],
            HighestSal :[
                {$group : {_id : '$role' , Sal : {$max : "$salary"}}},
                {$sort : {Sal : -1}} , {$limit : 1}
            ]
        }
    }
])