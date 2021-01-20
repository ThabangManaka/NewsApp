import { News } from './../news';


import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get<News>(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}
