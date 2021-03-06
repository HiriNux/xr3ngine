export default {
    definitions: {
        instance: {
            type: 'object',
            properties: {
                ipAddress: {
                    type: 'string'
                },
                currentUsers: {
                    type: 'string'
                }
            }
        },
        instance_list: {
            type: 'array',
            items: { $ref: '#/definitions/instance'}
        }
    }
}