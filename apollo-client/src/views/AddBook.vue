<template>
  <div class="add-book">
    <h1>Add Book</h1>
    <div v-if="loading">
      <p>Loading</p>
    </div>
    <div v-else>
      <form @submit.prevent="addNewBook">
        <label>
          <span>Title</span>
          <input
            name="bookTitle"
            type="text"
            v-model.trim="title"
          />
        </label>
        <br />
        <label>
          <span>Author</span>
          <input
            name="bookAuthor"
            type="text"
            v-model.trim="author"
          />
        </label>
        <br />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import gql from 'graphql-tag';

  interface MutationResult {
    data: {
      insert_book: {
        author: string;
        title: string;
      };
    };
  }

  interface MutationVariables {
    title: string;
    author: string;
  }

  @Component({})
  export default class AddBook extends Vue {
    private loading = false;

    private title = '';
    private author = '';

    private async addNewBook(event: Event) {
      console.log(this.title, this.author);
      this.loading = true;

      const result = await this.$apollo.mutate<MutationResult, MutationVariables>({
        mutation: gql`mutation($author:String! $title: String!) {
    insert_book(object: {author: $author title: $title}) {
        author
        title
    }
}`,
        variables: {
          title: this.title,
          author: this.author,
        }
      });

      console.log(result);

      this.title = '';
      this.author = '';
      this.$nextTick(() => {
        this.loading = false;
      });
    }
  }

</script>
