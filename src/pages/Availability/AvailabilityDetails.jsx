import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

function AvailabilityDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [availability, setAvailability] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        axios({
            url: apiUrl + "/availability/" + id,
            method: "get"
        })
        .then((res) => {
            console.log(res.data);
            setAvailability(res.data?.data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });

    }, [id]);

    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" />
            </div>
        );
    }

    if (!availability) {
        return (
            <Container className="mt-5">
                <h4>Availability not found</h4>

                <Button
                    onClick={() => navigate("/availability")}
                    className="mt-3"
                >
                    Back
                </Button>
            </Container>
        );
    }

    return (
        <Container className="mt-4">

            <Card>

                <Card.Header className="bg-dark text-white">
                    <h4 className="mb-0">
                        Availability Details
                    </h4>
                </Card.Header>

                <Card.Body>

                    <p>
                        <strong>Book Name:</strong>{" "}
                        {availability.bookName}
                    </p>

                    <p>
                        <strong>Author:</strong>{" "}
                        {availability.author}
                    </p>

                    <p>
                        <strong>Quantity:</strong>{" "}
                        {availability.quantity}
                    </p>

                    <p>
                        <strong>Status:</strong>{" "}
                        {availability.status}
                    </p>

                    <Button
                        variant="secondary"
                        onClick={() => navigate("/availability")}
                    >
                        ← Back
                    </Button>

                </Card.Body>

            </Card>

        </Container>
    );
}

export default AvailabilityDetails;