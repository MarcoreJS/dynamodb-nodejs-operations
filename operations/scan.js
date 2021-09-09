const AWS = require('aws-sdk')
let dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1'})

let params = {
    TableName: 'ServerlessSeries',
    ReturnConsumedCapacity: 'TOTAL'
}

dynamodb.scan(params, (err, data) => {
    if (err) console.log(err)
    else console.log(data.Items)
})