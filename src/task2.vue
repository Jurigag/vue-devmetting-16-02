<template>
  <section id="app">
    <h1>{{title}}</h1>
    <ul>
      <li v-for="(item, key) in items" :id="item.id">
        {{item.name}} - {{item.email}} - Amount: {{item.amount}}
        <button v-on:click="remove(key)">Remove</button>
      </li>
    </ul>
    <h3 v-if="!items.length">No items</h3>
    <form @submit.prevent="addNew()">
      <div class="form-element">
        <label for="message">Type name:</label>
        <input id="message" name="message" type="text" v-model="form.message" v-validate="'required|min:3'"/>
        <span v-show="errors.has('message')" class="error">
        {{ errors.first('message') }}
      </span>
      </div>
      <div class="form-element">
        <label for="email">Email:</label>
        <input id="email" name="email" type="email" v-model="form.email" v-validate="'required|email'"/>
        <span v-show="errors.has('email')" class="error">
          {{ errors.first('email') }}
        </span>
      </div>
      <div class="form-element">
        <label for="amount">Amount:</label>
        <input id="amount" name="amount" type="number" v-model="form.amount" v-validate="'required|integer|min_value:1'"/>
        <span v-show="errors.has('amount')" class="error">
          {{ errors.first('amount') }}
        </span>
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
        form: {
          message: null,
          email: null,
          amount: null
        },
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
      addNew() {
        this.$validator.validateAll().then(result => {
          if (!result) {
            return;
          }
          this.lastId++;
          this.items.push({
            id: this.lastId,
            ...this.form
          });
          this.$validator.reset();
          this.form = {
            message: null,
            email: null,
            amount: null
          }
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
