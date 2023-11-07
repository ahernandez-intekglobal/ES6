var async = {
    getAll: function (urlArray, callback) {
      let results = {};
  
      let promises = urlArray.map((url, index) => {
        return fetch(url)
          .then((response) => response.json())
          .then((data) => {
            results[index + 1] = data;
          })
          .catch((error) => {
            console.error(`Error in AJAX call ${index + 1}: ${error}`);
          });
      });
  
      Promise.all(promises)
        .then(() => {
          callback(results);
        })
        .catch((error) => {
          console.error(`Error while waiting for AJAX calls: ${error}`);
        });
    },
  };
  
  let ajaxCalls = [
    'https://example.com/api/1',
    'https://example.com/api/2',
  ];
  
  async.getAll(ajaxCalls, function (results) {
    console.log('Expected context of callback:', results);
  });
  