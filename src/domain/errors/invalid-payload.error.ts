import DomainError from "./domain.error.ts";

export class InvalidPayloadError extends DomainError {
  constructor(message: string = "O payload fornecido é inválido.") {
    super(message);
  }
}
