<template>
  <div class="details">
    <h1>Book Details</h1>
    <p>Author: {{ book.author }}</p>
    <p>Title: {{ book.title }}</p>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import gql from 'graphql-tag';

  @Component({
    apollo: {
      book: {
        query: gql`query($title:String!) {book(title:$title){title author}}`,
        variables() {
          return {
            title: this.$route.params.title,
          }
        }
      },
    }
  })
  export default class Details extends Vue {

  }

</script>
