import { PatientService } from './patient.service';
import { Controller } from '@nestjs/common';

@Controller('patient')
export class PatientController {
    constructor(private patientService: PatientService) {}
}
