import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PruebaService {

  constructor(
    private http: HttpClient
    ) { }

  getTestPromesa(){
    return new Promise(
      (result1, result2) => {
        setTimeout(() => {
          result1('5');
        }, 3000),
        setTimeout(() => {
          result2('3000')
        }, 2000);
        
      }
    );
  }

  getTestObserbable(): Observable<any>{
    return Observable.create(
      (observ) => {
        setInterval(
          () => {
            observ.next(Math.random())
          },
          1000
        );        
      }
    );
  }
}
