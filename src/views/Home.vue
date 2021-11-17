<template>
  <div class="home">
    <h1>{{ restaurantName }}</h1>
			<p class="description">
				Bienvenue dans notre café {{ restaurantName }}! Nous sommes réputés pour
				notre pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le
				matin ou avec un goûter réconfortant. Mais attention, vous verrez qu'il
				est difficile de s'arrêter.
			</p>
			<section class="menu">
				<h2>Menu </h2>
        <p v-if="isPromotion">Journée de promotion : -10 %</p>

	
				<MenuItem :simpleMenu="simpleMenu" @addToCart="addToShoppingCart" @promotion="handlePromotion"/>
					
				
			</section>

			<aside class="shopping-cart">
				<h2>Panier d'achat : {{ shoppingCart }} articles</h2>
			</aside>

			<h2>Contactez nous</h2>
			<p>Adresse : {{ address }}</p>
			<p>Téléphone : {{ phone }}</p>
			<p>Email : {{ email }}</p>
			<p>Horaires :</p>
			<ul>
				<li>L-V: 06:00 à 16:00</li>
				<li>Samedi: 07:00 à 14:00</li>
				<li>Dimanche: 07:00 à 12:00</li>
			</ul>
			<footer class="footer">
				<p>{{ copyright }}</p>
			</footer>
  </div>
</template>

<script>
import MenuItem from '../components/MenuItem.vue'
// @ is an alias to /src


export default {
  name: 'Home',
 components: {
		MenuItem
	},
	data: () => {
		return  {
    isPromotion: false,
	address: "18 avenue du Beurre, Paris, France",
	email: "hello@cafewithavue.bakery",
	phone: "01 88 88 88 88",
	restaurantName: "La belle vue",
	shoppingCart: 0,
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
	}
		
	},
	computed: {
		copyright() {
			const currentYear = new Date().getFullYear()

			return `Copyright ${this.restaurantName} ${currentYear}`
		}
	},
	methods: {
		addToShoppingCart(amount) {

			this.shoppingCart += amount
		},
    handlePromotion(){
      let menus = [...this.simpleMenu]
      for(let menu of menus){
        menu.price -= (menu.price * 0.1).toFixed(2)
      }
      this.simpleMenu = menus

      this.isPromotion = true
    }
	}
}
</script>


<style scoped>
.description {
  max-width: 960px;
  font-size: 1.2rem;
  margin: 0 auto;
}
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer {
  text-align: center;
  font-style: italic;
}

</style>

