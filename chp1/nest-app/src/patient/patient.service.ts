import { DbService } from './../db/db.service';
import { PatientDto } from './dto/patient.dto';
import { Injectable } from '@nestjs/common';
import { Patient } from './interfaces/patient';

@Injectable()
export class PatientService {
  private patients: Patient[] = [];

  constructor(private dbService: DbService) {}
  
  get() {
    return this.patients;
  }

  find(patientId: number) {
    return this.patients.find(patient => patient.patient_id == patientId);
  }

  create(patientDto: PatientDto) {
    const newId = this.patients.length;
    const patient = <Patient>patientDto;
    patient.patient_id = newId;
    this.patients[newId] = patient;
  }

  update(patient: Patient) {
    const index = this.patients.findIndex(p => p.patient_id == patient.patient_id);
    if (index > -1) {
        Object.assign(this.patients[index], patient);
    }
  }
}
