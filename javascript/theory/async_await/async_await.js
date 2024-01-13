async function getData() {
    const res = await fetch('https://example.com/api');
    const data = await res.text();
    console.log(data);
}

getData();