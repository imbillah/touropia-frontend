import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import LogIn from "./components/shared/LogIn";
import Header from "./components/shared/Header";
import Home from "./components/shared/Home";
import AboutUs from "./components/pages/AboutUs";
import Footer from "./components/shared/Footer";
import ContactUs from "./components/pages/ContactUs";
import AddService from "./components/private/AddService";
import PrivateRoute from "./components/private/PrivateRoute";
import Booking from "./components/private/Booking";
import MyBooking from "./components/private/MyBooking";
import ManageBooking from "./components/private/ManageBooking";
import Reviews from "./components/shared/Reviews";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path = '/' component={Home}/>
          <Route path="/login" component={LogIn} />
          <Route path ='/about' component={AboutUs}/>
          <Route path ='/contact' component={ContactUs}/>
          <Route path ='/reviews' component={Reviews}/>
          <PrivateRoute path='/booking/:id'>
            <Booking/>
          </PrivateRoute>
          <PrivateRoute path='/mybooking'>
            <MyBooking/>
          </PrivateRoute>
          <PrivateRoute path='/managebooking'>
            <ManageBooking/>
          </PrivateRoute>
          <Route path ='/addservice' component={AddService}/>
        </Switch>
        <Footer/>
      </Router>
    </AuthProvider>
  );
}

export default App;
