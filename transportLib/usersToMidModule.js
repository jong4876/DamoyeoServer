var transPortInfoModule = require('./transportInfoModule.js');

/*입력받은 유저들 좌표에서 중간지점까지의 교통정보 반환
 */
module.exports.getInfo = function(req, midInfoLat, midInfoLong) {
  var jsonData;
  var jsonTotalArray = new Object();
  jsonTotalArray.userArr = new Array();
  var reqArray = new Array();
  reqArray = JSON.parse(req.body.userArr);

  for (var i = 0; i < reqArray.length; i++) {
    var start = new Array(reqArray[i].latitude, reqArray[i].longitude); // 유저 좌표
    jsonData = transPortInfoModule.getInfo(start[0], start[1], midInfoLat, midInfoLong);
    jsonTotalArray.userArr.push(jsonData);
  }

  return jsonTotalArray;
}
