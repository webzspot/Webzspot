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

            {/* BACKGROUND BLOBS */}
            <div style={styles.bgBlobs}>
                <div style={styles.blob1}></div>
                <div style={styles.blob2}></div>
                <div style={styles.blob3}></div>
            </div>

            <div style={styles.container}>

                {/* LEFT SIDE */}
                <div style={styles.left}>
                    <div style={styles.label}>
                        {"{ FAQ }"}
                    </div>

                    <h2 style={styles.heading}>
                        Clear Solutions to Your Concerns
                    </h2>

                    <div style={styles.imageWrapper}>
                        <img
                            src="https://framerusercontent.com/images/QY6drXCswOtdH5g7g8gHn9nbx8.jpeg?width=960&height=1200"
                            alt="faq"
                            style={styles.image}
                        />
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
                                        color: isOpen ? "#0ea5e9" : "#1a1a1a",
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

    /* MAIN BACKGROUND */
    section: {
        padding: "100px 20px",
        background: "linear-gradient(to bottom, #f4fbff, #edf7fd, #ffffff)",
        position: "relative",
        overflow: "hidden",
    },

    /* BLUR BACKGROUND GLOWS */
    bgBlobs: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
    },

    blob1: {
        position: "absolute",
        top: "-120px",
        left: "-100px",
        width: "420px",
        height: "420px",
        background: "rgba(56, 189, 248, 0.25)",
        filter: "blur(120px)",
        borderRadius: "50%",
    },

    blob2: {
        position: "absolute",
        bottom: "-140px",
        right: "-120px",
        width: "500px",
        height: "500px",
        background: "rgba(59, 130, 246, 0.25)",
        filter: "blur(140px)",
        borderRadius: "50%",
    },

    blob3: {
        position: "absolute",
        top: "40%",
        left: "45%",
        width: "300px",
        height: "300px",
        background: "rgba(186, 230, 253, 0.25)",
        filter: "blur(100px)",
        borderRadius: "50%",
    },

    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",
        alignItems: "start",
        position: "relative",
        zIndex: 1,
    },

    /* LEFT */
    left: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        position: "sticky",
        top: "100px",
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
        width: "100%",
        height: "520px",
        borderRadius: "40px",
        overflow: "hidden",
        marginTop: "10px",
    },

    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
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