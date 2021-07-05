import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import "./app.css"
import Home from "./pages/home/Home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";

function App() {
  return (
    <Router>
      <TopBar/>
      <div className="container">
        <SideBar/>
        <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/users">
        <UserList/>
        </Route>
        <Route path="/user/:userId">
        <User/>
        </Route>
        <Route path="/newUser">
        <NewUser/>
        </Route>
        <Route path="/products">
        <ProductList/>
        </Route>
        <Route path="/product/:productId">
        <Product/>
        </Route>
        <Route path="/newproduct">
        <NewUser/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
