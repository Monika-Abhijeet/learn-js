// get Request

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// post Request

const user = {
  name: "Monika Abhijeet",
  username: "moni",
  email: "monika@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Bangalore",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "monika.org",
  company: {
    name: "monika-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "monika real-time e-markets",
  },
};

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// put request -> update the data
let data = {
  name: "Monika",
};
fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data));

// delete request
fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "DELETE",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data));
