import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

url = environment.apiUrl;

constructor(private httpClient: HttpClient){}
  fetchData<T>(endpoint?: string): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.url}/${endpoint}`)
}
}
