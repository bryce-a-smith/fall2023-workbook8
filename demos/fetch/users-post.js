const user = {
  name: "Lizzo Be Eating 2",
  username: "thereallizzo",
  email: "lizzo2245@gmail.com",
};

fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    //can set multiple headers here
  },
  body: JSON.stringify(user),
})
  .then((response) => response.json())
  .then((user) => {
    console.log(user);
  });
