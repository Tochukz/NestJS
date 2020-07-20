import { PipeTransform, ArgumentMetadata, Injectable } from '@nestjs/common';

@Injectable()
export default class MyValidationPipe implements PipeTransform {
    transform(value: any, metaData: ArgumentMetadata) {
        return value;
    }
}