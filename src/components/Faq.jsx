import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
    "What is included in your branding services?",
    "How long does it take to complete a branding project?",
    "Do you offer mobile-friendly designs?",
    "Can you redesign an existing website?",
    "Do you provide custom development solutions?",
    "Will I be able to update the website on my own?",
    "How do you approach digital marketing campaigns?",
    "Can you track the performance of marketing campaigns?",
    "Do you offer packages or customized services?",
    "What are the payment methods and plans for projects?",
    "Do you offer discounts for long-term collaborations?",
];

export default function FAQ() {
    const [active, setActive] = useState(null);

    const toggle = (i) => {
        setActive(active === i ? null : i);
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>

                {/* LEFT SIDE */}
                <div style={styles.left}>
                    <div style={styles.label}>
                        {"{ FAQ }"}
                    </div>

                    <h2 style={styles.heading}>
                        Clear Solutions to Your Concerns
                    </h2>

                    {/* IMAGE WITH CURVED CORNER */}
                    <div style={styles.imageWrapper}>
                        <div style={styles.bgWrapper}>
                            <img
                                src="https://framerusercontent.com/images/QY6drXCswOtdH5g7g8gHn9nbx8.jpeg?width=960&height=1200"
                                alt="faq"
                                style={styles.image}
                            />
                        </div>

                        {/* CURVED CORNER */}
                        <div style={styles.cornerWrap}>

                            <svg viewBox="0 0 100 100" style={styles.curve1}>
                                <path d="M0,0 C40,0 0,60 100,100 L0,100 Z" fill="#fff" />
                            </svg>

                            <div style={styles.cornerBoxWrap}>
                                <svg viewBox="0 0 100 100" style={styles.curve2}>
                                    <path d="M0,0 C40,0 0,60 100,100 L0,100 Z" fill="#fff" />
                                </svg>

                                <div style={styles.cornerBox}></div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div style={styles.right}>
                    {faqData.map((q, i) => {
                        const isOpen = i === active;

                        return (
                            <div key={i} style={styles.item}>
                                <div
                                    style={{
                                        ...styles.question,
                                        color: isOpen ? "#f55733" : "#1a1a1a",
                                    }}
                                    onClick={() => toggle(i)}
                                >
                                    <span>{q}</span>

                                    <div style={styles.toggle}>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 0 : 45 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            ✕
                                        </motion.div>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35 }}
                                            style={styles.answerWrap}
                                        >
                                            <p style={styles.answer}>
                                                This is a sample answer. Replace with real content.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

const styles = {
    section: {
        padding: "100px 20px",
        background: "#fff",
    },

    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",
        alignItems: "start",
    },

    /* LEFT */
    left: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        position: "sticky",
        top: "100px",
        alignSelf: "start",
    },

    label: {
        color: "#07446F",
        fontWeight: 600,
        fontSize: "18px",
    },

    heading: {
        fontSize: "48px",
        fontWeight: 700,
        color: "#1a1a1a",
        lineHeight: "1.2",
    },

    imageWrapper: {
        position: "relative",
        width: "100%",
        height: "520px",
        borderRadius: "40px",
        overflow: "hidden",
    },

    bgWrapper: {
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        zIndex: 1,
    },

    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        borderRadius: "inherit",
    },

    /* CURVED CORNER */
    cornerWrap: {
        position: "absolute",
        bottom: 0,
        right: 0,
        display: "flex",
        alignItems: "flex-end",
        zIndex: 2,
    },

    curve1: {
        width: "40px",
        height: "40px",
        transform: "scaleX(-1)",
        marginRight: "-6px",
    },

    cornerBoxWrap: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
    },

    curve2: {
        width: "40px",
        height: "40px",
        transform: "scaleX(-1)",
        marginRight: "-6px",
        marginBottom: "-4px",
    },

    cornerBox: {
        width: "160px",
        height: "110px",
        background: "#fff",
        borderTopLeftRadius: "30px",
    },

    /* RIGHT */
    right: {
        display: "flex",
        flexDirection: "column",
    },

    item: {
        borderBottom: "1px solid #e0e0e0",
        padding: "22px 0",
    },

    question: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        fontSize: "18px",
        fontWeight: 600,
        color: "#1a1a1a",
    },

    toggle: {
        width: "38px",
        height: "38px",
        border: "1px solid #999",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
    },

    answerWrap: {
        overflow: "hidden",
    },

    answer: {
        marginTop: "12px",
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#555",
    },
};