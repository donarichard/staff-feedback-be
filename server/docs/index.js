const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = ['../routers/customers.js'];

const config = {
    info: {
        title: 'Staff support',
        description: '',
    },
    tags: [ ],
    host: 'localhost:8080/api/v1',
    schemes: ['http', 'https'],
};

swaggerAutogen(outputFile, endpointsFiles, config).catch(err=>{
    console.error(err)
    throw err
})