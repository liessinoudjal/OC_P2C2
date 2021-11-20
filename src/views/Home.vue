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
import {mapState, mapGetters, mapActions} from 'vuex'
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
		}
	},
	computed: {
		...mapState(["restaurantName", 'shoppingCart', 'simpleMenu']),
		...mapGetters(["copyright"])
		
		
	},
	methods: {
		...mapActions(["addToShoppingCart"]),
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

