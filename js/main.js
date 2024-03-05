let booking = [];

const prices = {
  carColor: {
    white: 100,
    black: 200,
    yellow: 300,
  },
  fuelType: {
    benzin: 20,
    dizel: 60,
    propan: 80,
    metan: 30,
  },
};

function submitForm(event) {
  event.preventDefault();
  const fullname = event.target[0].value;
  const phone = event.target[1].value;
  const address = event.target[2].value;
  const carModel = event.target[3].value;

  let userBook = {
    id: booking.length,
    fullname: fullname,
    phone: phone,
    address: address,
    carModel,
    carColor: [],
    fuel: [],
    total: 0,
  };

  if (userBook.carModel === "Mercedes") {
    userBook.total += 560;
  } else if (userBook.carModel === "BMW") {
    userBook.total += 430;
  } else if (userBook.carModel === "Tesla") {
    userBook.total += 600;
  }

  for (let i = 4; i < event.target.length; i++) {
    if (event.target[i].name === "carColor" && event.target[i].checked) {
      userBook.total += prices.carColor[event.target[i].id];
      userBook.carColor.push(event.target[i].value);
      continue;
    }

    if (event.target[i].name === "fuelType" && event.target[i].checked) {
      userBook.total += prices.fuelType[event.target[i].id];
      userBook.fuel.push(event.target[i].value);
      continue;
    }
  }
  booking.push(userBook);
  render();
}

let orderListEl = document.querySelector("#orderList");
function render() {
  orderListEl.innerHTML = "";
  booking.forEach((booking, index, array) => {
    const template = `
    <div class="order">
        <h1>Order ${booking.id + 1}</h1>
        <h2>Fullname: ${booking.fullname}</h2>
        <h2>Phone Number: ${booking.phone}</h2>
        <h2>Client Addres: ${booking.address}</h2>

        <h3>Car Model: ${booking.carModel}</h3>
        <h3>Color: ${booking.carColor}</h3>

        <h4>Fuel Type: ${booking.fuel}</h4>
        <h1>Total: $${booking.total}</h1>
        </div>
    `;
    orderListEl.innerHTML += template;
  });
}
