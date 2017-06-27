var rootServiceUri = 'https://mito-api.herokuapp.com';
// var rootServiceUri = 'http://localhost:8090';

angular.
module('myApp.ligas').
factory('Liga', ['$resource',
  function ($resource) {
    return $resource(rootServiceUri + '/mitoAPI/ligas?q=:nomeLiga', {
      // nomeLiga: '@nomeLiga'
    }, {
      // return $resource('ligas/:ligaId.json', {}, {
      query: {
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        //   'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
        //   'Content-type': 'plain/text',
        //   'X-GLB-Token': '15bca6b59813af4dac3f61992503dd92f694b6c6d3433414b736e6763785876663375717530596f7a787331517a4b76705364574f5a656c705374476b566d7361586f41373655494d61647353636b433061474235355455546239715f387764544771416438673d3d3a303a6d63616c656761726f2e32303135'
        // },
        method: 'GET',
        params: {
          nomeLiga: '@nomeLiga',
          // ,
          // 'X-GLB-Token': "15bca6b59813af4dac3f61992503dd92f694b6c6d3433414b736e6763785876663375717530596f7a787331517a4b76705364574f5a656c705374476b566d7361586f41373655494d61647353636b433061474235355455546239715f387764544771416438673d3d3a303a6d63616c656761726f2e32303135"
        },
        isArray: true
      }
    });
  }
]).factory('LigaInfo', ['$resource',
  function ($resource) {
    return $resource(rootServiceUri + '/mitoAPI/auth/liga/:slugId/:slug', {
      slugId: '@slug'
    }, {
      query: {
        headers: {
          //   'Access-Control-Allow-Origin': '*',
          //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          //   'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
          'Content-type': 'application/json',
          // 'X-GLB-Token': '15bca6b59813af4dac3f61992503dd92f694b6c6d3433414b736e6763785876663375717530596f7a787331517a4b76705364574f5a656c705374476b566d7361586f41373655494d61647353636b433061474235355455546239715f387764544771416438673d3d3a303a6d63616c656761726f2e32303135'
        },
        method: 'GET',
        params: {
          slug: '@slug',
          //   // ,
          //   // 'X-GLB-Token': "15bca6b59813af4dac3f61992503dd92f694b6c6d3433414b736e6763785876663375717530596f7a787331517a4b76705364574f5a656c705374476b566d7361586f41373655494d61647353636b433061474235355455546239715f387764544771416438673d3d3a303a6d63616c656761726f2e32303135"
        },
        isArray: false
      }
    })
  }
]);