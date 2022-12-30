// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=>response.json())
//     .then((data) => console.log(data));

async function getUsers() {
  let url = "https://jsonplaceholder.typicode.com/users";

  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function users() {
  let users = await getUsers();
  let html = "";

  users.forEach((element) => {
    let content = `<div class="box">
                <p>${users.name}</p>
                <p>{user.email}</p>
        </div>`;

    html += content;
  });

  html += msContentScript;

  document.body.innerHTML = html;
}

users();
