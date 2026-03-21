import './Bio.css'
import juniorImg from '../assets/mister-junior.jpg'
import tuxedoImg from '../assets/tuxedo.jpg'
import flyerImg from '../assets/flyer.jpg'

const sections = [
  {
    image: flyerImg,
    text: "I am Chase Moore, a third-year Business Administration major with a minor in Film Studies from the City of Angels, Los Angeles, California. During my time at Fisk University, I have taken on various leadership roles that have deepened my passion for community service, student engagement, and advocacy. These experiences have shaped my commitment to creating meaningful opportunities for others while building impactful experiences on campus. I aspire to become an entertainment executive, producing films, television, and live events that resonate with diverse audiences and leave a lasting impact.",
  },
  {
    image: juniorImg,
    text: "As a Resident Assistant in New Livingstone Hall and Crosthwaite Hall, I have fostered a strong sense of community through both active and passive programming initiatives designed to engage and support residents.",
  },
  {
    text: "At the beginning of the 2025 school year, I began my term as Sophomore Class President. In this role, I established the class GroupMe to improve communication, led the development of the class logo and catchphrase, and organized multiple events and initiatives to enhance class engagement and unity (TWO-SEV!)",
  },
  {
    text: "In Fall 2024, I was initiated into the Alpha Chi Chapter of Alpha Phi Alpha Fraternity, Inc., where I currently serve as Secretary and Head of Events. In this role, I lead the planning and execution of programming aligned with our chapter's annual goals, while also overseeing our social media strategy. I spearheaded initiatives such as the \"Black History Month Fact of the Week\" campaign, which reached over 15,000 viewers and expanded our digital engagement.",
  },
  {
    image: tuxedoImg,
    text: "In 2025, I competed in the Mr. Crimson and Cream pageant for the Alpha Beta Chapter of Delta Sigma Theta Sorority, Inc. Through this experience, I strengthened my confidence and stage presence while also contributing to the planning and execution of King's Week programming.",
  },
]

export default function Bio() {
  return (
    <div className="bio">
      <div className="bio-sections">
        {sections.map((section, i) => (
          <div key={i} className="bio-section">
            {section.image && (
              <div className="bio-image">
                <img src={section.image} alt="" />
              </div>
            )}
            <p className="bio-text">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
