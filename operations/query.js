const AWS = require('aws-sdk')
let dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1'})

let params = {
    TableName: 'ServerlessSeries',
    ReturnConsumedCapacity: 'TOTAL',
    ExpressionAttributeNames: {
        '#sk': 'sk',
        '#pk': 'pk'
    },
    ExpressionAttributeValues: {
        ':sk': 'task#',
        ':pk': 'marco.mercado@mail.com'
    },
    KeyConditionExpression: '#pk = :pk and begins_with(#sk, :sk)'
}

dynamodb.query(params, (err, data) => {
    if (err) console.log(err)
    else console.log(data.Items)
})