console.log('Hello from script.js')

const list = document.querySelector("#list");

window.fetch('http://localhost:3003/cars')
  .then(response => {
    console.log('Jerzyk Received response: ', response)
    return response.json();
  })
  .then(data => {
    console.log('Jerzyk Received data: ', data)

    data.forEach((aCar) => {
      list.innerHTML += `<li>
      ${aCar.Name}
      </li>`;
    });

  })
  .catch(error => {
    console.log(':( An error occured :( ', error)
  })