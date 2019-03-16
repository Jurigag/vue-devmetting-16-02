<template>
  <form @submit.prevent="addNew()">
    <div class="form-element">
      <label for="question">Question:</label>
      <input id="question" name="question" type="text" v-model="form.question" v-validate="'required|min:3'"/>
      <span v-show="errors.has('question')" class="error">
                    {{ errors.first('question') }}
                </span>
    </div>
    <div class="form-element">
      <label for="category">Category:</label>l
      <input id="category" name="category" type="text" v-model="form.category.title" v-validate="'required|min:3'"/>
      <span v-show="errors.has('category')" class="error">
                    {{ errors.first('category') }}
                </span>
    </div>
    <div class="form-element">
      <label for="airdate">Airdate:</label>
      <input id="airdate" name="airdate" type="text" v-model="form.airdate"
             v-validate="'required|min:3'"/>
      <span v-show="errors.has('airdate')" class="error">
                    {{ errors.first('airdate') }}
                </span>
    </div>
    <div class="form-element">
      <label for="answer">Answer:</label>
      <input id="answer" name="answer" type="text" v-model="form.answer"
             v-validate="'required|min:3'"/>
      <span v-show="errors.has('answer')" class="error">
                    {{ errors.first('answer') }}
                </span>
    </div>
    <div class="form-element">
      <label for="difficulty">Answer:</label>
      <input id="difficulty" name="difficulty" type="text" v-model="form.value"
             v-validate="'required|min:3'"/>
      <span v-show="errors.has('difficulty')" class="error">
                    {{ errors.first('difficulty') }}
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
          question: null,
          category: {
            title:null
          },
          airdate: null,
          answer: null,
          value: null
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
          this.$store.dispatch('add', this.form);
          this.$validator.reset();
          this.form = {
            question: null,
            category: {
              title:null
            },
            airdate: null,
            answer: null,
            value: null
          }
        });
      },
    }
  }
</script>
