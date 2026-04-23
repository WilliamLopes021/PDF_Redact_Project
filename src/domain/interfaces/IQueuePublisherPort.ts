import type { IPdfObliteratorPayload } from "./IPdfObliteratorPayload.ts";

export interface IQueuePublisher {
  publish(queueName: string, payload: IPdfObliteratorPayload): Promise<void>;
}
