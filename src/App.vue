<template>
  <div id="app">
    <header>
      ユーザ名：{{ user.name }}
    </header>
    <button class="button is-primary" @click="rename">名前変更</button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        firstName: 'タロウ',
        lastName: 'ヤマダ'
      }
    },
    computed: {
      fullName() {
        return `${this.lastName} ${this.firstName}`
      },
      user() {
        return this.$store.state.user
      }
      // firstName: 'タロウ',
      // lastName: 'ヤマダ'
    },
    methods: {
      rename() {
        this.$store.commit('setName', 'みかんちゃん')
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
