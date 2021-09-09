const AWS = require('aws-sdk')
let dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1'})

let params = {
    TableName: 'ServerlessSeries',
    Key: {
        pk: 'marco.mercado@mail.com',
        sk: 'user'
    },
    ExpressionAttributeNames: {
        '#last_name': 'last_name'
    },
    ExpressionAttributeValues: {
        ':last_name': 'Uchiha'
    },
    UpdateExpression: 'SET #last_name = :last_name',
    ReturnConsumedCapacity: 'TOTAL'
}

dynamodb.update(params, (err, data) => {
    if (err) console.log(err)
    else console.log(data)
})