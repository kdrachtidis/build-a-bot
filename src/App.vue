<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }" active-class="home-active">
            <img class="logo" src="./assets/build-a-bot-logo.png" alt="logo" />Build a bot
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Build' }">Build </router-link>
        </li>
         <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Search' }">Search </router-link>
        </li>
        <li>User: {{ userName }}</li>
      </ul>
    </nav>
  </header>
  <main>
    <!--<HomePage msg="You did it!" />-->
    <router-view />
  </main>
</template>

<script setup>
import { ref, provide } from 'vue';

const userName = ref('Jim');
provide('userName', userName);
</script>

<style global>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style scoped>
main {
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  width: 1400px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1460px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.nav-item {
  display: inline-block;
  font-size: 22px;
  padding: 5px 10px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}

.router-link-active {
  color: white;
}
.home-active {
  color: #fff;
  text-shadow: 2px 2px black;
}
</style>
