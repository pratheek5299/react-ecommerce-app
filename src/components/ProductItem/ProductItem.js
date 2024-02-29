import { useState } from 'react';
import styles from './ProductItem.module.css'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { eCommerceActions } from '../../redux/reducers/ecommerceReducer';
function ProductItem({product}){
    const dispatch = useDispatch();    
    // console.log('Product inside the items', product);
    let Ptitle = product.title;
    let Prating = product.rating;
    let Pdescription = product.description;
    let Pprice = product.price;
    let image= product.image;
    const [edit , setEdit] = useState(false);
    const [title, setTitle] = useState(Ptitle);
    const [price, setPrice] = useState(Pprice);
    const [description, setDescription] = useState(Pdescription);
    const [rating, setRating] = useState(Prating);
    // console.log(title)

    const deleteProduct = async () => {
        const response = await fetch('https://my-json-server.typicode.com/pratheek5299/server-ecommerce/products/' + product.id, {
            method: 'DELETE'
        });
        console.log('response for delete', response);
        dispatch(eCommerceActions.delete(product.id))
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        const obj = {
            id: product.id,
            title,
            rating,
            price,
            description
        }
        fetch('https://my-json-server.typicode.com/pratheek5299/server-ecommerce/products/' + product.id, {
            method: 'PUT',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(response=> response.json())
        .then(json=> dispatch(eCommerceActions.put(json)))
        setEdit(false);
    }
    
    return(
        <div className={styles.productItemWrapper}>
            {!edit ? 
            <div className={styles.productItemContainer}>
                <div className={styles.imageContainer}>
                    <NavLink to={'/product/'+product.id}>
                        <img className={styles.image} src={image} alt={title} />
                    </NavLink>
                </div>
                <div className={styles.titleContainer}>
                    <NavLink to={'/product/'+product.id}><h4>{title}</h4></NavLink>
                    <div><span>Rs </span><span>{price}</span></div>
                    <div className={styles.ratingContainer}>
                        <span>{rating}</span> &nbsp;
                        <img className={styles.reviewStar} src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png' alt='star' />                    
                    </div>
                </div>
                <div className={styles.descriptionContainer}>
                    <p>{description}</p>
                    <div className={styles.actionImages}>
                        <img onClick={(e)=> setEdit(true)} src='https://cdn-icons-png.flaticon.com/128/227/227104.png' alt='edit' />
                        <img onClick={deleteProduct} src='https://cdn-icons-png.flaticon.com/128/542/542724.png' alt='delete' />
                    </div>
                </div>
            </div>
            :
            <form onSubmit={handleSumbit} className={styles.productItemContainer}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={image} alt={title} />
                </div>
                <div className={styles.titleContainer}>
                    {/* <h4>{title}</h4> */}
                    <input placeholder='Title' onChange={(e) => setTitle(e.target.value)} className={styles.inputTitle} value={title}/>
                    <div><span>Rs </span>{/*<span>{price}</span> */}<input onChange={(e)=> setPrice(e.target.value)} className={styles.inputPrice} value={price}/></div>
                    <div className={styles.ratingContainer}>
                        {/*<span>{rating}</span> */}<input onChange={(e)=> setRating(e.target.value)} className={styles.inputRating} value={rating} /> &nbsp;
                        <img  className={styles.reviewStar} src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png' alt='star' />                    
                    </div>
                </div>
                <div className={styles.descriptionContainer}>
                    {/* <p>{description}</p> */}
                    <textarea onChange={(e)=> setDescription(e.target.value)} rows='8' value={description} />
                    <div className={styles.actionImages}>
                        <p className={styles.cancelForm} onClick={()=> setEdit(false)}>Cancel</p>
                        <button type='submit' className={styles.saveForm}>Save</button>
                    </div>
                </div>
            </form>
            }
        </div>
    )
}
export default ProductItem;