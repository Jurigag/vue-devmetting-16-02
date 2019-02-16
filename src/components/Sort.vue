<template>
  <div>
  <a v-show="!sort" v-on:click="changeSort(fieldName, 'asc')"><font-awesome-icon icon="sort"/></a>
  <a v-show="sort === 'asc'" v-on:click="changeSort(fieldName, 'desc')"><font-awesome-icon icon="sort-up"/></a>
  <a v-show="sort === 'desc'" v-on:click="changeSort(fieldName, '')"><font-awesome-icon icon="sort-down"/></a>
  </div>
</template>

<script>
  export default {
    name: 'Sort',
    props: {
      sort: {
        type: String
      },
      fieldName: {
        type: String
      }
    },
    methods: {
      changeSort(key, type) {
        console.log(key);
        console.log(type);
        this.$emit('change-sort', key, type);
      }
    }
  }
</script>
