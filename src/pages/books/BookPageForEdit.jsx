
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Card
} from "react-bootstrap";

const apiUrl = import.meta.env.VITE_API_URL;

function BookPageForEdit() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState({
        bookTitle: "",
        authorName: "",
        originalPrice: "",
        isbnNo: "",
        nop: "",
        publisher: "",
        publicationYear: "",
        edition: "",
        language: "",
        genre: "",
        bookCategory: "",
        shortDescription: "",
        description: "",
        countryOfOrigin: "",
        nameOfManufacturer: "",
        addressOfManufacturer: "",
        nameOfPackager: "",
        addressOfPackager: ""
    });

    const [loading, setLoading] = useState(true);


    // =========================
    // GET BOOK
    // =========================

    useEffect(() => {

        axios({
            url: apiUrl + "/book/for/edit/" + id,
            method: "get"
        })
            .then((res) => {

                console.log("EDIT BOOK DATA:", res.data.data);

                setBook({
                    ...book,
                    ...res.data.data
                });

                setLoading(false);

            })
            .catch((err) => {

                console.log(err);

                alert(
                    err.response?.data?.message ||
                    "Book load nahi ho rahi"
                );

                setLoading(false);

            });

    }, [id]);


    // =========================
    // HANDLE INPUT
    // =========================

    function manageUpdate(e) {

        const name = e.target.name;
        const value = e.target.value;

        setBook((prev) => ({
            ...prev,
            [name]: value
        }));

    }


    // =========================
    // UPDATE BOOK
    // =========================

    function editBook(e) {

        e.preventDefault();

        axios({
            url: apiUrl + "/edit/book/" + id,
            method: "put",
            data: book
        })
            .then((res) => {

                console.log("UPDATE RESPONSE:", res.data);

                alert("Book updated successfully");

                navigate("/books");

            })
            .catch((err) => {

                console.log("UPDATE ERROR:", err);

                alert(
                    err.response?.data?.message ||
                    "Book update nahi hui"
                );

            });

    }


    if (loading) {

        return (
            <Container className="mt-5 text-center">
                <h4>Loading book...</h4>
            </Container>
        );

    }


    return (

        <Container className="py-4">

            <Row className="justify-content-center">

                <Col md={9}>

                    <Card className="shadow">

                        <Card.Body>

                            <h3 className="text-center text-danger mb-4">
                                Edit Book
                            </h3>


                            <Form onSubmit={editBook}>

                                {/* BOOK TITLE */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Book Title
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="bookTitle"
                                        value={book.bookTitle || ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* AUTHOR */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Author Name
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="authorName"
                                        value={book.authorName || ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* ORIGINAL PRICE */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Original Price
                                    </Form.Label>

                                    <Form.Control
                                        type="number"
                                        name="originalPrice"
                                        value={book.originalPrice ?? ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* ISBN */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        ISBN No
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="isbnNo"
                                        value={book.isbnNo || ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* PAGES */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        No Of Pages
                                    </Form.Label>

                                    <Form.Control
                                        type="number"
                                        name="nop"
                                        value={book.nop ?? ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* PUBLISHER */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Publisher
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="publisher"
                                        value={book.publisher || ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* PUBLICATION YEAR */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Publication Year
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="publicationYear"
                                        value={book.publicationYear || ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* EDITION */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Edition
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="edition"
                                        value={book.edition || ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* LANGUAGE */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Language
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="language"
                                        value={book.language || ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* GENRE */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Genre
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="genre"
                                        value={book.genre || ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* CATEGORY */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Book Category
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="bookCategory"
                                        value={book.bookCategory || ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* SHORT DESCRIPTION */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Short Description
                                    </Form.Label>

                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="shortDescription"
                                        value={book.shortDescription || ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* DESCRIPTION */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Description
                                    </Form.Label>

                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        name="description"
                                        value={book.description || ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* COUNTRY */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Country Of Origin
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="countryOfOrigin"
                                        value={book.countryOfOrigin || ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* MANUFACTURER */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Name Of Manufacturer
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="nameOfManufacturer"
                                        value={book.nameOfManufacturer || ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* MANUFACTURER ADDRESS */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Address Of Manufacturer
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="addressOfManufacturer"
                                        value={book.addressOfManufacturer || ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* PACKAGER */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Name Of Packager
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="nameOfPackager"
                                        value={book.nameOfPackager || ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* PACKAGER ADDRESS */}

                                <Form.Group className="mb-3">

                                    <Form.Label>
                                        Address Of Packager
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="addressOfPackager"
                                        value={book.addressOfPackager || ""}
                                        onChange={manageUpdate}
                                    />

                                </Form.Group>


                                {/* BUTTONS */}

                                <div className="d-flex gap-2 mt-4">

                                    <Button
                                        variant="success"
                                        type="submit"
                                    >
                                        Update Book
                                    </Button>

                                    <Button
                                        variant="secondary"
                                        type="button"
                                        onClick={() => navigate("/books")}
                                    >
                                        Cancel
                                    </Button>

                                </div>

                            </Form>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

        </Container>

    );

}

export default BookPageForEdit;