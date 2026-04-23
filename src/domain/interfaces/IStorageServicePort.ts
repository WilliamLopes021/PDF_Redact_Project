export interface IStorageService {
  save(fileName: string, data: Uint8Array): Promise<string>;
  get(fileName: string): Promise<Uint8Array>;
  delete(fileName: string): Promise<void>;
}
