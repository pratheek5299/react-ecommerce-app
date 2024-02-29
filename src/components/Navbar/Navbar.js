import { NavLink, Outlet } from "react-router-dom";
import styles from './Navbar.module.css'
function Navbar(){
    return (
        <div>
            <div className={styles.navbarContainer}>
                <div className={styles.navlinksContainer}>
                    <h2><i>eCommerce</i></h2>
                    <NavLink className={styles.navLink} style={({isActive})=> isActive? {borderBottom: '4px solid var(--accent)', color: 'var(--primary)' }: undefined}  to='/product'>
                        <h4>Products</h4>
                    </NavLink>
                    <h3><b>|</b></h3>
                    <NavLink className={styles.navLink} style={({isActive})=> isActive? {borderBottom: '4px solid var(--accent)', color: 'var(--primary)'}: undefined} to='/add-product'>
                        <h4>Add a Product</h4>
                    </NavLink>
                </div>
                <div className={styles.personalInfoContainer}>
                    <NavLink to='/cart' className={styles.navLink} style={({isActive})=> isActive? {borderBottom: '4px solid var(--accent)', color: 'var(--primary)'}: undefined}>
                        <p><b>Cart</b></p>
                    </NavLink>
                    <p>John Doe</p>
                    <img src="https://cdn-icons-png.flaticon.com/128/4140/4140037.png" alt="account" />
                </div>
                
            </div>
            
            <Outlet/>
            
        </div>
    )
}
export default Navbar;