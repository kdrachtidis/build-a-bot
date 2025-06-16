<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img class="logo" src="./assets/build-a-bot-logo.png" alt="logo" />Build a bot
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <!--<HomePage msg="You did it!" />-->
    <RobotBuilder />
  </main>
</template>

<script>
// import HomePage from './home/HomePage.vue'
import RobotBuilder from './build/RobotBuilder.vue';

export default {
  name: 'App',
  components: {
    // HomePage,
    RobotBuilder,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}

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
  padding: 30px;
  display: flex;
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
</style>
