<template>
  <div id="app">
    <div id="nav">
      <router-link
        :to="{name: 'Home'}"
      >
        Home
      </router-link>
      |
      <router-link
        :to="{name: 'Add Book'}"
      >
        Add Book
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({})
  export default class App extends Vue {

  }
</script>