async function getUserData() {
    const res =  await fetch('https://api.github.com/users');
    const data = await res.json();
    return data;
}

async function main() {
    const users = await getUserData();
    const ids = users.map((user) => user.login);
    const result = ids.join(", ");
    console.log(result);
}

try {
    main();
} catch (error) {
    console.error(error);
}