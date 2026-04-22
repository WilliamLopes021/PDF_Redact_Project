import DomainError from "./domain.error.ts";

export class PdfProcessingError extends DomainError {
  constructor(message: string = "Erro durante o processamento do PDF.") {
    super(message);
  }
}
