// Factory function
const createAddress = function (street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
};

const address = createAddress("Elm", "Gotham", "6666");

// Factory function arrow style - resource: https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1
const createAddress1 = ({ street, city, zipCode }) => ({
  street,
  city,
  zipCode,
});

const address1 = createAddress1("Elm1", "Gotham1", "6661");

// Constructor function
const Address = function (street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
};

const address2 = new Address("Elm2", "Gotham2", "9999");
