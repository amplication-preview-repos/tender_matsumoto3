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
import { Type } from "class-transformer";

@ArgsType()
class HeatTreatmentCountArgs {
  @ApiProperty({
    required: false,
    type: () => HeatTreatmentWhereInput,
  })
  @Field(() => HeatTreatmentWhereInput, { nullable: true })
  @Type(() => HeatTreatmentWhereInput)
  where?: HeatTreatmentWhereInput;
}

export { HeatTreatmentCountArgs as HeatTreatmentCountArgs };
