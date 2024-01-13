fetch("https://api.github.com/users")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Network Error");
        }
    })
    .then((users) => {
        return users.map((user) => user.login);
    })
    .then((ids) => {
        return ids.join(", ");
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })