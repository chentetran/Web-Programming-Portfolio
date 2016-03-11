request = new XMLHttpRequest();

request.open("GET", "http://localhost:8000/data.json", true);

request.onreadystatechange = parse;

request.send(null);

function parse() {
	if (request.readyState == 4 && request.status == 200) {
		var messageData = JSON.parse(request.responseText);
		var messages = document.getElementById("messages");

		for(var i = 0; i < messageData.length; i++) {
			messages.innerHTML += "<p>" + "<span class='text'>" + messageData[i]["content"] + "</span> " + messageData[i]["username"] + "</p>";
		}

	}
	else if (request.readyState == 4 && request.status != 200) {
		document.getElementById("messages").innerHTML = "fail";
	}
};