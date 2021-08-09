import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Doc} from "../../core/types/doc";

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  constructor(private httpClient: HttpClient) {}

  public getDoc(slug: string): Observable<Doc> {
    return this.httpClient.get(`http://localhost:3000${slug}`) as Observable<Doc>;
  }
}
