import './Initiatives.css'

const freshmanInitiatives = [
  {
    title: "Men's Mental Health Matters",
    date: "Oct. 26, 2023",
    description: "In partnership with PLUS Mental Health Organization, created a space for open dialogue around men's mental health.",
  },
  {
    title: "Fall Into Finals",
    date: "Nov. 30, 2023",
    description: "Co-hosted with Ms. Freshman Kaci McNeil to support students during finals season.",
  },
  {
    title: "How to Tie a Tie Workshop",
    date: "Feb. 26, 2024",
    description: "Collaborated with Mr. Junior Rodney Curry to promote professional development.",
  },
  {
    title: "Men's Mental Health Panel Part II",
    date: "Apr. 1, 2024",
    description: "Partnered with NPHC organizations (AX Alphas, AD Nupes, Eta Psi Ques, AG Sigmas) and PLUS Mental Health to expand conversation and engagement.",
  },
]

const juniorInitiatives = [
  {
    title: "Every Last Friday: September Edition",
    date: "Sept. 23, 2025",
    description: "Featured Shop & Swap (with The Beginning), food trucks (Pepper Pott, Kona Ice), student vendors, and live DJ.",
  },
  {
    title: "Pink Week",
    date: "Oct. 6-11, 2025",
    description: "A week-long Breast Cancer Awareness initiative including: Breast Cancer Awareness Forum, Healing Letters & Care Packages, Pink Field Day, Pink Out Volleyball Game, and Making Strides of Nashville Walk.",
  },
  {
    title: "Every Last Friday: October Edition",
    date: "Oct. 31, 2025",
    description: "Featured student engagement activities and live DJ experience.",
  },
  {
    title: "Final Touchdown: Super Bowl Watch Party",
    date: "Feb. 8, 2026",
    description: "Collaborated with Asafo Plates, Royal Court, Student Ambassadors, and West Coast Connection to create a large-scale community event.",
  },
  {
    title: "Black Excellence Expo",
    date: "Feb. 28, 2026",
    description: "Partnered with AX Alphas and Fisk Activities Board (FAB) to highlight student vendors and celebrate Black excellence.",
  },
]

export default function Initiatives() {
  return (
    <div className="initiatives">
      <h2 className="initiatives-title">ROYAL COURT EXPERIENCE</h2>
      <p className="initiatives-subtitle">
        As Mr. Freshman (2023-2024) and Mr. Junior (2025-2026), I have led or co-led over 13 campus initiatives focused on student engagement, wellness, and community impact.
      </p>

      <h3 className="initiatives-heading">
        <span className="gold-text">Mr. Freshman Initiatives</span>
      </h3>
      <div className="vision-list">
        {freshmanInitiatives.map((item, i) => (
          <div key={i} className="vision-item">
            <div className="vision-content">
              <h4 className="vision-name">{item.title}</h4>
              <p className="vision-date">{item.date}</p>
              <p className="vision-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="initiatives-heading" style={{ marginTop: '32px' }}>
        <span className="gold-text">Mr. Junior Initiatives</span>
      </h3>
      <div className="vision-list">
        {juniorInitiatives.map((item, i) => (
          <div key={i} className="vision-item">
            <div className="vision-content">
              <h4 className="vision-name">{item.title}</h4>
              <p className="vision-date">{item.date}</p>
              <p className="vision-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
