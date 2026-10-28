import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="panel">
      <h1 className="big-404">404</h1>
      <h2>העמוד לא נמצא</h2>
      <Link className="btn" to="/">חזרה לדף הבית</Link>
    </div>
  )
}

export default NotFound