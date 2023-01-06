export const setUser = (user) => {
  const setUser = {
    displayName: user?.displayName,
    email: user?.email,
  };

  fetch(`http://localhost:5000/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(setUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
