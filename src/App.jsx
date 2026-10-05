// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import Sidebar from './components/Sidebar'

// import WelcomePage from './pages/WelcomePage/WelcomePage'

// import BookList from './pages/books/BookList'
// import AddBook from './pages/books/AddBook'
// import BookDetails from './pages/books/BookDetails'
// import BookPageForEdit from './pages/books/BookPageForEdit'

// import AdminLogin from './pages/LoginSignupPages/AdminLogin'

// import CreateDiscount from './pages/Discount/CreateDiscount'
// import DiscountList from './pages/Discount/DiscountList'
// import DiscountForEdit from './pages/Discount/DiscountForEdit'

// import CreateAvailability from './pages/Availability/CreateAvailability'
// import AvailabilityList from './pages/Availability/AvailabilityList'
// import EditAvailability from './pages/Availability/EditAvailability'

// import UserList from './pages/users/UserList'

// import Footer from './components/Footer'


// function App() {

//   return (

//     <BrowserRouter>

//       {/* Admin Login Route */}
//       <Routes>
//         <Route path="/" element={<AdminLogin />} />
//       </Routes>


//       <div className="d-flex">

//         <Sidebar />

//         <main
//           style={{
//             flexGrow: 1,
//             padding: '20px'
//           }}
//         >

//           <Routes>

//             {/* Dashboard */}
//             <Route
//               path="/admin/dashboard"
//               element={<WelcomePage />}
//             />


//             {/* Welcome Page */}
//             <Route
//               path="/"
//               element={<WelcomePage />}
//             />


//             {/* Books */}
//             <Route
//               path="/books"
//               element={<BookList />}
//             />

//             <Route
//               path="/add/book"
//               element={<AddBook />}
//             />

//             <Route
//               path="/book/:id"
//               element={<BookDetails />}
//             />

//             <Route
//               path="/edit/book/:id"
//               element={<BookPageForEdit />}
//             />


//             {/* Discounts */}
//             <Route
//               path="/discounts"
//               element={<DiscountList />}
//             />

//             <Route
//               path="/add/discount"
//               element={<CreateDiscount />}
//             />

//             <Route
//               path="/edit/discount/:id"
//               element={<DiscountForEdit />}
//             />


//             {/* Availability */}
//             <Route
//               path="/availability"
//               element={<AvailabilityList />}
//             />

//             <Route
//               path="/add/availability"
//               element={<CreateAvailability />}
//             />

//             <Route
//               path="/edit/availability/:id"
//               element={<EditAvailability />}
//             />


//             {/* Users */}
//             <Route
//               path="/users"
//               element={<UserList />}
//             />

//           </Routes>

//         </main>

//       </div>


//       {/* Footer Routes ke bahar rahega */}
//       <Footer />

//     </BrowserRouter>

//   )
// }

// export default App


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'

import WelcomePage from './pages/WelcomePage/WelcomePage'

import BookList from './pages/books/BookList'
import AddBook from './pages/books/AddBook'
import BookDetails from './pages/books/BookDetails'
import BookPageForEdit from './pages/books/BookPageForEdit'

import AdminLogin from './pages/LoginSignupPages/AdminLogin'

import CreateDiscount from './pages/Discount/CreateDiscount'
import DiscountList from './pages/Discount/DiscountList'
import DiscountForEdit from './pages/Discount/DiscountForEdit'

import CreateAvailability from './pages/Availability/CreateAvailability'
import AvailabilityList from './pages/Availability/AvailabilityList'
import EditAvailability from './pages/Availability/EditAvailability'
import AvailabilityDetails from './pages/Availability/AvailabilityDetails';

import UserList from './pages/users/UserList'

import Footer from './components/Footer'


function App() {

  return (

    <BrowserRouter>

      {/* Admin Login Route */}
      <Routes>
        <Route path="/" element={<AdminLogin />} />
      </Routes>


      <div className="d-flex">

        <Sidebar />

        <main
          style={{
            flexGrow: 1,
            padding: '20px'
          }}
        >

          <Routes>

            {/* Dashboard */}
            <Route
              path="/admin/dashboard"
              element={<WelcomePage />}
            />


            {/* Welcome Page */}
            <Route
              path="/"
              element={<WelcomePage />}
            />


            {/* Books */}
            <Route
              path="/books"
              element={<BookList />}
            />

            <Route
              path="/add/book"
              element={<AddBook />}
            />

            <Route
              path="/book/:id"
              element={<BookDetails />}
            />

            <Route
              path="/edit/book/:id"
              element={<BookPageForEdit />}
            />


            {/* Discounts */}
            <Route
              path="/discounts"
              element={<DiscountList />}
            />

            <Route
              path="/add/discount"
              element={<CreateDiscount />}
            />

            <Route
              path="/edit/discount/:id"
              element={<DiscountForEdit />}
            />


            {/* Availability */}
            <Route
              path="/availability"
              element={<AvailabilityList />}
            />

            <Route
              path="/add/availability"
              element={<CreateAvailability />}
            />

            <Route
              path="/edit/availability/:id"
              element={<EditAvailability />}
            />
            <Route
              path="/availability/:id"
              element={<AvailabilityDetails />}
            />


            {/* Users */}
            <Route
              path="/users"
              element={<UserList />}
            />

          </Routes>

        </main>

      </div>


      {/* Footer Routes ke bahar rahega */}
      <Footer />


    </BrowserRouter>

  )
}

export default App


