var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  iam_apikey: '<API Key>'
});

var images_file = fs.createReadStream(process.argv[2]);
var classifier_ids = ["food"];

var params = {
  images_file: images_file,
  classifier_ids: classifier_ids
};

visualRecognition.classify(params, function(err, response) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(response, null, 2))
});
