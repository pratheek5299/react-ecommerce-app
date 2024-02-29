import { useDispatch, useSelector } from 'react-redux';
import styles from './Cart.module.css'
import { eCommerceSelector, eCommerceActions } from '../../redux/reducers/ecommerceReducer';
function Cart () {
    const { cart} = useSelector(eCommerceSelector);
    const dispatch = useDispatch();
    // const {title, price, image, description, rating}= cart;
    console.log('from cart page cart: ', cart);
    const handleRemoveFromCart = async (id) => {
        let response = await fetch('https://my-json-server.typicode.com/pratheek5299/server-ecommerce/cart/' + id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        console.log('response for delete from cart', response);
        // let json = await response.json();
        dispatch(eCommerceActions.removeFromCart(id))
    }
    return (
        <div >
            {cart.map((item, index) => (
                <div className={styles.cartWrapper} key={index}>
                    <div className={styles.productItemContainer}>
                        <div className={styles.imageContainer}>
                            <img className={styles.image} src={item.image} alt={item.title} />
                        </div>
                        <div className={styles.titleContainer}>
                            <h4>{item.title}</h4>
                            <div><span>Rs </span><span>{item.price}</span></div>
                            <div className={styles.ratingContainer}>
                                <span>{item.rating}</span> &nbsp;
                                <img className={styles.reviewStar} src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png' alt='star' />                    
                            </div>
                        </div>
                        <div className={styles.descriptionContainer}>
                            <p>{item.description}</p>
                            <div className={styles.actionImages}>
                                <button onClick={() => handleRemoveFromCart(item.id)} className={styles.removeFromCart}>
                                    Remove from Cart
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
            ))}
        </div>
    )
}
export default Cart;