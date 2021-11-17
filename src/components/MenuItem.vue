<template>
<div v-for="item in simpleMenu" :key="item.name" class="menu-item">
    <img
        class="menu-item__image"
        :src="item.image.source"
        :alt="item.image.alt"
    />
    <div>
        <h3>{{ item.name }}</h3>
        <p>Prix : {{ item.price }}</p>
        <p v-if="item.inStock">En stock</p>
        <p v-else>En rupture de stock</p>
        <div>
            <label for="add-item-quantity"
                >Quantité : {{ item.quantity }}</label
            >
            <input
                v-model.number="item.quantity"
                id="add-item-quantity"
                type="number"
            />
            <button @click="addToCart(item.quantity)">
                Ajouter au panier d'achat
            </button>
            <BaseButton
					@click="updateShoppingCart(quantity)"
					text="Ajouter au panier"
				/>
        </div>
    </div>
</div>
</template>

<script>
import BaseButton from "./BaseButton.vue"
export default {
	name: 'MenuItem',
	props: {simpleMenu : {
        type : Array,
        default : () =>  [
			{
				name: "youyou",
				image: {
					source: "/images/croissant.jpg",
					alt: "Un croissant"
				},
				inStock: true,
				quantity: 1,
        price: 100
			}
		]
    } },
    methods: {
        addToCart(amount){
            this.$emit("addToCart", amount)
        }
    },
    beforeMount(){
        let day = new Date().getDate()
    
        // let menu = [...this.simpleMenu]
        if(day % 2 === 0){
           this.$emit("promotion")
        }        
    }
  
}

</script>

<style  scoped>
.menu-item {
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 30px;
}

.menu-item__image {
  max-width: 300px;
}
</style>
