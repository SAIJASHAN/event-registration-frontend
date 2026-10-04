import { Link } from "react-router-dom";

function Home() {
    return (
        <main>

            {/* Hero */}

            <section className="hero">

                <p className="small-heading">
                    EVENT REGISTRATION
                </p>

                <h1>
                    Connect.
                    <span> Learn. Experience.</span>
                </h1>

                <p className="hero-description">
                    Join our event, meet new people, share ideas,
                    and be part of an experience designed for
                    students.
                </p>

                <div className="hero-buttons">

                    <Link
                        to="/register"
                        className="primary-btn"
                    >
                        Register Now →
                    </Link>

                    <Link
                        to="/participants"
                        className="secondary-btn"
                    >
                        View Participants
                    </Link>

                </div>

            </section>


            {/* Event information */}

            <section className="event-card">

                <div className="card-header">

                    <div>

                        <p className="card-label">
                            EVENT INFORMATION
                        </p>

                        <h2>
                            Student Event 2026
                        </h2>

                    </div>

                    <div className="status">
                        Registration Open
                    </div>

                </div>


                {/* Statistics */}

                <div className="stats">

                    <div className="stat-box">

                        <p>
                            REGISTERED
                        </p>

                        <h3>
                            4
                        </h3>

                        <span>
                            Students registered
                        </span>

                    </div>


                    <div className="stat-box">

                        <p>
                            EVENT TYPE
                        </p>

                        <h3>
                            Campus
                        </h3>

                        <span>
                            Student focused event
                        </span>

                    </div>


                    <div className="stat-box">

                        <p>
                            STATUS
                        </p>

                        <h3>
                            Open
                        </h3>

                        <span>
                            Registration available
                        </span>

                    </div>

                </div>


                {/* Bottom */}

                <div className="card-bottom">

                    <div>

                        <p className="bottom-title">
                            Ready to participate?
                        </p>

                        <p className="bottom-text">
                            Register now and become part
                            of the event community.
                        </p>

                    </div>

                    <Link
                        to="/register"
                        className="black-btn"
                    >
                        Register →
                    </Link>

                </div>

            </section>

        </main>
    );
}

export default Home;