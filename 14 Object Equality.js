const Address = function (street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
};

const address1 = new Address("Elm2", "Gotham2", "9999");
const address2 = new Address("Elm2", "Gotham2", "9999");

function areSame(address1, address2) {
  if (typeof address1 !== "undefined" && typeof address2 !== "undefined") {
    return address1 === address2;
  } else console.log("Function parameters not passed correctly!");
}

areSame(address1, address2);

function areEqual(address1, address2) {
  for (const key1 in address1) {
    for (const key2 in address2) {
      if (address1.key1 !== address2.key2) return false;
    }
  }
  return true;
}

areEqual(address1, address2);

function areEqualMosh(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

areEqualMosh(address1, address2);
