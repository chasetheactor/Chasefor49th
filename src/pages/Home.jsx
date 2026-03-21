import { Link } from 'react-router-dom'
import './Home.css'
import flyerImg from '../assets/flyer.jpg'

const buttons = [
  { label: 'Who I Am?', to: '/bio' },
  { label: 'Royal Court Experience', to: '/initiatives' },
  { label: 'Why Me?', to: '/why-me' },
]

export default function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-hero-text">
          <h1 className="home-title">CHASE MOORE</h1>
          <p className="home-subtitle">FOR 49TH MR. FISK</p>
          <p className="home-presents">WORK. WIN. ELEVATE.</p>
        </div>
        <div className="home-hero-image">
          <img src={flyerImg} alt="Chase Moore for 49th Mr. Fisk" />
        </div>
      </div>

      <div className="home-buttons">
        {buttons.map((btn) => (
          <Link key={btn.to + btn.label} to={btn.to} className="home-btn">
            {btn.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
