import React from 'react';
import StudentCard from './StudentCard';

function StudentList({ students }) {
  if (students.length === 0) {
    return <p>לא נמצאו תלמידות תואמות.</p>;
  }

  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default StudentList;