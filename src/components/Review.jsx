import React, { useState } from "react";

/* ================== DATA ================== */
const reviews = [
  {
    name: "Saranya",
    role: "Sarancastle",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    text: "Webzspot took us from offline to shining online with a powerful e-commerce and course-selling platform. The entire process was smooth, and the final result exceeded our expectations.",
  },
  {
    name: "Yosuva",
    role: "EMC",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 4,
    text: "From concept to launch, Webzspot handled our e-commerce website with professionalism and strong technical expertise.",
  },
  {
    name: "Michael",
    role: "Personal Portfolio",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    text: "The team at Webzspot provided outstanding support and innovative ideas for my personal brand.",
  },
  {
    name: "John Stuart",
    role: "Lemon Elegance",
    image: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    text: "Working with Webzspot was seamless. Their UI/UX design improved our customer engagement significantly.",
  },
  {
    name: "Monisha",
    role: "Tripsweet",
    image: "https://i.pravatar.cc/150?img=21",
    rating: 5,
    text: "Webzspot’s SEO services boosted our rankings dramatically and increased organic traffic.",
  },
];

/* ================== STAR ================== */
const Star = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 256 256">
    <path
      fill={filled ? "#fbbf24" : "#374151"}
      d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"
    />
  </svg>
);

/* ================== CARD ================== */
const ReviewCard = ({ review }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card">
      <div className="glow"></div>

      <div className="top">
        <img src={review.image} alt={review.name} />
        <div>
          <h4>{review.name}</h4>
          <p>{review.role}</p>
        </div>
      </div>

      <p className="text">
        {expanded ? review.text : review.text.slice(0, 110) + "..."}
        <span onClick={() => setExpanded(!expanded)} className="readMore">
          {expanded ? " Show less" : " Read more"}
        </span>
      </p>

      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} filled={i < review.rating} />
        ))}
      </div>
    </div>
  );
};

/* ================== MAIN ================== */
const Review = () => {
  const looped = Array(3).fill(reviews).flat();

  return (
    <section className="section">
      {/* HEADER */}
      <div className="header">
        <p className="tag">{`{ What Our Clients Are Saying }`}</p>
        <h2>Testimonials That Inspire Confidence</h2>
      </div>

      {/* ROW 1 */}
      <div className="carousel">
        <div className="track left">
          {looped.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>

      {/* ROW 2 */}
      <div className="carousel">
        <div className="track right">
          {looped.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style>{`
       .section {
  padding: 100px 20px;
  background: linear-gradient(
    180deg,
    #eef7ff 0%,
    #dbeafe 50%,
    #c7e6ff 100%
  );
  color: #111827;
  overflow: hidden;
}

         .header {
         max-width: 700px;
          margin-left: 60px;
          margin-bottom: 40px;
          position: relative;
          z-index: 10;
        }

        .tag {
          color: #07446F;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 10px;
        }

       .header h2 {
  font-size: 32px;
  margin: 0;
  color: #07446F;
}

        .carousel {
  overflow: hidden;
  margin-bottom: 30px;
  position: relative;
}

        .track {
          display: flex;
          gap: 20px;
          width: max-content;
        }

        .track.left {
          animation: scrollLeft 40s linear infinite;
        }

        .track.right {
          animation: scrollRight 40s linear infinite;
        }

        .track:hover {
          animation-play-state: paused;
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }

        /* CARD */
       .card {
  position: relative;
  width: 300px;
  flex: 0 0 300px;
  padding: 20px;
  border-radius: 20px;
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(7,68,111,0.1);
  transition: all 0.4s ease;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

        /* glow effect */
       .glow {
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(59,130,246,0.18), transparent);
  top: -50%;
  left: -50%;
  opacity: 0;
  transition: 0.5s;
}

        .card:hover .glow {
          opacity: 1;
        }

        .card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(99,102,241,0.6);
        }

        .top {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-bottom: 15px;
        }

        .top img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        .top h4 {
          margin: 0;
          font-size: 16px;
        }

        .top p {
  margin: 0;
  font-size: 13px;
  color: #6b7280;
}

.text {
  font-size: 14px;
  color: #374151;
  margin-bottom: 15px;
}

        .readMore {
          color: #818cf8;
          cursor: pointer;
          margin-left: 5px;
        }

        .stars {
          display: flex;
          gap: 4px;
        }

        @media (max-width: 768px) {
          .card {
            width: 260px;
            flex: 0 0 260px;
          }

          .header h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default Review;