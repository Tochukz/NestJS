import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { validate } from "class-validator";
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform {
    async transform(value: any, metaData: ArgumentMetadata) {
        const metatype = metaData.metatype;
        if (!metatype || !this.toValidate(metatype)) {
          return value;
        }
        // TO tranform the incoming post request body from plain javascript object to typed object
        const object = plainToClass(metatype, value);
        const error = await validate(object);
        if (error.length > 0) {
            throw new BadRequestException('Validation failed');
        }
        return value;
    }

    private toValidate(metatype: Function): boolean {
        // If the type is a javascript native type then don't validate because they cannot have validation decorator attached
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
}
