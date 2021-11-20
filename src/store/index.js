import { createStore } from 'vuex'

export default createStore({
  state: {
    shoppingCart: 0,
    restaurantName: "La belle vue",
    simpleMenu: [
      {
        name: "Croissant",
        image: {
          source: "/images/croissant.jpg",
          alt: "Un croissant"
        },
        inStock: true,
        quantity: 1,
        price: 1.30
          },
          {
            name: "Baguette de pain",
            image: {
              source: "/images/french-baguette.jpeg",
              alt: "Quatre baguettes de pain"
            },
            inStock: true,
            quantity: 1,
        price: 0.95
          },
          {
            name: "Éclair",
            image: {
              source: "/images/eclair.jpg",
              alt: "Éclair au chocolat"
            },
            inStock: false,
            quantity: 1,
            price: 1.95
          }
      ]
  },
  mutations: {
    ADD_TO_SHOPPING_CART(state, payload) {
			console.log(payload)
			state.shoppingCart += payload.amount
		},
  },
  actions: {
    addToShoppingCart(context, amount){
      context.commit("ADD_TO_SHOPPING_CART", amount)
    }
  },
  modules: {
  },
  getters: {
    copyright(state) {
			const currentYear = new Date().getFullYear()

			return `Copyright ${state.restaurantName} ${currentYear}`
		}
  }
})
