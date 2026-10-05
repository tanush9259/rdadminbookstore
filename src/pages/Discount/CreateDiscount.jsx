
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

function CreateDiscount() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState("");
    const [discountName, setDiscountName] = useState("");
    const [discountValue, setDiscountValue] = useState(0);
    const [discountType, setDiscountType] = useState("");
    const [validFrom, setValidFrom] = useState("");
    const [validTo, setValidTo] = useState("");

    useEffect(() => {
        axios({
            url: apiUrl + "/books/for/discount",
            method: "GET"
        })
        .then((res) => {
            setBooks(res.data.data);
        })
        .catch((err) => {
            console.log(err);
            alert(err.response?.data?.message || err.message);
        });
    }, []);

    function addDiscount() {
        let data = {
            book: book,
            discountName: discountName,
            discountValue: Number(discountValue),
            discountType: discountType,
            validFrom: validFrom,
            validTo: validTo
        };

        console.log("Sending data:", data);

        axios({
            url: apiUrl + "/add/discount",
            method: "POST",
            data: data
        })
        .then((res) => {
            alert("Discount has been added successfully...");
            navigate('/discounts')
        })
        .catch((err) => {
            console.log("Backend Error:", err.response?.data);
            alert(
                err.response?.data?.message ||
                "Discount add nahi hua"
            );
        });
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h3 className="mt-5 text-center text-danger">
                        Add Discount on Book
                    </h3>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Select Book</Form.Label>

                        <Form.Select
                            value={book}
                            onChange={(e) => setBook(e.target.value)}
                        >
                            <option value="">
                                -----Select Book------
                            </option>

                            {books.map((book) => (
                                <option
                                    key={book._id}
                                    value={book._id}
                                >
                                    {book.bookTitle}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <Form.Group>
                        <Form.Label>Discount Name</Form.Label>

                        <Form.Control
                            type="text"
                            value={discountName}
                            onChange={(e) =>
                                setDiscountName(e.target.value)
                            }
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <Form.Group>
                        <Form.Label>Discount Type</Form.Label>

                        <Form.Select
                            value={discountType}
                            onChange={(e) =>
                                setDiscountType(e.target.value)
                            }
                        >
                            <option value="">
                                ------select-------
                            </option>
                            <option value="Percentage">
                                Percentage
                            </option>
                            <option value="Fixed">
                                Fixed
                            </option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <Form.Group>
                        <Form.Label>
                            Discount Value (in Number Only)
                        </Form.Label>

                        <Form.Control
                            type="number"
                            value={discountValue}
                            onChange={(e) =>
                                setDiscountValue(e.target.value)
                            }
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <Form.Group>
                        <Form.Label>Valid From</Form.Label>

                        <Form.Control
                            type="date"
                            value={validFrom}
                            onChange={(e) =>
                                setValidFrom(e.target.value)
                            }
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <Form.Group>
                        <Form.Label>Valid To</Form.Label>

                        <Form.Control
                            type="date"
                            value={validTo}
                            onChange={(e) =>
                                setValidTo(e.target.value)
                            }
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Button
                className="mt-2"
                variant="success"
                onClick={addDiscount}
            >
                Add Discount
            </Button>
        </Container>
    );
}

export default CreateDiscount;
