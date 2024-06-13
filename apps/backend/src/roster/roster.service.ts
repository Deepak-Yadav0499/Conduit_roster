// src/roster/roster.service.ts
import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { User } from '../user/user.entity';

@Injectable()
export class RosterService {
  constructor(private readonly em: EntityManager) {}

  async getUserStats() {
    const users = await this.em.find(
      User,
      {},
      {
        populate: ['articles'],
      },
    );

    return users.map((user) => ({
      name: user.username,
      profileLink: `/profile/${user.username}`,
      totalArticles: user.articles.length,
      totalFavorites: user.articles.toArray().reduce((sum, article) => sum + article.favoritesCount, 0),
      firstArticleDate: user.articles.length > 0 ? user.articles[0].createdAt : null,
    }));
  }
}