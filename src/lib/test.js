//htmlのul要素（id = 'messages'）を呼び出し
var messageList = $('#messages');

//openweathermap（天気予報API）に接続
var request = new XMLHttpRequest();
var cityName = "tokyo";
var owmApiKey = "8c699e02bb0cc3f02814172a8cc758c7";
var owmURL = "http://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&APPID="+ owmApiKey +"";

request.open('GET', owmURL, true);
//結果をjson型で受け取る
request.responseType = 'json';

request.onload = function () {
 var data = this.response;
 console.log(data);
 var messageElement = $("<il><p class='weather'>" + data["weather"][0]["main"] + "</p></il>");
 //HTMLに取得したデータを追加する
 messageList.append(messageElement);
 Logger.log(request)
};

request.send();
