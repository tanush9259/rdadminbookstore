import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <Container>

                <Row className="py-4">

                    {/* RDEC ABOUT */}
                    <Col md={4} className="mb-3">

                        <h3 className="footer-title">
                            <i className="bi bi-book me-2"></i>
                            RDEC
                        </h3>

                        <p className="footer-tagline">
                            Learn Today &nbsp; | &nbsp; Build Tomorrow
                        </p>

                        <p className="footer-text">
                            Your trusted platform for quality education
                            and skill development. Explore courses, learn
                            new technologies and grow your career with us.
                        </p>

                    </Col>


                    {/* QUICK LINKS */}
                    <Col md={3} className="mb-3">

                        <h5 className="footer-heading">
                            Quick Links
                        </h5>

                        <ul className="footer-links">

                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <a href="/">Home</a>
                            </li>

                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <a href="/books">Books</a>
                            </li>

                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <a href="/contact">Contact Us</a>
                            </li>

                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <a href="/login">Login</a>
                            </li>

                        </ul>

                    </Col>


                    {/* CONTACT US */}
                    <Col md={3} className="mb-3">

                        <h5 className="footer-heading">
                            Contact Us
                        </h5>

                        <p>
                            <i className="bi bi-telephone-fill me-2"></i>
                            9259158633
                        </p>

                        <p>
                            <i className="bi bi-envelope-fill me-2"></i>
                            tanu1116766@gmail.com
                        </p>

                        <p>
                            <i className="bi bi-geo-alt-fill me-2"></i>
                            Muradabad, Modinagar
                        </p>

                    </Col>


                    {/* FOLLOW US */}
                    <Col md={2} className="mb-3">

                        <h5 className="footer-heading">
                            Follow Us
                        </h5>

                        <div className="social-icons">

                            <a
                                href="#"
                                className="facebook"
                                title="Facebook"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>

                            <a
                                href="#"
                                className="instagram"
                                title="Instagram"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>

                            <a
                                href="#"
                                className="youtube"
                                title="YouTube"
                            >
                                <i className="bi bi-youtube"></i>
                            </a>

                            <a
                                href="#"
                                className="linkedin"
                                title="LinkedIn"
                            >
                                <i className="bi bi-linkedin"></i>
                            </a>

                        </div>

                    </Col>

                </Row>


                {/* LINE */}
                <hr />


                {/* COPYRIGHT */}
                <div className="copyright">
                    © 2025 RDEC. All Rights Reserved.
                </div>

            </Container>

        </footer>
    );
}

export default Footer;