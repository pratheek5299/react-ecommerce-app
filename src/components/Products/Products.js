import { useDispatch, useSelector } from "react-redux";
import { eCommerceActions, eCommerceSelector } from "../../redux/reducers/ecommerceReducer";
import ProductItem from "../ProductItem/ProductItem";
import styles from './Product.module.css';

function Products() {

    const dispatch = useDispatch();
    var {products,sortedProducts, isSorted} = useSelector(eCommerceSelector);

    // console.log('Products before sort', products)
    // const [isSorted, setIsSorted] = useState(false);
    function getProducts() {
        if(products.length === 0){
            fetch('https://my-json-server.typicode.com/pratheek5299/server-ecommerce/products')
        .then(response=> response.json())
        .then((json) => dispatch(eCommerceActions.setInitialState(json)))
        }
    }
    getProducts();
    
    
    return (
        <div className={styles.productsPage}>
            <div className={styles.sortContainer}>
                <p onClick={() =>dispatch(eCommerceActions.sortItems())} className={styles.sort}>Sort by Price</p>
                {isSorted?<img onClick={() => dispatch(eCommerceActions.removeSort())} className={styles.cancel} src="https://cdn-icons-png.flaticon.com/128/399/399274.png" alt="cancel"/> :null}
            </div>
            {isSorted? 
            sortedProducts.map((product)=> <ProductItem key={product.id} product={product}/>)
            :
            products.map((product) => <ProductItem key={product.id} product={product}/>)}
        </div>
    )
}
export default Products;