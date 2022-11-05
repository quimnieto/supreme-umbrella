import { Property } from '../../Domain/Property';
import { PropertyRepository } from '../../Domain/PropertyRepository';

export class PropertyCreator {
  private repository: PropertyRepository;

  constructor(repository: PropertyRepository) {
    this.repository = repository;
  }

  async execute(id: string, location: string, address: string, description: string): Promise<void> {
    const property = new Property({ id, location, address, description });

    return this.repository.save(property);
  }
}
