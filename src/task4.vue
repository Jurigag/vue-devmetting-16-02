<template>
  <section id="app">
    <h1>{{title}}</h1>
    <list :items="sharedState.clues.items"></list>
    <add @add="onItemAdd"></add>
  </section>
</template>

<script>
  import Add from "@/components/Add";
  import List from "@/components/List";
  import clues from '@/stores/clues';
  import categories from '@/stores/categories';

  export default {
    components: {
      Add,
      List
    },
    name: 'task4',
    data() {
      return {
        title: 'Task 1',
        lastId: 3,
        sharedState: {
          clues: clues.state,
          categories: categories.state
        }
      }
    },
    async created() {
      clues.fetch();
      categories.fetch();
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  section {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: disc;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .error {
    color: #ff0000;
  }
</style>
