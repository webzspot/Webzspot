// import React from "react";

// const reviews = [
//   {
//     name: "Emma Johnson",
//     role: "Customer",
//     image:
//       "https://framerusercontent.com/images/xOeiV3jc57a69GjC0fZf3MEo6c4.jpg",
//     text: "The branding service transformed my small tutoring business into a professional and trusted brand.",
//   },
//   {
//     name: "Jason Turner",
//     role: "Startup Founder",
//     image:
//       "https://framerusercontent.com/images/w2FmcyGiPZYmAcFpbkNNeO3Js.jpg",
//     text: "They don’t just design – they understand your business.",
//   },
//   {
//     name: "Mia Reynolds",
//     role: "Creative Director",
//     image:
//       "https://framerusercontent.com/images/70vyypRi1KNFqhUIRRXm76uj98.jpg",
//     text: "Working with BrightEdge was smooth from day one.",
//   },
//   {
//     name: "Daniel Cho",
//     role: "Nonprofit Executive",
//     image:
//       "https://framerusercontent.com/images/EOTd4Jck73lM7fmF7v2rc2vT0wY.jpg",
//     text: "Our brand finally feels aligned with our mission.",
//   },
// ];

// const Star = () => (
//   <svg width="18" height="18" viewBox="0 0 256 256" fill="#444">
//     <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
//   </svg>
// );

// const ReviewCard = ({ review }) => (
//   <div className="card">
//     <div className="top">
//       <img src={review.image} alt={review.name} />
//       <div>
//         <h4>{review.name}</h4>
//         <p>{review.role}</p>
//       </div>
//     </div>

//     <p className="text">{review.text}</p>

//     <div className="stars">
//       {[...Array(5)].map((_, i) => (
//         <Star key={i} />
//       ))}
//     </div>
//   </div>
// );

// const Review = () => {
//   const looped = [...reviews, ...reviews, ...reviews]; // 🔥 triple for smooth infinite

//   return (
//     <section className="section">
//       {/* HEADER */}
//       <div className="header">
//         <p className="tag">{`{ What Our Clients Are Saying }`}</p>
//         <h2>Testimonials That Inspire Confidence</h2>
//       </div>

//       {/* TOP ROW */}
//       <div className="carousel">
//         <div className="track left">
//           {looped.map((r, i) => (
//             <ReviewCard key={i} review={r} />
//           ))}
//         </div>
//       </div>

//       {/* BOTTOM ROW */}
//       <div className="carousel">
//         <div className="track right">
//           {looped.map((r, i) => (
//             <ReviewCard key={i} review={r} />
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .section {
//           padding: 80px 20px;
//           background: #f9f9f9;
//           overflow: hidden;
//           font-family: sans-serif;
//         }

//         .header {
//           max-width: 700px;
//           margin-left: 60px;
//           margin-bottom: 40px;
//           position: relative;
//           z-index: 10;
//         }

//         .tag {
//           color: #f55733;
//           font-weight: 600;
//           font-size: 14px;
//           margin-bottom: 10px;
//         }

//         .header h2 {
//           font-size: 32px;
//           margin: 0;
//           color: #333;
//         }

//         /* CAROUSEL WRAPPER WITH EDGE BLUR */
//         .carousel {
//           position: relative;
//           overflow: hidden;
//           margin-bottom: 25px;
//         }

//         /* LEFT + RIGHT BLUR MASK */
//         .carousel::before,
//         .carousel::after {
//           content: "";
//           position: absolute;
//           top: 0;
//           width: 120px;
//           height: 100%;
//           z-index: 2;
//           pointer-events: none;
//         }

//         .carousel::before {
//           left: 0;
//           background: linear-gradient(to right, #f9f9f9, transparent);
//         }

//         .carousel::after {
//           right: 0;
//           background: linear-gradient(to left, #f9f9f9, transparent);
//         }

//         /* TRACK */
//         .track {
//           display: flex;
//           gap: 20px;
//           width: max-content;
//           will-change: transform;
//         }

//         /* LEFT → RIGHT */
//         .track.left {
//           animation: scrollLeft 30s linear infinite;
//         }

//         /* RIGHT → LEFT */
//         .track.right {
//           animation: scrollRight 30s linear infinite;
//         }

//         @keyframes scrollLeft {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-33.33%);
//           }
//         }

//         @keyframes scrollRight {
//           0% {
//             transform: translateX(-33.33%);
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }

//         /* CARD */
//         .card {
//           width: 300px;
//           flex: 0 0 300px;
//           background: #fff;
//           border-radius: 20px;
//           padding: 20px;
//           border: 1px solid #ddd;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           min-height: 220px;
//         }

//         .top {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           margin-bottom: 15px;
//         }

//         .top img {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           object-fit: cover;
//         }

//         .top h4 {
//           margin: 0;
//           font-size: 16px;
//         }

//         .top p {
//           margin: 0;
//           font-size: 13px;
//           color: #777;
//         }

//         .text {
//           font-size: 14px;
//           color: #555;
//           margin-bottom: 15px;
//         }

//         .stars {
//           display: flex;
//           gap: 4px;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Review;

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
          background: radial-gradient(circle at top, #e1e7f7, #020617);
          color: white;
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
          color: #f55733;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .header h2 {
          font-size: 32px;
          margin: 0;
          color: #333;
        }

        .carousel {
          overflow: hidden;
          margin-bottom: 30px;
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
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.4s ease;
          overflow: hidden;
        }

        /* glow effect */
        .glow {
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(99,102,241,0.3), transparent);
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
          color: #9ca3af;
        }

        .text {
          font-size: 14px;
          color: #d1d5db;
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