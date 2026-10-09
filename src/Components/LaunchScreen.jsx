import { useEffect } from "react";

function LaunchScreen({ onFinish }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 2500);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="launch-screen">

            <div className="launch-content">

                <div className="launch-logo">
                    E
                </div>

                <h1>Evently</h1>

                <p className="launch-title">
                    EVENT REGISTRATION SYSTEM
                </p>

                <p className="launch-subtitle">
                    Connect. Register. Participate.
                </p>

                <div className="launch-loader">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <p className="launch-loading">
                    Loading...
                </p>

            </div>

        </div>
    );
}

export default LaunchScreen;