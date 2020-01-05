import faker from "faker";
import Mapper from "./Mapper";

class User implements Mapper {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  popUpcontent(): string {
    return `User Name: ${this.name}`;
  }
}

export default User;
