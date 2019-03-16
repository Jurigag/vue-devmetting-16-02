<template>
  <div>
    <table v-if="items.length">
      <thead>
      <tr>
        <th>Question
          <sort :sort="sort.question" :fieldName="'question'"/>
        </th>
        <th>Category
          <sort :sort="sort.category" :fieldName="'category'"></sort>
        </th>
        <th>Answer
          <sort :sort="sort.answer" :fieldName="'answer'"></sort>
        </th>
        <th>Air Date
          <sort :sort="sort.airdate" :fieldName="'airdate'"></sort>
        </th>
        <th>Difficulty
          <sort :sort="sort.value" :fieldName="'difficulty'"></sort>
        </th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, key) in items" :id="item.id">
        <td>{{item.question}}</td>
        <td>{{item.category.title}}</td>
        <td>{{item.answer}}</td>
        <td>{{item.airdate}}</td>
        <td>{{item.value}}</td>
        <td>
          <button v-on:click="remove(key)">Remove</button>
        </td>
      </tr>
      </tbody>
    </table>
    <h3 v-if="!items.length">No items</h3>
  </div>
</template>

<script>
  import Sort from "@/components/Sort";
  import store from '../stores/clues';

  export default {
    name: 'List',
    components: {
      Sort
    },
    data() {
      return {
        sort: {
          question: '',
          category: '',
          answer: '',
          airdate: '',
          difficulty: ''
        }
      }
    },
    props: {
      items: {
        type: Array
      }
    },
    methods: {
      remove(key) {
        this.$store.dispatch('remove', key);
      },
    }
  }
</script>

<style scoped>
  div {
    margin-bottom: 10px;
  }

  table {
    border-collapse: collapse;
  }

  td, th {
    padding: 5px;
    border: 1px solid;
  }
</style>
