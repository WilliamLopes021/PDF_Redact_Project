import { IPdfObliteratorPayload } from "./IPdfObliteratorPayload.ts";

export interface IPdfProcessor {
  load(data: Uint8Array): Promise<void>;
  redact(options: IPdfObliteratorPayload): Promise<void>;
  save(): Promise<Uint8Array>;
}
