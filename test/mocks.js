const statusCode = {
    redirect : {
        300: true,
        301: true,
        302: true,
        303: true,
        305: true,
        307: true,
        308: true
      },
      empty : {
        204: true,
        205: true,
        304: true
      },
      retry : {
        502: true,
        503: true,
        504: true
      }
      
}
module.exports = statusCode