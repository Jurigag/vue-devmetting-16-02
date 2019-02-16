<template>
  <form @submit.prevent="addNew()">
    <div class="form-element">
      <label for="message">Type name:</label>
      <input id="message" name="message" type="text" v-model="form.name" v-validate="'required|min:3'"/>
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
      <input id="amount" name="amount" type="number" v-model="form.amount"
             v-validate="'required|integer|min_value:1'"/>
      <span v-show="errors.has('amount')" class="error">
                    {{ errors.first('amount') }}
                </span>
    </div>

    <button>Add new</button>
  </form>
</template>

<script>
  export default {
    name: 'Add',
    data() {
      return {
        lastId: 3,
        form: {
          name: null,
          email: null,
          amount: null
        },
      }
    },
    methods: {
      addNew() {
        this.$validator.validateAll().then(result => {
          if (!result) {
            return;
          }
          this.lastId++;
          this.$emit('add', {
            id: this.lastId,
            ...this.form
          });
          this.$validator.reset();
          this.form = {
            name: null,
            email: null,
            amount: null
          }
        });
      },
    }
  }
</script>
