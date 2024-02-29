import { useState } from "react";
import { useDispatch } from "react-redux";
import { eCommerceActions } from "../../redux/reducers/ecommerceReducer";
import styles from './AddProduct.module.css';

function AddProduct() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0);
    const [image, setImage] = useState('');
    const dispatch = useDispatch();
    // creating a post api call
    const postData = async (obj) =>{
        const response = await fetch('https://my-json-server.typicode.com/pratheek5299/server-ecommerce/products', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        const json = await response.json();
        dispatch(eCommerceActions.post(json))        
    }

    // when form is submitted execute this function 
    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            title,
            price,
            rating,
            description,
            image
        }
        console.log('form data', obj)
        postData(obj);
        setTitle('');
        setPrice(0);
        setRating(0);
        setDescription('');
        setImage('');
    }

    return (
        <div className={styles.addProductContainer}>
            <form className={styles.addProductForm} onSubmit={handleSubmit} id='addProductForm' style={{display: 'flex', flexDirection: 'column'}}>
                <label htmlFor="title">Name</label>
                <input 
                type="text" 
                name="title"
                placeholder="Enter the name of the product."
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                
                <label htmlFor="price">Price</label>
                <input 
                type="number" 
                name="price"
                placeholder="Enter the price of the product."
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />

                <label htmlFor="description">Description</label>
                <input 
                type="text" 
                name="description"
                placeholder="Enter the description of the product."
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                
                <label htmlFor="rating">Rating</label>
                <input 
                type="number" 
                name="rating"
                placeholder="Enter the rating of the product."
                id="image"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                />

                <label htmlFor="image">Image</label>
                <input 
                type="text" 
                name="image"
                placeholder="Enter the image link of the product."
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
                {/* <br/> */}
                <button>Add</button>
            </form>

        </div>
    )
}
export default AddProduct;