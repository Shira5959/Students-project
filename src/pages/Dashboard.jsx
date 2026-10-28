import React, { useState } from 'react';
import Header from '../components/Header';
import Statistics from '../components/Statistics';
import StudentList from '../components/StudentList';

const initialStudents = [
  { id: 1, name: 'רחלי כהן', grade: 95, attendance: 12, active: true },
  { id: 2, name: 'שרה לוי', grade: 82, attendance: 10, active: true },
  { id: 3, name: 'מיכל ישראלי', grade: 55, attendance: 6, active: false },
  { id: 4, name: 'תמר אברהם', grade: 91, attendance: 12, active: true },
  { id: 5, name: 'לאה מזרחי', grade: 58, attendance: 8, active: false }
];

function Dashboard() {
  const [students] = useState(initialStudents);
  const [filterActiveOnly, setFilterActiveOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showStats, setShowStats] = useState(true);

  const filteredStudents = students.filter((student) => {
    const matchesActive = filterActiveOnly ? student.active : true;
    const matchesSearch = student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesActive && matchesSearch;
  });

  return (
    <div className="dashboard">
      <Header />

      <button
        className="btn btn-secondary"
        style={{ marginBottom: '15px' }}
        onClick={() => setShowStats(!showStats)}
      >
        {showStats ? 'הסתר סטטיסטיקה' : 'הצג סטטיסטיקה'}
      </button>

      {showStats && <Statistics students={students} />}

      <div className="controls">
        <input
          type="text"
          className="search-input"
          placeholder="חפש תלמידה לפי שם..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn" onClick={() => setFilterActiveOnly(false)}>
          הצג את כולן
        </button>
        <button className="btn" onClick={() => setFilterActiveOnly(true)}>
          הצג פעילות בלבד
        </button>
      </div>

      <StudentList students={filteredStudents} />
    </div>
  );
}

export default Dashboard;