
import { useEffect, useState, useCallback } from "react";
import { useRegistrationSocket } from "../hooks/useRegistrationSocket";

function Participants() {
    const [participants, setParticipants] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Keep the same setter reference between renders
    const updateCount = useCallback((newCount) => {
        setCount(newCount);
    }, []);

    // Receive live count updates through WebSocket
    useRegistrationSocket(updateCount);

    useEffect(() => {
        const loadParticipants = async () => {
            try {
                const response = await fetch(
                    "https://event-registration-backend-production-a60e.up.railway.app/api/registrations"
                );

                if (!response.ok) {
                    throw new Error("Failed to load participants");
                }

                const data = await response.json();
                setParticipants(data);

                const countResponse = await fetch(
                    "https://event-registration-backend-production-a60e.up.railway.app/api/registrations/count"
                );

                if (!countResponse.ok) {
                    throw new Error("Failed to load count");
                }

                const countData = await countResponse.json();
                setCount(countData);
            } catch (err) {
                console.error(err);
                setError("Unable to load participants.");
            } finally {
                setLoading(false);
            }
        };

        loadParticipants();
    }, []);

    return (
        <main>
            <section className="participants-hero">
                <p className="small-heading">EVENT COMMUNITY</p>

                <h1>
                    Meet the
                    <span> participants.</span>
                </h1>

                <p>
                    Explore the students who have already
                    registered for the event.
                </p>
            </section>

            <section className="participants-card">
                <div className="participants-header">
                    <div>
                        <p className="card-label">
                            REGISTERED PARTICIPANTS
                        </p>

                        <h2>Event Community</h2>
                    </div>

                    <div className="total-box">
                        <span>TOTAL</span>
                        <strong>{count}</strong>
                    </div>
                </div>

                <div id="participantsList">
                    {loading && (
                        <div className="loading">
                            Loading participants...
                        </div>
                    )}

                    {error && (
                        <div className="loading">{error}</div>
                    )}

                    {!loading && !error && (
                        <table>
                            <thead>
                                <tr>
                                    <th>Roll Number</th>
                                    <th>Student Name</th>
                                </tr>
                            </thead>

                            <tbody>
                                {participants.map((participant) => (
                                    <tr key={participant.id}>
                                        <td>
                                            <span className="roll-badge">
                                                {participant.rollNo}
                                            </span>
                                        </td>

                                        <td>
                                            <span className="student-name">
                                                {participant.studentName}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                <div className="participants-bottom">
                    <p>Want to join the event?</p>

                    <button
                        className="black-btn"
                        onClick={() => {
                            window.location.href = "/register";
                        }}
                    >
                        Register Now →
                    </button>
                </div>
            </section>
        </main>
    );
}

export default Participants;
