import StudentCard from '../components/StudentCard'
import { students } from '../data/students'

function Students() {
  return (
    <>
      <h2 className="page-title">כל התלמידות</h2>
      <div className="grid">
        {students.map((s) => (
          <StudentCard key={s.id} student={s} />
        ))}
      </div>
    </>
  )
}

export default Students