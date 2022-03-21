import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'

export const handler: APIGatewayProxyHandler = async (req: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const result = {
            message: `Hello my friend ${req.queryStringParameters?.name}!`
        }
        const response: APIGatewayProxyResult = {
            statusCode: 200,
            body: JSON.stringify(result),
            headers: {
                contentType: 'application/json'
            }
        }
        return response
    } catch (error) {
        return {
            statusCode: 500,
            body: 'An error occured'
        }
    }
}
