import { IsString, IsNumber, IsOptional } from 'class-validator';
export class CreateProductDto {
  @IsString()
  readonly name: string;
  @IsString()
  @IsOptional() // ไม่ส่งมาก็ได้
  readonly description?: string;
  @IsNumber()
  readonly price: number
}
