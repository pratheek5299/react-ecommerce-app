import { configureStore } from "@reduxjs/toolkit"
import { eCommerceReducer } from "./reducers/ecommerceReducer"
// store for reducers
const store = configureStore({
    reducer: {eCommerceReducer}
})


export default store