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
import { MetalworkingWhereInput } from "./MetalworkingWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class MetalworkingCountArgs {
  @ApiProperty({
    required: false,
    type: () => MetalworkingWhereInput,
  })
  @Field(() => MetalworkingWhereInput, { nullable: true })
  @Type(() => MetalworkingWhereInput)
  where?: MetalworkingWhereInput;
}

export { MetalworkingCountArgs as MetalworkingCountArgs };