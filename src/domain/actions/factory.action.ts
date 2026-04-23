import type { IAction } from "../interfaces/IAction.ts";
import { RedactAction } from "./redact.action.ts";

export class ActionFactory {
  public static create(actionType?: string): IAction {
    switch (actionType) {
      case "redact":
        return new RedactAction();
      default:
        return new RedactAction();
    }
  }
}
