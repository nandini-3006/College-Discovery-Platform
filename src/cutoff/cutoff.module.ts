import { Module } from '@nestjs/common';
import { CutoffController } from './cutoff.controller';
import { CutoffService } from './cutoff.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CutoffController],
  providers: [CutoffService]
})
export class CutoffModule {}
