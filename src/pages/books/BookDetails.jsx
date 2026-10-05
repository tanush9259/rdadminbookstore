
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Badge
} from 'react-bootstrap';

import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

function BookDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState({});
    const [discountData, setDiscountData] = useState(null);


    // =========================
    // GET BOOK
    // =========================

    useEffect(() => {

        axios({
            url: apiUrl + '/book/' + id,
            method: 'get'
        })
            .then((res) => {

                console.log("BOOK DATA:", res.data.data);

                setBook(res.data.data);

            })
            .catch((err) => {

                console.log(err);

                alert("Book details load nahi ho rahi");

            });

    }, [id]);


    // =========================
    // GET DISCOUNT
    // =========================

    useEffect(() => {

        axios({
            url: apiUrl + '/discounts',
            method: 'get'
        })
            .then((res) => {

                console.log("ALL DISCOUNTS:", res.data.data);

                const discounts = res.data.data || [];


                // Is book ka discount find karo
                const matchingDiscount = discounts.find(
                    (discount) => {

                        const discountBookId =
                            discount.book?._id || discount.book;

                        return String(discountBookId) === String(id);
                    }
                );


                console.log(
                    "MATCHING DISCOUNT:",
                    matchingDiscount
                );


                // Sirf Active discount use hoga
                if (matchingDiscount) {

                    const today = new Date();

                    today.setHours(0, 0, 0, 0);


                    const fromDate =
                        new Date(matchingDiscount.validFrom);

                    fromDate.setHours(0, 0, 0, 0);


                    const toDate =
                        new Date(matchingDiscount.validTo);

                    toDate.setHours(0, 0, 0, 0);


                    if (
                        today >= fromDate &&
                        today <= toDate
                    ) {

                        setDiscountData(matchingDiscount);

                    } else {

                        setDiscountData(null);

                    }

                } else {

                    setDiscountData(null);

                }

            })
            .catch((err) => {

                console.log("DISCOUNT ERROR:", err);

                setDiscountData(null);

            });

    }, [id]);


    // =========================
    // PRICE CALCULATION
    // =========================

    const originalPrice =
        Number(book.originalPrice) || 0;


    const discount =
        Number(discountData?.discountValue) || 0;


    let currentPrice = originalPrice;


    if (discount > 0) {

        if (
            discountData?.discountType === "Percentage"
        ) {

            currentPrice =
                originalPrice -
                (originalPrice * discount / 100);

        } else {

            // Fixed discount
            currentPrice =
                originalPrice - discount;

        }

    }


    if (currentPrice < 0) {
        currentPrice = 0;
    }


    return (

        <Container className="py-4">

            {/* BACK BUTTON */}

            <Button
                variant="secondary"
                className="mb-4"
                onClick={() => navigate('/books')}
            >
                ← Back
            </Button>


            {/* BOOK CARD */}

            <Card className="shadow-sm border-0">

                <Card.Body>

                    <Row>

                        {/* IMAGE */}

                        <Col
                            md={4}
                            className="text-center"
                        >

                            <img
                                src={book.bookImage}
                                alt={book.bookTitle}
                                style={{
                                    width: '100%',
                                    maxWidth: '350px',
                                    height: '450px',
                                    objectFit: 'contain'
                                }}
                            />

                        </Col>


                        {/* DETAILS */}

                        <Col md={8}>

                            <h2 className="fw-bold">
                                {book.bookTitle}
                            </h2>


                            <p className="text-muted fs-5">
                                By {book.authorName}
                            </p>


                            {/* RATING */}

                            <div className="mb-3">

                                <Badge bg="success">
                                    ★ {book.rating || '0'}
                                </Badge>

                                <span className="ms-2 text-muted">
                                    {book.reviews || '0'} Reviews
                                </span>

                            </div>


                            <hr />


                            {/* ========================= */}
                            {/* PRICE */}
                            {/* ========================= */}

                            <div className="mb-4">

                                {discountData ? (

                                    <div className="d-flex align-items-center gap-3 flex-wrap">

                                        {/* DISCOUNT */}

                                        <span
                                            className="text-success fw-bold fs-4"
                                        >

                                            ↓
                                            {discountData.discountType ===
                                                "Percentage"
                                                ? `${discount}%`
                                                : `₹${discount}`
                                            }

                                        </span>


                                        {/* ORIGINAL PRICE */}

                                        <span
                                            className="text-muted text-decoration-line-through fs-5"
                                        >
                                            ₹{originalPrice.toFixed(0)}
                                        </span>


                                        {/* CURRENT PRICE */}

                                        <span
                                            className="fs-2 fw-bold"
                                        >
                                            ₹{currentPrice.toFixed(0)}
                                        </span>

                                    </div>

                                ) : (

                                    // Discount nahi hai
                                    <span className="fs-2 fw-bold">
                                        ₹{originalPrice.toFixed(0)}
                                    </span>

                                )}

                            </div>


                            {/* DISCOUNT NAME */}

                            {discountData && discountData.discountName && (

                                <div className="mb-3">

                                    <Badge bg="success">
                                        {discountData.discountName}
                                    </Badge>

                                </div>

                            )}


                            {/* SHORT DESCRIPTION */}

                            {book.shortDescription && (

                                <div className="mb-4">

                                    <h5 className="fw-bold">
                                        About this book
                                    </h5>

                                    <p>
                                        {book.shortDescription}
                                    </p>

                                </div>

                            )}


                            {/* BOOK DETAILS */}

                            <h5 className="fw-bold mb-3">
                                Book Details
                            </h5>


                            <BookDetailLocal
                                label="Author"
                                value={book.authorName}
                            />

                            <BookDetailLocal
                                label="Publisher"
                                value={book.publisher}
                            />

                            <BookDetailLocal
                                label="Publication Year"
                                value={book.publicationYear}
                            />

                            <BookDetailLocal
                                label="ISBN"
                                value={book.isbnNo}
                            />

                            <BookDetailLocal
                                label="Edition"
                                value={book.edition}
                            />

                            <BookDetailLocal
                                label="Language"
                                value={book.language}
                            />

                            <BookDetailLocal
                                label="Genre"
                                value={book.genre}
                            />

                            <BookDetailLocal
                                label="Category"
                                value={book.bookCategory}
                            />

                        </Col>

                    </Row>

                </Card.Body>

            </Card>


            {/* DESCRIPTION */}

            {book.description && (

                <Card className="shadow-sm border-0 mt-4">

                    <Card.Body>

                        <h4 className="fw-bold">
                            Description
                        </h4>

                        <p className="mt-3">
                            {book.description}
                        </p>

                    </Card.Body>

                </Card>

            )}


            {/* PRODUCT INFORMATION */}

            <Card className="shadow-sm border-0 mt-4">

                <Card.Body>

                    <h4 className="fw-bold mb-3">
                        Product Information
                    </h4>


                    <BookDetailLocal
                        label="Country of Origin"
                        value={book.countryOfOrigin}
                    />

                    <BookDetailLocal
                        label="Manufacturer"
                        value={book.nameOfManufacturer}
                    />

                    <BookDetailLocal
                        label="Manufacturer Address"
                        value={book.addressOfManufacturer}
                    />

                    <BookDetailLocal
                        label="Packager"
                        value={book.nameOfPackager}
                    />

                    <BookDetailLocal
                        label="Packager Address"
                        value={book.addressOfPackager}
                    />

                </Card.Body>

            </Card>

        </Container>

    );

}


function BookDetailLocal({ label, value }) {

    return (

        <Row className="border-bottom py-2">

            <Col
                xs={5}
                className="text-muted"
            >
                {label}
            </Col>

            <Col
                xs={7}
                className="fw-semibold"
            >
                {value || '-'}
            </Col>

        </Row>

    );

}


export default BookDetail;

