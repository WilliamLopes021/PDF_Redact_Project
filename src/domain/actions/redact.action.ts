import type { IAction } from "../interfaces/IAction.ts";
import type { IPdfProcessor } from "../interfaces/IPdfProcessoPort.ts";
import type { Job } from "../entities/job.entity.ts";
import { PdfProcessingError } from "../errors/pdf-processing.error.ts";

export class RedactAction implements IAction {
  public async execute(processor: IPdfProcessor, job: Job): Promise<void> {
    try {
      const keywords = job.payload.keywords;
      const regexes = job.payload.regex;

      await processor.redact({
        keywords: keywords,
        type: [],
        regex: regexes,
      });
    } catch (error: any) {
      throw new PdfProcessingError(
        `Falha ao aplicar RedactAction: ${error.message}`,
      );
    }
  }
}
