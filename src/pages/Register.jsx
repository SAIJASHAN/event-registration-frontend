import { useState } from "react";

function Register() {

    const [studentName, setStudentName] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [reason, setReason] = useState("");

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {

        e.preventDefault();

        setMessage("");
        setLoading(true);

        try {

            const response = await fetch(
                "https://event-registration-backend-production-a60e.up.railway.app/api/registrations",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        studentName: studentName,
                        rollNo: rollNo,
                        reason: reason
                    })
                }
            );

            const text = await response.text();
            console.log("Backend response:", text);

let data = {};

try {
    data = JSON.parse(text);
} catch {
    data = { message: text };
}

if (!response.ok) {
    setMessage(data.message || "Registration failed.");
    return;
}


            setMessage("Registration successful!");

            setStudentName("");
            setRollNo("");
            setReason("");

            console.log(data);

        } catch (error) {

            console.error(error);

            setMessage(
                "Unable to connect to the server."
            );

        } finally {

            setLoading(false);
        }
    };


    return (

        <main>

            <div className="container">

                <h1>
                    Event Registration
                </h1>

                <p>
                    Register yourself for the event.
                </p>


                <form
                    id="registrationForm"
                    onSubmit={handleSubmit}
                >

                    {/* Student Name */}

                    <label htmlFor="studentName">
                        Student Name
                    </label>

                    <input
                        type="text"
                        id="studentName"
                        placeholder="Enter your name"
                        value={studentName}
                        onChange={(e) =>
                            setStudentName(e.target.value)
                        }
                        required
                    />


                    {/* Roll Number */}

                    <label htmlFor="rollNo">
                        Roll Number
                    </label>

                    <input
                        type="text"
                        id="rollNo"
                        placeholder="Enter 10-digit roll number"
                        maxLength="10"
                        inputMode="numeric"
                        value={rollNo}
                        onChange={(e) =>
                            setRollNo(e.target.value)
                        }
                        required
                    />


                    {/* Reason */}

                    <label htmlFor="reason">
                        Why are you interested in this event?
                    </label>

                    <textarea
                        id="reason"
                        placeholder="Enter your reason"
                        rows="5"
                        value={reason}
                        onChange={(e) =>
                            setReason(e.target.value)
                        }
                        required
                    />


                    {/* Submit */}

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading
                            ? "Registering..."
                            : "Register"}
                    </button>

                </form>


                {message && (
                    <p id="message">
                        {message}
                    </p>
                )}

            </div>

        </main>

    );
}


export default Register;