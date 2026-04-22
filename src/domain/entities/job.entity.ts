import type { IPdfObliteratorPayload } from "../interfaces/IPdfObliteratorPayload.ts";
import { InvalidPayloadError } from "../errors/invalid-payload.error.ts";
import { KeywordsRegexType } from "../types/KeywordsRegexTypes.ts";
import type { JobStatus } from "../types/JobStatus.ts";
import type { JobProps } from "../interfaces/IJobsProps.ts";

export class Job {
  private readonly _id: string;
  private _status: JobStatus;
  private readonly _payload: IPdfObliteratorPayload;
  private readonly _createdAt: Date;
  private _updatedAt: Date;
  private _errorMessage?: string;

  private constructor(props: JobProps) {
    this._id = props.id || crypto.randomUUID();
    this._status = props.status || "PENDING";
    this._payload = props.payload;
    this._createdAt = props.createdAt || new Date();
    this._updatedAt = props.updatedAt || new Date();
    this._errorMessage = props.errorMessage;
  }

  public static create(props: JobProps): Job {
    this.validatePayload(props.payload);
    return new Job(props);
  }

  get id(): string {
    return this._id;
  }
  get status(): JobStatus {
    return this._status;
  }
  get payload(): IPdfObliteratorPayload {
    return this._payload;
  }
  get createdAt(): Date {
    return this._createdAt;
  }
  get updatedAt(): Date {
    return this._updatedAt;
  }
  get errorMessage(): string | undefined {
    return this._errorMessage;
  }

  public markAsProcessing(): void {
    if (this._status !== "PENDING") {
      throw new Error(
        `Não é possível processar um job que está ${this._status}`,
      );
    }
    this._status = "PROCESSING";
    this.touch();
  }

  public markAsCompleted(): void {
    if (this._status !== "PROCESSING") {
      throw new Error(`O job deve estar em PROCESSAMENTO para ser completado.`);
    }
    this._status = "COMPLETED";
    this.touch();
  }

  public markAsFailed(reason: string): void {
    this._status = "FAILED";
    this._errorMessage = reason;
    this.touch();
  }

  private touch(): void {
    this._updatedAt = new Date();
  }

  private static validatePayload(payload: IPdfObliteratorPayload): void {
    if (!payload) {
      throw new InvalidPayloadError(
        "O payload deve conter redactionOptions válidas.",
      );
    }

    const payloadRedactTypes = payload.type;
    const parsedType = Array.isArray(payloadRedactTypes)
      ? payloadRedactTypes
      : [payloadRedactTypes!];

    // Valida se o tipo de ofuscação solitada não foge do nosso Dicionário de Types
    for (const value of parsedType) {
      if (!(value in KeywordsRegexType)) {
        throw new InvalidPayloadError(
          `O tipo de ofuscação '${value}' não é válido.`,
        );
      }
    }
  }
}
