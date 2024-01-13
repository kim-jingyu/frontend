fetch("https://example.com/api")
    .then(res => res.json())
    .then(data => fetch(`https://example.com/api/${data.id}`))
    .then(res => res.json())
    .then(data => fetch(`https://example.com/api/${data.id}/details`))
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));