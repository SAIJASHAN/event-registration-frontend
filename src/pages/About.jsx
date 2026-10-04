function About() {
    return (
        <main>

            {/* Hero */}

            <section className="about-hero">

                <p className="small-heading">
                    ABOUT EVENTLY
                </p>

                <h1>
                    An event built
                    <span> for students.</span>
                </h1>

                <p className="about-intro">
                    Evently is a simple event registration platform
                    designed to make joining and managing student
                    events easy, clear, and organized.
                </p>

            </section>


            {/* About content */}

            <section className="about-content">

                {/* Purpose */}

                <div className="about-card">

                    <p className="card-label">
                        OUR PURPOSE
                    </p>

                    <h2>
                        Why Evently?
                    </h2>

                    <p>
                        Evently provides a simple way for students
                        to register for events without complicated
                        forms or unnecessary steps.
                    </p>

                    <p>
                        The platform also gives organizers a clear
                        view of registered participants while keeping
                        personal registration information private.
                    </p>

                </div>


                {/* How it works */}

                <div className="about-card">

                    <p className="card-label">
                        HOW IT WORKS
                    </p>

                    <h2>
                        Simple process.
                    </h2>


                    <div className="about-items">

                        <div className="about-item">

                            <div className="about-number">
                                01
                            </div>

                            <div>
                                <h3>
                                    Register
                                </h3>

                                <p>
                                    Enter your name, roll number,
                                    and reason for joining.
                                </p>
                            </div>

                        </div>


                        <div className="about-item">

                            <div className="about-number">
                                02
                            </div>

                            <div>
                                <h3>
                                    Get Registered
                                </h3>

                                <p>
                                    Your registration is securely
                                    stored in the event database.
                                </p>
                            </div>

                        </div>


                        <div className="about-item">

                            <div className="about-number">
                                03
                            </div>

                            <div>
                                <h3>
                                    Join the Community
                                </h3>

                                <p>
                                    View the participants who have
                                    registered for the event.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Technology */}

            <section className="about-content">

                <div className="about-card">

                    <p className="card-label">
                        TECHNOLOGY
                    </p>

                    <h2>
                        Built with modern tools.
                    </h2>

                    <p>
                        The frontend is built using React, while
                        Spring Boot handles the backend REST APIs.
                        MySQL is used to store registration data.
                    </p>

                </div>


                <div className="about-card">

                    <p className="card-label">
                        PRIVACY
                    </p>

                    <h2>
                        Simple and focused.
                    </h2>

                    <p>
                        The public participant list shows only the
                        information needed to identify registered
                        participants. Registration reasons are kept
                        private.
                    </p>

                </div>

            </section>


            {/* CTA */}

            <section className="about-cta">

                <p className="small-heading">
                    READY TO JOIN?
                </p>

                <h2>
                    Be part of the event.
                </h2>

                <p>
                    Register today and become part of the community.
                </p>

                <button
                    className="black-btn"
                    onClick={() => {
                        window.location.href = "/register";
                    }}
                >
                    Register Now →
                </button>

            </section>

        </main>
    );
}

export default About;