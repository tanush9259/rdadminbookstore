// import { useNavigate } from "react-router-dom"
// import { Button, Container, Row, Col, Form, Table } from "react-bootstrap"
// import  { useEffect, useState } from "react"
// const apiUrl = import.meta.env.VITE_API_URL
// import axios from "axios"

// function DiscountList(){
//     let [discounts, setDiscounts] = useState([])
//     const navigate = useNavigate()
//     function goToAddDiscount(){
//         navigate('/add/discount')
// }
// function goForEdit(id) {
//     navigate('/edit/discount/' + id);
// }


// function getDiscountStatus(validFrom, validTo) {
//     let today = new Date()
//     today.setHours(0, 0, 0, 0)

//     let fromDate = new Date(validFrom)
//     fromDate.setHours(0, 0, 0, 0)

//     let toDate = new Date(validTo)
//     toDate.setHours(0, 0, 0, 0)

//     if (today >= fromDate && today <= toDate) {
//         return "Active"
//     } else {
//         return "Inactive"
//     }
// }
// useEffect(() => {
//     axios({
//         url: apiUrl + '/discounts',
//         method: 'get'
//     }).then((res) => {
//         setDiscounts(res.data.data)

//     }).catch((err) => {
//         alert(err)
//     })
// },[])
//     return(
//         <Container>
//             <Row>
//                 <Col>
//                 <Form>
//                     <Form.Group>
//                         <Form.Control type="text" placeholder="type book name to Search"></Form.Control>
//                     </Form.Group>
//                 </Form>
//                 <Button className="mt-5" variant="success" style={{float:'right'}} onClick={goToAddDiscount}>Add Discount +</Button>
//                 </Col>
//             </Row>
//             <Row>
//                 <h3 className="mt-2 text-center text-danger"> Discounts List</h3>
            
//             <Table bordered hover>
            
//             <thead>
//                 <tr>
//                      <th>Discount Name</th>
//                      <th>Discount Type</th>
//                      <th>Discount Value</th>
//                      <th>Book Name</th>
//                      <th>Valid From</th>
//                      <th>Valid To</th>
//                      <th>Status</th>
//                      <th>Actions</th>
//                  </tr>
//             </thead>
//             <tbody> 
//                {
//     discounts.map((discount) => {

//         let status = getDiscountStatus(
//             discount.validFrom,
//             discount.validTo
//         )

//         return (
//         <tr key={discount._id}>
//             <td>{discount.discountName}</td>
//             <td>{discount.discountType}</td>
//             <td>{discount.discountValue}</td>
//             {/* <td>{discount.book.bookTitle}</td> */}
//             <td>{discount.book?.bookTitle || "Book Deleted"}</td>
//             <td>{new Date(discount.validFrom).toLocaleDateString()}</td>
//             <td>{new Date(discount.validTo).toLocaleDateString()}</td>
//             <td style={{ color: status === "Active" ? "green" : "red", fontWeight: "bold" }}> {status}</td>
   
//             <td>
//             <Button variant="primary" size="sm" onClick={() => goForEdit(discount._id)}> Edit</Button>
//             </td>
//         </tr>
//         )
//     })

                        
// }
//              </tbody>

//           </Table>
//       </Row>
//      </Container>
//     )
// }
// export default DiscountList





import { useNavigate } from "react-router-dom";
import {
    Button,
    Container,
    Row,
    Col,
    Form,
    Table
} from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

function DiscountList() {

    const [discounts, setDiscounts] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();


    // Add Discount
    function goToAddDiscount() {
        navigate("/add/discount");
    }


    // Edit Discount
    function goForEdit(id) {
        navigate("/edit/discount/" + id);
    }


    // Discount Status
    function getDiscountStatus(validFrom, validTo) {

        if (!validFrom || !validTo) {
            return "Inactive";
        }

        let today = new Date();
        today.setHours(0, 0, 0, 0);

        let fromDate = new Date(validFrom);
        fromDate.setHours(0, 0, 0, 0);

        let toDate = new Date(validTo);
        toDate.setHours(0, 0, 0, 0);


        if (today >= fromDate && today <= toDate) {
            return "Active";
        }

        return "Inactive";
    }


    // Get Discounts
    useEffect(() => {

        axios({
            url: apiUrl + "/discounts",
            method: "get"
        })
        .then((res) => {

            setDiscounts(res.data.data || []);

        })
        .catch((err) => {

            console.log(err);
            alert("Unable to load discounts");

        });

    }, []);


    // Search
    const filteredDiscounts = discounts.filter((discount) => {

        const bookName = discount.book?.bookTitle || "";

        return bookName
            .toLowerCase()
            .includes(search.toLowerCase());

    });


    return (

        <Container>

            {/* Search + Add Button */}
            <Row className="mt-3">

                <Col md={8}>

                    <Form>

                        <Form.Group>

                            <Form.Control
                                type="text"
                                placeholder="Type book name to search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                        </Form.Group>

                    </Form>

                </Col>


                <Col md={4} className="text-end">

                    <Button
                        variant="success"
                        onClick={goToAddDiscount}
                    >
                        Add Discount +
                    </Button>

                </Col>

            </Row>


            {/* Heading */}
            <Row>

                <Col>

                    <h3 className="mt-4 mb-3 text-center text-danger">
                        Discounts List
                    </h3>

                </Col>

            </Row>


            {/* Table */}
            <Row>

                <Col>

                    <Table bordered hover responsive>

                        <thead>

                            <tr>

                                <th>Discount Name</th>

                                <th>Discount Type</th>

                                <th>Discount Value</th>

                                <th>Book Name</th>

                                <th>Valid From</th>

                                <th>Valid To</th>

                                <th>Status</th>

                                <th>Actions</th>

                            </tr>

                        </thead>


                        <tbody>

                            {filteredDiscounts.length > 0 ? (

                                filteredDiscounts.map((discount) => {

                                    const status = getDiscountStatus(
                                        discount.validFrom,
                                        discount.validTo
                                    );


                                    return (

                                        <tr key={discount._id}>

                                            <td>
                                                {discount.discountName || "-"}
                                            </td>


                                            <td>
                                                {discount.discountType || "-"}
                                            </td>


                                            <td>
                                                {discount.discountValue ?? 0}
                                            </td>


                                            <td>
                                                {discount.book?.bookTitle ||
                                                    "Book Deleted"}
                                            </td>


                                            <td>
                                                {discount.validFrom
                                                    ? new Date(
                                                        discount.validFrom
                                                    ).toLocaleDateString()
                                                    : "-"}
                                            </td>


                                            <td>
                                                {discount.validTo
                                                    ? new Date(
                                                        discount.validTo
                                                    ).toLocaleDateString()
                                                    : "-"}
                                            </td>


                                            <td
                                                style={{
                                                    color:
                                                        status === "Active"
                                                            ? "green"
                                                            : "red",
                                                    fontWeight: "bold"
                                                }}
                                            >
                                                {status}
                                            </td>


                                            <td>

                                                <Button
                                                    variant="primary"
                                                    size="sm"
                                                    onClick={() =>
                                                        goForEdit(
                                                            discount._id
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </Button>

                                            </td>

                                        </tr>

                                    );

                                })

                            ) : (

                                <tr>

                                    <td
                                        colSpan="8"
                                        className="text-center"
                                    >
                                        No discounts found
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </Table>

                </Col>

            </Row>

        </Container>

    );
}

export default DiscountList;

