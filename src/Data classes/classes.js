import uniqid from "uniqid";

export class GeneralInfo {
  constructor(name, email, phone, address) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }
}

export class School {
  constructor(name, finishDate) {
    this.name = name;
    this.finishDate = finishDate;
    this.id = uniqid();
  }
}

export class Company {
  constructor(name, position, city, duration) {
    this.name = name;
    this.position = position;
    this.city = city;
    this.duration = duration;
    this.id = uniqid();
  }
}
