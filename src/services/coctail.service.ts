import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CategoryListResponseInt,
  CoctailDetailResponse,
  SingleTypeOfDrinkResponseInt,
} from 'src/app/models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoctailService {
  constructor(private http: HttpClient) {}

  getCategoriesList(key: string): Observable<CategoryListResponseInt> {
    return this.http.get<CategoryListResponseInt>(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?${key}=list`
    );
  }

  getTypeOfDrinkList(
    key: string,
    name: string
  ): Observable<SingleTypeOfDrinkResponseInt> {
    return this.http.get<SingleTypeOfDrinkResponseInt>(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${key}=${name}`
    );
  }

  getCoctailDetails(id: string): Observable<CoctailDetailResponse> {
    return this.http.get<CoctailDetailResponse>(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }
}
