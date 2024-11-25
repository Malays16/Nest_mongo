import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDocument } from './schemas/book.schema';
import { CreateBookDto, UpdateBookDto } from './interfaces/dto/book-dto';
import { ParamId } from './interfaces/book';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  public create(@Body() body: CreateBookDto): Promise<BookDocument> {
    return this.bookService.create(body);
  }

  @Get()
  public getAll(): Promise<BookDocument[]> {
    return this.bookService.getAll();
  }

  @Put(':id')
  public update(@Param() { id }: ParamId, @Body() body: UpdateBookDto): Promise<BookDocument> {
    return this.bookService.update(id, body);
  }

  @Delete(':id')
  public delete(@Param() { id }: ParamId): Promise<BookDocument> {
    return this.bookService.delete(id);
  }
}