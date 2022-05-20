import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  getAuthor(){
    return ["Shamsur Rahman", "Humayan Ahmed", "Nazrul Islam", "Rabindranath Thagore"];
  }
}
