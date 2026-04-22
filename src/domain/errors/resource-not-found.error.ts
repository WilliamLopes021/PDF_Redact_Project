import DomainError  from './domain.error.ts';

export class ResourceNotFoundError extends DomainError {
  constructor(resource: string = 'Recurso') {
    super(`${resource} não encontrado.`);
  }
}
