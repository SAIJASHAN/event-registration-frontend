
import { useEffect } from "react";
import { Client } from "@stomp/stompjs";

const SOCKET_URL =
    "wss://event-registration-backend-production-a60e.up.railway.app/ws";

export function useRegistrationSocket(setCount) {
    useEffect(() => {
        const client = new Client({
            brokerURL: SOCKET_URL,

            reconnectDelay: 5000,

            onConnect: () => {
                console.log("WebSocket connected!");

                client.subscribe(
                    "/topic/registration-count",
                    (message) => {
                        setCount(Number(message.body));
                    }
                );
            },

            onStompError: (frame) => {
                console.error(
                    "WebSocket error:",
                    frame.headers["message"]
                );
            },

            onWebSocketError: (error) => {
                console.error("WebSocket connection error:", error);
            }
        });

        client.activate();

        return () => {
            client.deactivate();
        };
    }, [setCount]);
}
