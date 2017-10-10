import { Component } from '@angular/core';
import { request } from 'graphql-request';

const BASE_URL = 'http://localhost:3100/graphql';

interface Student {
  id: string;
  firstName: string;
  lastName: string;
  active: boolean;
  courses: Course[];
}

interface Course {
  id: string;
  name: string;
  description: string;
  level: string;
}

interface Donut {
  id: string;
  name: string;
}

interface QueryResponse {
  allStudents;
  createCourseMutation;
}

const AllStudentsQuery = `
  query allStudents {
    allStudents {
      id
      firstName
      lastName
      active
    }
  }
`;

const StudentsCourses = `
  query allStudents {
    allStudents {
      id
      firstName
      lastName
      active
      Courses {
        ...course
      }
    }
  }  
  fragment course on Course {
    id
    name
    description
    level
  }
`

const createCourseMutation = `
  mutation createCourse($id:ID!, $name:String!, $description:String!, $level:String!, $student_id:ID!){
    createCourse(id:$id, name:$name, description:$description, level:$level, student_id:$student_id){
      id
      name
      description
      level
      student_id
    }
  }
`

const updateCourseMutation = `
  mutation updateCourse($id: ID!, $name: String, $description: String, $level: String, $student_id: ID){
    updateCourse(id:$id, name:$name, description:$description, level:$level, student_id:$student_id) {
      id
      name
      description
      level
      student_id
    }
  }
`

const removeCourseMutation = `
  mutation removeCourse($id: ID!){
    removeCourse(id:$id) {
      id
    }
  }
`

@Component({
  selector: 'app-root',
  template: `
        <h1>{{title}}</h1>
        <pre>{{students | json}}</pre>
    `,
  styles: []
})
export class AppComponent {
  title = 'Students';
  students: Student[];
  courses: Course[];
  constructor() {
    request(BASE_URL, StudentsCourses).then(
      (data: QueryResponse) => (this.students = data.allStudents)
    );
    request(BASE_URL, createCourseMutation).then(
      (data: QueryResponse) => (this.courses = data.createCourseMutation)
    );
  }
}
 