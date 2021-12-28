// street
// city
// zipCode
// showAddress(address)

const address = {
  street: "Csillag utca 11.",
  city: "Szeged",
  zipCode: "6725",
};

function showAddress(address) {
  for (const key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);

function showAddress1(address) {
  for (const key in address) {
    if (Object.hasOwnProperty.call(address, key)) {
      const element = address[key];
      console.log(key, element);
    }
  }
}

showAddress1(address);
