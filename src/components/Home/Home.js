import { NavLink } from 'react-router-dom';
import styles from './Home.module.css'
function Home(){
    return (
        <div className={styles.homeContainer}>
            <NavLink className={styles.homeLink} to='/product'>
                <h3>Products</h3>
            </NavLink>
            <NavLink className={styles.homeLink} to='/add-product'>
                <h3>Add a Product</h3>
            </NavLink>
        </div>
    )
}
export default Home;