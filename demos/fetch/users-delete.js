const user = {
    name: "Lizzo Be Eating 2",
    username: "thereallizzo",
    email: "lizzo2245@gmail.com",
  };
  
  fetch("http://localhost:3000/users/12", {
    method: "DELETE",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (user) {
      console.log(user);
    });
  