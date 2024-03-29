const AWS = require('aws-sdk')
let dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1'})

let params = {
    TableName: 'ServerlessSeries',
    Item: {
        pk: "marco.mercado@gmail.com",
        sk: "user",
        first_name: "Marco",
        last_name: "Mercado"
    },
    ConditionExpression: "attribute_not_exists(pk)",
    ReturnConsumedCapacity: 'TOTAL'
}

dynamodb.put(params, (err, data) => {
    if (err) console.log(err)
    else console.log(data)
})

