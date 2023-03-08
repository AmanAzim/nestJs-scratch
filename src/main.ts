import { NestFactory } from "@nestjs/core";

import AppModule from "./app.module";

// this runs first after starting the app
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000); // port
}

bootstrap();
