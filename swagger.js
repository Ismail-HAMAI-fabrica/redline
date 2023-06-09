import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'A sample API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development servers',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const docs = swaggerJsDoc(options);

export default docs;
