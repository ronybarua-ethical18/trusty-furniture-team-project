import * as actionTypes from './shoppingTypes'
import arrival1 from '../../images/arrivals1.png'
import arrival2 from '../../images/arrivals2.png'
import arrival3 from '../../images/arrivals3.png'
import arrival4 from '../../images/arrivals4.png'
import arrival5 from '../../images/arrivals5.png'
import arrival6 from '../../images/arrivals6.png'
import arrival7 from '../../images/arrivals7.png'
import arrival8 from '../../images/arrivals8.png'
const INITIAL_STATE = {
    products: [
        {
            id:  1,
            productName: 'Breakfast Sandwich',
            ProductDesc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque eligendi qui, quia alias quam et adipisci ullam dolor expedita in sequi quae, distinctio, veritatis aut natus sint quas? Animi?',
            price: 120,
            productImg: arrival1
        },
        {
            id:  2,
            productName: 'Baked Chicken',
            ProductDesc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque eligendi qui, quia alias quam et adipisci ullam dolor expedita in sequi quae, distinctio, veritatis aut natus sint quas? Animi?',
            price: 80,
            productImg: arrival2,
        },
        {
            id:  3,
            productName: 'Eggs Benedicts',
            ProductDesc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque eligendi qui, quia alias quam et adipisci ullam dolor expedita in sequi quae, distinctio, veritatis aut natus sint quas? Animi?',
            price: 70,
            productImg: arrival3
        },
        {
            id:  4,
            productName: 'Toast Croissant Fried Egg',
            ProductDesc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque eligendi qui, quia alias quam et adipisci ullam dolor expedita in sequi quae, distinctio, veritatis aut natus sint quas? Animi?',
            price: 30,
            productImg: arrival4
        },
        {
            id:  5,
            productName: 'Healthy Meal Plan',
            ProductDesc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque eligendi qui, quia alias quam et adipisci ullam dolor expedita in sequi quae, distinctio, veritatis aut natus sint quas? Animi?',
            price: 50,
            productImg: arrival5
        },
        {
            id:  6,
            productName: 'Fried Chicken Bento',
            ProductDesc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque eligendi qui, quia alias quam et adipisci ullam dolor expedita in sequi quae, distinctio, veritatis aut natus sint quas? Animi?',
            price: 60,
            productImg: arrival6
        },
        {
            id:  7,
            productName: 'Tarragon Rubbed Salmon',
            ProductDesc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque eligendi qui, quia alias quam et adipisci ullam dolor expedita in sequi quae, distinctio, veritatis aut natus sint quas? Animi?',
            price: 70,
            productImg: arrival7
            
        },{
            id:  8,
            productName: 'Indian Lunch',
            ProductDesc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque eligendi qui, quia alias quam et adipisci ullam dolor expedita in sequi quae, distinctio, veritatis aut natus sint quas? Animi?',
            price: 80,
            productImg: arrival8
        }
    ],
    cart: [],
    currentItem: null
}
const shoppingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(product => product.id === action.payload.id)
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item) : [...state.cart, {
                    ...item, qty: 1
                }]
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty:+action.payload.qty} : item)
            }
        case actionTypes.LOAD_CURRENT_ITEM  :
            return {
                ...state,
                currentItem: action.payload
            }
        default:
            return state;
    }
}
export default shoppingReducer;