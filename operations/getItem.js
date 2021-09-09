const AWS = require('aws-sdk')
let dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1'})

let params = {
    TableName: 'ServerlessSeries',
    Key: {
        pk: 'marco.mercado@mail.com',
        sk: 'user'
    },
    ReturnConsumedCapacity: 'TOTAL'
}

dynamodb.get(params, (err, data) => {
    if (err) console.log(err)
    else console.log(data.Item)
})