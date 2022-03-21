import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'

export const handler: APIGatewayProxyHandler = async (req: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        if (!req.body) throw new Error('Body not found')

        const body: { name: string } = JSON.parse(req.body)
        const result = {
            message: `Goodbye ${body.name}`
        }
        const response: APIGatewayProxyResult = {
            statusCode: 200,
            body: JSON.stringify(result),
            headers: {
                'content-type': 'application/json; charset=utf-8'
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
