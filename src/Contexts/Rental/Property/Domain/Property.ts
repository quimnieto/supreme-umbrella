export class Property {
  readonly id: string;
  readonly location: string;
  readonly address: string;
  readonly description: string;

  constructor({
    id,
    location,
    address,
    description
  }: {
    id: string;
    location: string;
    address: string;
    description: string;
  }) {
    this.id = id;
    this.location = location;
    this.address = address;
    this.description = description;
  }
}
