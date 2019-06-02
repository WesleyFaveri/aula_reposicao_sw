import server from 'server';
import routes from './modules/routes';

const options = {
  port: process.env.PORT || 3005,
  public: './src/public',
  security: {
    csrf: false,
  }
};

server(options, routes).then((ctx) => {
  console.log(`Server launched on http://localhost:${ctx.options.port}/`);
}).catch((err) => {
  console.log(err);
});
