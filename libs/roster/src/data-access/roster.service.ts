// src/app/services/roster.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '@realworld/core/http-client';

interface UserStats {
  name: string;
  profileLink: string;
  totalArticles: number;
  totalFavorites: number;
  firstArticleDate: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class RosterService {
  constructor(private apiService: ApiService) {}

  getUserStats(): Observable<UserStats[]> {
    return this.apiService.get<UserStats[]>('/roster/stats');
  }
}