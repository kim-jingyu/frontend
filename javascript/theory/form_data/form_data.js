const obj = {
    one: "kim",
    two: "lee",
    three: "park"
}

const formData = new FormData();

Object.entries(obj).forEach(
    item => formData.append(item[0], item[1])
);

let entries = formData.entries();
for (const entry of entries) {
    console.log(entry[0] + ': ' + entry[1]);
}

const obj2 = {};
formData.forEach((key, value) => obj2[key] = value);
console.log(obj2);