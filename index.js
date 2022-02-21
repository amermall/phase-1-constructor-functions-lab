/* 
- Scuber needs you to develop a fast way to create Scooters, Drivers, and PickupLocations as new business keeps rolling in.

- Instructions
I. Create a constructor function for each of the following:
a. Scooter with year, color, and model properties
b. Driver with name, age, and experience properties
c. PickupLocation with address and city properties
*/

// a. Scooter with year, color, and model properties:
function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}

// b. Driver with name, age, and experience properties:
function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}

// c. PickupLocation with address and city properties:
function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}