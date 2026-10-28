import React from 'react';
import { Link } from 'react-router-dom';

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>ציון: {student.grade}</p>
      <p>נוכחות: {student.attendance} שיעורים</p>
      <p>
        סטטוס: {' '}
        <span className={student.active ? 'status-active' : 'status-inactive'}>
          {student.active ? 'פעילה' : 'לא פעילה'}
        </span>
      </p>

      {student.grade >= 90 && (
        <div className="badge badge-excellent">מצטיינת</div>
      )}
      {student.grade < 60 && (
        <div className="badge badge-warning">נדרש שיפור</div>
      )}

      <Link to={`/students/${student.id}`}>לצפייה בפרטים</Link>
    </div>
  );
}

export default StudentCard;