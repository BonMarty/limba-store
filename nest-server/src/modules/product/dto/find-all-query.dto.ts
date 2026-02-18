import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class FindAllQueryDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  @ApiPropertyOptional({
    example: 1,
    default: 1,
    description: 'Pagination page',
  })
  page?: number = 1;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({
    example: 5,
    default: 5,
    description: 'Limit of elements per page',
  })
  limit?: number = 5;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    example: 'bruh',
    description: 'Search string',
  })
  search?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    example: 'title',
    description: 'Sort field',
  })
  sortBy?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    example: 'desc',
    default: 'desc',
    description: 'Sort order',
  })
  sortOrder?: 'asc' | 'desc' = 'desc';
}
