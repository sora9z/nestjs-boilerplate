import { Module } from '@nestjs/common';
import { UseCaseModule } from './use-case/use-case.module';

@Module({
  imports: [UseCaseModule],
  exports: [UseCaseModule],
})
export class ApplicationModule {}
