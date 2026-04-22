import type { KeywordsRegexType } from "../types/KeywordsRegexTypes.ts";

export interface IPdfObliteratorPayload {
  keywords: string[];
  type: (keyof KeywordsRegexType)[];
  regex: RegExp[];
}
