import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculaIdadeService {

  constructor() { }

  public execute(nascimento) {
    let result: boolean;
    let idade: number;
    if (nascimento) {
      const timeDiff = Math.abs(Date.now() - Date.parse(nascimento));
      idade = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      result = (idade < 150);
    } else {
      result = false;
    }

    if (result) {
      return idade;
    } else {
      return null;
    }
 }
}
