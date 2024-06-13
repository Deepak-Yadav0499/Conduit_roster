// src/roster/roster.module.ts
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from '../user/user.entity';
import { RosterService } from './roster.service';
import { RosterController } from './roster.controller';

@Module({
  imports: [MikroOrmModule.forFeature([User])],
  providers: [RosterService],
  controllers: [RosterController],
})
export class RosterModule {}
