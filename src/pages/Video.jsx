import './Video.css'

const videos = [
  { title: 'TEASER', placeholder: true },
  { title: 'AGGIE SWIM', placeholder: true },
  { title: 'AYANTEE NETWORK', placeholder: true },
  { title: 'SPEECH', placeholder: true },
]

export default function Video() {
  return (
    <div className="video-page">
      <h2 className="video-title">CAMPAIGN VIDEOS</h2>

      <div className="video-grid">
        {videos.map((vid, i) => (
          <div key={i} className="video-card">
            <div className="video-placeholder">
              <div className="video-play-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="var(--gold)">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <p className="video-label">{vid.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
