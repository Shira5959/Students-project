import StudentCard from '../components/StudentCard'
import { students } from '../data/students'

function ExcellentStudents() {
  const excellent = students.filter((s) => s.grade >= 90)

  return (
    <>
      <h2 className="page-title">תלמידות מצטיינות</h2>
      {excellent.length === 0 ? (
        <p>אין כרגע תלמידות עם ציון 90 ומעלה.</p>
      ) : (
        <div className="grid">
          {excellent.map((s) => (
            <StudentCard key={s.id} student={s} />
          ))}
        </div>
      )}
    </>
  )
}

export default ExcellentStudents