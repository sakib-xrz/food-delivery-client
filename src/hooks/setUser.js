export const setUser = (user, password) => {
  const setUser = {
    displayName: user?.displayName,
    email: user?.email,
    password,
  };

  fetch(`https://server-six-taupe.vercel.app/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(setUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
