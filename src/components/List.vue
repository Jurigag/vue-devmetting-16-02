<template>
  <div>
    <table v-if="items.length">
      <thead>
      <tr>
        <th>Name<sort :sort="sort.name" :fieldName="'name'" @change-sort="onChangeSort"/></th>
        <th>Email<sort :sort="sort.email" :fieldName="'email'" @change-sort="onChangeSort"></sort></th>
        <th>Amount<sort :sort="sort.amount" :fieldName="'amount'" @change-sort="onChangeSort"></sort></th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, key) in items" :id="item.id">
        <td>{{item.name}}</td>
        <td>{{item.email}}</td>
        <td>{{item.amount}}</td>
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

  export default {
    name: 'List',
    components: {
      Sort
    },
    data() {
      return {
        sort: {
          name: '',
          amount: '',
          email: ''
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
        this.$emit('remove', key);
      },
      onChangeSort(key, type) {
        this.sort[key] = type;
        console.log(key);
        this.$emit('change-sort', key, type);
      }
    }
  }
</script>

<style scoped>
  div {
    margin-bottom:10px;
  }

  table {
    border-collapse: collapse;
  }

  td,th {
    padding:5px;
    border:1px solid;
  }
</style>
