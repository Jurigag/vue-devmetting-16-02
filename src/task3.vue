<template>
  <section id="app">
    <h1>{{title}}</h1>
    <list :items="items" @remove="onItemRemove" @change-sort="onChangeSort"></list>
    <add @add="onItemAdd"></add>
  </section>
</template>

<script>
  import Add from "@/components/Add";
  import List from "@/components/List";
  import _ from 'lodash';

  export default {
    components: {
      Add,
      List
    },
    name: 'task3',
    data() {
      return {
        title: 'Task 1',
        lastId: 3,
        items: [
          {
            id: 1,
            name: 'Test',
            email: 'test@test.pl',
            amount: 5
          },
          {
            id: 2,
            name: 'Test 2',
            email: 'asd@test.pl',
            amount: 10,
          },
          {
            id: 3,
            name: 'Test 3',
            email: 'xyz@test.pl',
            amount: 15
          }
        ]
      }
    },
    methods: {
      onItemAdd(item) {
        this.items.push(item);
      },
      onItemRemove(key) {
        this.items.splice(key, 1);
      },
      onChangeSort(key, type) {
        this.items = _.orderBy(this.items, key, type);
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
