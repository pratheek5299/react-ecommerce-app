import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    cart: [],
    isSorted: false,
    sortedProducts: []
}

const eCommerceSlice = createSlice({
    name: 'ecommerce',
    initialState: initialState,
    reducers: {
        // after the get api call set products state
        setInitialState: (state, action) => {
            state.products = [...action.payload];
        },
        // post a new product.
        post: (state, action) => {
            alert('POST REQUEST MADE')
            console.log('post api request made', action.payload)
            state.products = [...state.products, action.payload];
        },
        // delete the product
        delete: (state, action) => {
            alert("PRODUCT DELETED")
            console.log('Product deleted');
            let temp = state.products.filter((product) => product.id !== action.payload);
            state.products = [...temp];
        },
        // makin the changes made to the product data and modifying them
        put: (state, action) => {
            alert('PUT REQUEST MADE\n DATA SAVED')
            console.log('Put api called', action.payload);
            state.products.map((item) => {
                if(item.id === action.payload.id) {
                    item.title = action.payload.title;
                    item.price = action.payload.price;
                    item.description = action.payload.description;
                    item.rating = action.payload.rating;
                }
                return item
            })
        },
        //add to the cart
        addToCart: (state, action) => {
            alert("PRODUCT ADDED TO CART")
            console.log('Added item to cart', action.payload);
            state.cart = [...state.cart, action.payload]
        },
        // remove the item from the cart.
        removeFromCart: (state, action) => {
            alert("PRODUCT REMOVED FROM CART")
            console.log('Remove from cart', action.payload);
            let temp = state.cart.filter((item) => item.id !== action.payload);
            state.cart = [...temp];
        },
        // sort the items according to the price
        sortItems: (state, action) => {
            state.isSorted = true;
            let temp = state.products
            console.log('temp',temp)
            temp = temp.slice().sort((a, b) => a.price < b.price ? 1: -1)
            state.sortedProducts = [...temp]
            // console.log('inside elements',temp);
        },
        // remove the sort from the products display.
        removeSort: (state, action) => {
            state.isSorted = false;
        }
    }
});

export const eCommerceReducer = eCommerceSlice.reducer;
export const eCommerceActions = eCommerceSlice.actions;
export const eCommerceSelector = (state) => state.eCommerceReducer;