<script>


export default {
	name: 'App'
	
}

</script>

<template>
<div id="nav">
    <router-link to="/">Home </router-link> |
    <router-link to="/about"> About</router-link>
  </div>
  <router-view/>

		

</template>

<style lang="scss" >
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  display:flex;
  justify-content: center;

  a {
	text-decoration: none;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.description {
  max-width: 960px;
  font-size: 1.2rem;
  margin: 0 auto;
}

.footer {
  text-align: center;
  font-style: italic;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu-item {
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 30px;
}

.menu-item__image {
  max-width: 300px;
}
.home{
	position: relative;
}
.shopping-cart {
  position: absolute;
  right: 30px;
  top: 0;
}

</style>