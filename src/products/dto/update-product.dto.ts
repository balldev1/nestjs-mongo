import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  @IsOptional() // ไม่ส่งมาก็ได้
  readonly name: string;
  @IsString()
  @IsOptional() // ไม่ส่งมาก็ได้
  readonly description?: string;
  @IsNumber()
  @IsOptional() // ไม่ส่งมาก็ได้
  readonly price: number
}
