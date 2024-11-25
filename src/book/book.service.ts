import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { BookDocument, Book } from './schemas/book.schema';
import { CreateBookDto, UpdateBookDto } from './interfaces/dto/book-dto';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name, 'book') private bookModel: Model<BookDocument>,
    @InjectConnection('book') private connection: Connection
  ) {}

  public create(data: CreateBookDto): Promise<BookDocument> {
    const book = new this.bookModel(data);
    return book.save();
  }

  public getAll(): Promise<BookDocument[]> {
    return this.bookModel.find().exec();
  }

  public update(id: string, data: UpdateBookDto): Promise<BookDocument> {
    return this.bookModel.findByIdAndUpdate(id, data);
  }

  public delete(id: string): Promise<BookDocument> {
    return this.bookModel.findByIdAndDelete(id);
  }
}