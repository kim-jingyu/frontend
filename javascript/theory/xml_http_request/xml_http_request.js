var httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200) {
        console.log(httpRequest.responseText);
    }
}

httpRequest.open("GET", "서버URL", true);
httpRequest.send();