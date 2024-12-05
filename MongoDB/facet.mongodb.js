

db.developers.aggregate([

    {
        $facet :{
            HigherSal :{
                
            },
            skills :{

            }
        }
    }
])