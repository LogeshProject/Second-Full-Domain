// db.user.insertMany(
//     [
//         { "_id": 1, "name": "Alice", "age": 25 },
//         { "_id": 2, "name": "Bob", "age": 30 },
//         { "_id": 3, "name": "Charlie", "age": 35 }
//     ]  
// )



// db.order.insertMany(
// [
//     { "_id": 101, "userId": 1, "product": "Laptop", "quantity": 1 },
//     { "_id": 102, "userId": 1, "product": "Phone", "quantity": 2 },
//     { "_id": 103, "userId": 2, "product": "Tablet", "quantity": 1 }
// ]    
// )

/*

        LOOKUP - Left Outer join - aggreagation stage


*/


db.user.aggregate(
    [
        {
            $lookup:{
                from : 'order',
                localField : '_id',
                foreignField : 'userId',
                as : 'Orders'
            }
        }
    ]
)




