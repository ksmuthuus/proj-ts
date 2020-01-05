import faker from "faker";
import Mapper from "./Mapper";

class Company implements Mapper {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  popUpcontent(): string {
    return `<h1>${this.companyName}</h1><h3>${this.catchPhrase}</h3>`;
  }
}

export default Company;
