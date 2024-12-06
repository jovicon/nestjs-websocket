import { NestFactory } from '@nestjs/core';
import { WebsocketGatewayModule } from './websocket.module';

async function bootstrap() {
  console.log('Starting Websocket Gateway Module');

  const app = await NestFactory.create(WebsocketGatewayModule);
  await app.listen(4000);
}

(async () => {
  await bootstrap();
})();
