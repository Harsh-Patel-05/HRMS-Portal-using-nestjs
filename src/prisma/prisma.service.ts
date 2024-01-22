import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  createAuthDto: any;
  organization: any;
  user: any;
  userSession: any;
  async onModuleInit() {
    await this.$connect();
  }
}






