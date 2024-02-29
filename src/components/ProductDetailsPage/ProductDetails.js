import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { eCommerceActions, eCommerceSelector } from "../../redux/reducers/ecommerceReducer";
import styles from './ProductDetails.module.css';
function ProductDetails () {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {products, cart} = useSelector(eCommerceSelector);
    let isPresentInCart = false;
    
    const product = products.find((item,index) => item.id === parseInt(params.id))
    cart.map((item) => {
        if(item.id === product.id){
            isPresentInCart = true
        }
        return item
    });
    // console.log(product); 
    console.log('cart', cart);
    const handleAddToCart = async () => {
        let response = await fetch('https://my-json-server.typicode.com/pratheek5299/server-ecommerce/cart',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        let json = await response.json();
        dispatch(eCommerceActions.addToCart(json))
    }

    const handleRemoveFromCart = async () => {
        let response = await fetch('https://my-json-server.typicode.com/pratheek5299/server-ecommerce/cart/' + product.id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        console.log('response for delete from cart', response);
        // let json = await response.json();
        dispatch(eCommerceActions.removeFromCart(product.id))
    }

    return (
        <div className={styles.detailsPageWrapper}>
            <div className={styles.detailsContainer}>
                <div className={styles.prodBack}>
                    <button onClick={()=>navigate(-1) }>Back</button>
                </div>
                <div className={styles.prodImageContainer}>
                    <img src={product.image} alt={product.title} />
                </div>
                <div className={styles.prodInfo}>
                    <h2 className={styles.prodTitle}>{product.title}</h2>
                    <p className={styles.prodDescription}>{product.description}</p>
                    <div className={styles.prodWorthContainer}>
                        <div className={styles.prodWorthDetails}>
                            <p>Rs: {product.price}/-</p>
                            <div className={styles.prodRating}>
                                <p>Rating: {product.rating}</p>
                                <img  className={styles.reviewStar} src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png' alt='star' />                    
                            </div>
                        </div>
                        <div className={styles.prodCartContainer}>
                            {!isPresentInCart ? 
                            <button onClick={handleAddToCart} className={styles.addToCart}>
                                Add to Cart
                            </button>
                            :
                            <button onClick={handleRemoveFromCart} className={styles.removeFromCart}>
                                Remove from Cart
                            </button>
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default ProductDetails;