import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  private students = [];
  private maxId = 0;

  private findIndexIfExists(id: number): number {
    let idx = this.students.findIndex((student) => student.id === id);
    if (idx == -1) throw new NotFoundException('No such student.');
    return idx;
  }

  // create(createStudentDto: CreateStudentDto) {
  //   this.maxId++;
  //   const newStudent = {
  //     id: this.maxId,
  //     ...createStudentDto,
  //   };
  //   this.students.push(newStudent);
  //   return newStudent;
  // }

  create(createTodoDto: CreateStudentDto) {
    let student: Student = {
      id: ++this.maxId,
      index: createTodoDto.index,
      firstName: createTodoDto.firstName,
      lastName: createTodoDto.lastName,
    };

    this.students.push(student);

    return student;
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    // const studentId = this.students.find(student => student.id === id);
    // if (!studentId) {
    //   throw new NotFoundException("Student not found");
    // }
    // return studentId;
    return this.students[this.findIndexIfExists(id)];
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = this.findOne(id);
    // const index = this.students.indexOf(student);
    const index = this.findIndexIfExists(id);
    this.students[index] = {
      ...student,
      ...updateStudentDto,
    };
    return this.students[index];
  }

  remove(id: number) {
    // const student = this.findOne(id);
    // const index = this.students.indexOf(student);
    const index = this.findIndexIfExists(id);
    this.students.splice(index, 1);
    return 'Student removed';
  }

  replace(id: number, replaceStudentDto: CreateStudentDto) {
    const index = this.findIndexIfExists(id);
    this.students[index] = {
      id,
      ...replaceStudentDto,
    };
    return this.students[index];
  }

  onModuleInit() {
    this.students.push({
      id: ++this.maxId,
      index: 32480,
      firstName: 'Łukasz',
      lastName: 'Kąśliwy',
    });
    this.students.push({
      id: ++this.maxId,
      index: 32481,
      firstName: 'Marek',
      lastName: 'Nowak',
    });
    this.students.push({
      id: ++this.maxId,
      index: 32482,
      firstName: 'Zenon',
      lastName: 'Zawada',
    });
  }
}
