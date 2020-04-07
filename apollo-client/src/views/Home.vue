<template>
  <div class="home">
    <h1>View All Books</h1>
    <table>
      <thead>
        <tr>
          <td>Author</td>
          <td>Title</td>
          <td>Details</td>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.index" v-for="item in books.map((book, index)=>({book, index}))">
          <td>{{item.book.author}}</td>
          <td>{{item.book.title}}</td>
          <td>
            <router-link :to="{name: 'Details', params:{title:item.book.title}}">
              View
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import gql from 'graphql-tag';

  @Component({
    apollo: {
      books: gql`query {books{author title}}`,
    }
  })
  export default class Home extends Vue {

  }

</script>
