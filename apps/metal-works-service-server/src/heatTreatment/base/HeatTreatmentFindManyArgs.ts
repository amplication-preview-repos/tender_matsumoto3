/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HeatTreatmentWhereInput } from "./HeatTreatmentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HeatTreatmentOrderByInput } from "./HeatTreatmentOrderByInput";

@ArgsType()
class HeatTreatmentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HeatTreatmentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HeatTreatmentWhereInput, { nullable: true })
  @Type(() => HeatTreatmentWhereInput)
  where?: HeatTreatmentWhereInput;

  @ApiProperty({
    required: false,
    type: [HeatTreatmentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HeatTreatmentOrderByInput], { nullable: true })
  @Type(() => HeatTreatmentOrderByInput)
  orderBy?: Array<HeatTreatmentOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { HeatTreatmentFindManyArgs as HeatTreatmentFindManyArgs };
