import { PropertyRepository } from '../../../../../src/Contexts/Rental/Property/domain/PropertyRepository';
import { Property } from '../../../../../src/Contexts/Rental/Property/domain/Property';

export class PropertyRepositoryMock implements PropertyRepository {
  private mockSave = jest.fn();

  async save(property: Property): Promise<void> {
    this.mockSave(property);
  }

  assertLastSavedPropertyIs(expected: Property): void {
    const mock = this.mockSave.mock;
    const lastSavedProperty = mock.calls[mock.calls.length - 1][0] as Property;
    expect(lastSavedProperty).toBeInstanceOf(Property);
    expect(lastSavedProperty.id).toEqual(expected.id);
  }
}
