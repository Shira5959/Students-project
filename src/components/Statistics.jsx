import React from 'react';

function Statistics({ students }) {
  const totalStudents = students.length;
  const activeStudents = students.filter((s) => s.active).length;
  
  const averageGrade =
    totalStudents > 0
      ? (
          students.reduce((acc, curr) => acc + curr.grade, 0) / totalStudents
        ).toFixed(1)
      : 0;

  return (
    <div className="statistics-card">
      <div>
        <strong>סה"כ תלמידות:</strong> {totalStudents}
      </div>
      <div>
        <strong>תלמידות פעילות:</strong> {activeStudents}
      </div>
      <div>
        <strong>ממוצע ציונים:</strong> {averageGrade}
      </div>
    </div>
  );
}

export default Statistics;