import type { JobStatus } from "../types/JobStatus.ts";
import type { IPdfObliteratorPayload } from "./IPdfObliteratorPayload.ts";

export interface JobProps {
  id?: string;
  status?: JobStatus;
  payload: IPdfObliteratorPayload;
  createdAt?: Date;
  updatedAt?: Date;
  errorMessage?: string;
}