import { Observable } from "rxjs";

export interface DataServiceInterface {
    fetchData<T>(endpoint?: string): Observable<T[]>;
  }