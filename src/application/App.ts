import { fastify } from "fastify";
import cors from "@fastify/cors";

export class App {
  private readonly server = fastify();

  constructor() {}

  private routes() {}

  private middlewares() {
    this.server.register(cors);
  }

  public async run() {
    this.middlewares();
    this.routes();

    try {
      const address = await this.server.listen({ port: 5678, host: "0.0.0.0" });
      console.log(`server running on ${address}`);
    } catch (err) {
      this.server.log.error(err);
    }
  }
}
