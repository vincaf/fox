import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Fox } from './Fox';

@Injectable({
  providedIn: 'root'
})
export class FoxgetService {

  constructor(private httpClient: HttpClient) { }

  private url = 'https://randomfox.ca/floof';

  /*
  Oggetto asincrono su cui il client può dormire
  sino a quando non arriveranno i dati
  */
  getFox(): Observable<Fox>{
    return this.httpClient.get<Fox>(this.url);
  }
}
