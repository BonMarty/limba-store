import fastifyCookie from '@fastify/cookie';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: 'https://localhost:5173',
    credentials: true,
  });

  const configService = app.get(ConfigService);
  const cookieSecret = configService.getOrThrow<string>('COOKIE_SECRET');

  await app.register(fastifyCookie, {
    secret: cookieSecret,
  });

  const config = new DocumentBuilder()
    .setTitle('LImba Store API')
    .setDescription('API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
void bootstrap();
