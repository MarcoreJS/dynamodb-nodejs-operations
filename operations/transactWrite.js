const AWS = require('aws-sdk')
let dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' })

let params = {
    ReturnConsumedCapacity: 'TOTAL',
    TransactItems: [
        {
            Put: {
                TableName: 'ServerlessSeries',
                Item: {
                    pk: 'T001',
                    sk: 'task',
                    task_title: 'Clean the kitchen',
                    task_description: 'The assignment is to clean the kitchen this includes wash the dishes, clean the stove, sweep and mop the floor',
                }
            },
        },
        {
            Put: {
                TableName: 'ServerlessSeries',
                Item: {
                    pk: 'T002',
                    sk: 'task',
                    task_title: 'Wash the car',
                    task_description: 'The car should look like new',
                }
            },
        },
        {
            Put: {
                TableName: 'ServerlessSeries',
                Item: {
                    pk: 'marco.mercado@mail.com',
                    sk: 'task#T001',
                    assigned_on: new Date().toISOString(),
                    assignment_status: 'IN_PROGRESS'
                }
            },
        },
        {
            Put: {
                TableName: 'ServerlessSeries',
                Item: {
                    pk: 'marco.mercado@mail.com',
                    sk: 'task#T002',
                    assigned_on: new Date().toISOString(),
                    assignment_status: 'FINISHED',
                    finished_at: new Date().toISOString()
                }
            }
        }
    ]
}

dynamodb.transactWrite(params, (err, data) => {
    if (err) console.log(err)
    else console.log(data)
})