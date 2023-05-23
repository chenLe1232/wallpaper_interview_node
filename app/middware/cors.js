// app/middleware/cors.js
module.exports = (options, app) => {
    return async function cors(ctx, next) {
      ctx.set('Access-Control-Allow-Origin', '*');
      await next();
    };
  };
  