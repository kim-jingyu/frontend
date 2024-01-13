const res = await fetch("https://api.github.com/users");
const data = await res.json();
console.log(data);