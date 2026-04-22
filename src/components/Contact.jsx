import React from "react";

const Contact = () => {
    return (
        <section className="contact-section">
            {/* Background */}
            <div className="contact-bg">
                <img
                    src="https://framerusercontent.com/images/KQ1knR1dm5HBcHPKy9oO93moZI.jpg"
                    alt="background"
                />
                <div className="overlay"></div>
            </div>

            <div className="contact-container">
                {/* Header */}
                <div className="contact-header">
                    <p className="tag">{`{ Get in touch }`}</p>
                    <h2>Let’s Start Your Project Today</h2>
                </div>

                <div className="contact-content">
                    {/* Left Side */}
                    <div className="contact-info">
                        <img
                            src="https://framerusercontent.com/images/sO8Qc7EI5ijTzk0bY8jBsX1qYew.jpg"
                            alt="Michael"
                            className="profile-img"
                        />
                        <h3>Michael Bridges</h3>
                        <p className="role">CEO, BrightEdge</p>
                        <p className="desc">
                            At BrightEdge, we believe in building meaningful digital
                            experiences. If you ever have questions or need guidance, I’m
                            always here to support you. Your success is our mission — let’s
                            create something incredible together.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="contact-form">
                        <div className="row">
                            <div className="input-group">
                                <label>Name</label>
                                <input type="text" placeholder="John Smith" required />
                            </div>

                            <div className="input-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="johnsmith@gmail.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Service Needed?</label>
                            <select required>
                                <option>Branding</option>
                                <option>Web Design</option>
                                <option>Marketing</option>
                                <option>Development</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label>What can I help you with?</label>
                            <textarea
                                placeholder="Hello, I'd like to enquire about..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;