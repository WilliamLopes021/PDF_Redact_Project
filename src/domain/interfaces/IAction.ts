import { Job } from "../entities/job.entity.ts";
import { IPdfProcessor } from "./IPdfProcessoPort.ts";

export interface IAction {
  execute(processor: IPdfProcessor, job: Job): Promise<void>;
}
