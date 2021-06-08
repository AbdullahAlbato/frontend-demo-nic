import './App.css';
import {React , useState , useEffect} from 'react';
import Navbar from './components/Navbar';
import Grid from '@material-ui/core/Grid';
import Sidebar from './components/Siderbar';
import {  makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Products from './components/Products/Products'
const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: '6px',
  },
}));


const App = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const handleMenuToogle = () => {
    setSidebarIsOpen(!sidebarIsOpen);
    console.log("sidebarIsOpen",sidebarIsOpen)
  };
  const handleAddToCart = async (productId, quantity) => {
    // const item = await commerce.cart.add(productId, quantity);

    // setCart(item.cart);
  };

  const classes = useStyles();
  // const headers = {
  //   'Content-Type': 'application/json',
  //   'Authorization': '$2y$10$tAajJXlhdqDfGi8CppFN3.KWnofLUVE03gknOyEDv9OBAcypda9MO'
  // }
  

  const fetchProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products", {
      // headers: headers
    })
    console.log("API data",data)
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
    <Navbar  toggleSidebar={handleMenuToogle} />
      <Grid container className={classes.marginTop}>
        { sidebarIsOpen &&
        <Grid item xs={3}>
          <Sidebar/>
        </Grid>
        }
        <Grid  item xs={sidebarIsOpen? 9:12}>
        <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
