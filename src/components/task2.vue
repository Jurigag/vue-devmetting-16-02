<template>
  <section id="app">
    <h1>{{title}}</h1>
    <ul>
      <li v-for="(item, key) in items" :id="item.id">
        {{item.name}}
        <button v-on:click="remove(key)">Remove</button>
      </li>
    </ul>
    <h3 v-if="!items.length">No items</h3>
    <form @submit.prevent="addNew()">
      <div class="form-element">
        <label for="message">Type name:</label>
        <input id="message" name="message" type="text" v-model="message" v-validate="'required|min:3'"/>
        <span v-show="errors.has('message')" class="error">
        {{errors.first('message')}}
      </span>
      </div>
      <div class="form-element">
        <label for="email">Email:</label>
        <input id="email" name="email" type="email" v-model="email" v-validate="'email'"/>
        <span v-show="errors.has('email')"
      </div>
      <button>Add new</button>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'task2',
    data() {
      return {
        title: 'Task 1',
        message: null,
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
      addNew(item) {
        this.$validator.validateAll().then(result => {
          if (!result) {
            return;
          }
          this.lastId++;
          if (this.message) {
            item = this.message;
          }
          this.items.push({
            id: this.lastId,
            name: item
          });
          this.$validator.reset();
        });
      },
      remove(key) {
        if (this.items[key]) {
          this.items.splice(key, 1);
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  section {
    width:500px;
    margin-left:auto;
    margin-right:auto;
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
