const address = {
  street: "Zugor István",
  city: "Biatorbágy",
  zipCode: "2051",
};

showAddress(address);

function showAddress(object) {
  for (const iterator of object) {
    console.log(iterator);
  }
}
