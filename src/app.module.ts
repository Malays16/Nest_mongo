import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
		ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION, { connectionName: 'book' }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}