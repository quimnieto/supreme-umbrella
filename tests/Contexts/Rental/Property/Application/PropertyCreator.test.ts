import { PropertyCreator } from '../../../../../src/Contexts/Rental/Property/application/UseCase/PropertyCreator';
import { Property } from '../../../../../src/Contexts/Rental/Property/Domain/Property';
import { PropertyRepositoryMock } from '../__mocks__/PropertyRepositoryMock';

let repository: PropertyRepositoryMock;
let creator: PropertyCreator;

beforeEach(() => {
  repository = new PropertyRepositoryMock();
  creator = new PropertyCreator(repository);
});

describe('PropertyCreator', () => {
  it('should create a property', async () => {
    const id = 'some-id';
    const location = 'some-location';
    const address = 'some-adress';
    const description = 'some-description';

    const property = new Property({ id, location, address, description });

    await creator.execute(id, location, address, description);

    repository.assertLastSavedPropertyIs(property);
  });
});
