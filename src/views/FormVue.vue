<template>
  <div class="container justify-content-center d-flex pt-4">
    <div class="col-lg-6">
      <form>
        <div class="input-group m-3">
          <span class="input-group-text">First and last name</span>
          <input type="text" aria-label="First name" class="form-control" v-model.trim="user.name"

          >
          <input type="text" aria-label="Last name" class="form-control" v-model.trim="user.surname">
        </div>
        <div class="input-group m-3">
          <span class="input-group-text">patronymic and age</span>
          <input type="text" aria-label="First name" class="form-control" v-model.trim="user.patronymic">
          <input type="number" aria-label="Last name" class="form-control" v-model.number="user.age">
        </div>
        <div class="col-12 d-flex justify-content-between align-items-center m-3 mt-5">
          <div class="col-6">
            <span>Дети (макс5)</span>
          </div>
          <div class="col-6">
            <button class="btn btn-secondary" @click.prevent="addChildren" :disabled="maxChild">+ Добавить ребёнка</button>
          </div>
        </div>
        <div v-if="hasChildren">
          <div class="row g-3 justify-content-between" v-for="child in children" :key="child.idx">
            <div class="col-auto">
              <input type="text" class="form-control" placeholder="Name" v-model="child.name">
            </div>
            <div class="col-auto">
              <input type="number" class="form-control" placeholder="age" v-model="child.age">
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3" @click.prevent="deleteChild(child.idx)">Delete</button>
            </div>
          </div>
        </div>


        <button type="submit" class="btn btn-primary" @click.prevent="submitForm">Submit</button>
        <div class="col-12 text-danger error-message m-4"><span v-if="errorMessage.length">{{errorMessage}}</span></div>

      </form>
    </div>

  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid'

export default {

  data() {
    return {
      user: {
        name: '',
        surname: '',
        patronymic: '',
        age: 23,
        children: []
      },
      errorMessage: ''
    }
  },
  computed: {
    children: {
      set(val) {
        if(!this.maxChild){
          this.user.children.push(val);
        }

      },
      get() {
        return this.user.children;
      }

    },
    hasChildren() {
      return this.children.length
    },
    maxChild(){
      return this.children.length === 5;
    }
  },
  methods: {
    addChildren() {
      this.children = {
        idx: uuidv4(),
        name: '',
        age: ''
      }
    },
    deleteChild(idx){
      let index = this.children.findIndex(item => item.idx = idx);
      this.user.children.splice(index, 1);
    },
    submitForm() {
      if(this.isValidForm()){
        this.user.idx = uuidv4();
        this.$store.dispatch('setOneUser', this.user)
        this.user = {
          name: '',
              surname: '',
              patronymic: '',
              age: 23,
              children: []
        }
      } else {
        this.errorMessage = "Заполните форму полностью";
        setTimeout(() => {
          this.errorMessage = ''
        }, 3000)
      }

    },
    isValidForm(){
      let valid = true;
      if(!this.user.name.length || !this.user.surname.length || !this.user.patronymic.length){
        valid = false;
      }
      if(this.children.find(item => item.name.length === 0 || item.age === 0)){
        valid = false;
      }
      return valid
    }
  }

}
</script>

<style scoped>
.fail-input {
  border: 2px solid #db1711;
}
.error-message{
  font-size: 12px;
  color: #db1711;
}
</style>