import { Component, inject, OnInit } from '@angular/core';

import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { UsersService } from '../../services/users.service';
import { UserASP } from '../../data/services/interfaces/user.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  users: UserASP[] =[];
  private readonly bookService = inject(BookService);
  private readonly usersService = inject(UsersService);

  ngOnInit() {
    this.bookService.listBooks().subscribe((data) => {
      this.books = data;
    });
    this.usersService.listUser().subscribe((data) =>{
      console.log("Сработала функция")
      console.log(data);
      this.users = data;
    })
  }
}
