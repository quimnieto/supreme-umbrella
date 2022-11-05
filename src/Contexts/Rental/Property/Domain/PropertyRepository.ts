import { Property } from './Property';

export interface PropertyRepository {
  save(property: Property): Promise<void>;
}
