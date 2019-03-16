<template>
  <section id="app">
    <h1>{{title}}</h1>
    <list :items="clues"></list>
    <add></add>
  </section>
</template>

<script>
  import Add from "@/components/Add";
  import List from "@/components/List";
  import categories from '@/stores/categories';

  export default {
    components: {
      Add,
      List
    },
    name: 'task5',
    data() {
      return {
        title: 'Task 1',
        lastId: 3,
        sharedState: {
          categories: categories.state
        }
      }
    },
    created() {
      this.$store.dispatch('get');
    },
    computed: {
      clues() {
        return this.$store.state.items;
      }
    }
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
