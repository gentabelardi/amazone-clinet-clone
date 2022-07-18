import create from 'zustand'
import Cookies from 'js-cookie';


const useStore = create((set) => ({
    cart: {
        cartItems: Cookies.get('cartItems') ? JSON.parse(Cookies.get('cartItems')) : [],
    }, showSuggestions: false,
    dropdown: false,
    setShowSuggestions: (show: boolean) => set(state => ({showSuggestions: show})),
    setShowDropdown: (show: boolean) => set(state => ({dropdown: show})),
    search: "",
    addToCart: (payload: any) => set((state: any) => {
        const existItem = state.cart.cartItems
        const cartItems = existItem
            ? state.cart.cartItems.map((item: any) => item.title === existItem.title ? payload : item)
            : [...state.cart.cartItems, payload];
        Cookies.set('cartItems', JSON.stringify(cartItems));
    }),
    deleteToCart: (payload: any) => set((state: any) => {
        const cartItems = state.cart.cartItems.filter(
            (item: any) => item.id !== payload.id
        );
        Cookies.set('cartItems', JSON.stringify(cartItems));
    })
}))

export default useStore