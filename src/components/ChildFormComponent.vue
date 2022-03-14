<template>
  <div class="row g-3 justify-content-between" >
    <div class="col-auto">
      <input
          type="text"
          class="form-control"
          placeholder="Name"
          v-model="name"
          @input="changeChildName($event)"
      >
    </div>
    <div class="col-auto">
      <input
          type="number"
             class="form-control"
          placeholder="age"
          v-model="age"
          @input="changeChildAge($event)"
      >
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-3" @click="deleteChild" >Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['changeChildName', 'changeChildAge', 'onDeleteChild'],
  props: {
    child: Object
  },
  methods:{
    changeChildName(){
      this.$emit('changeChildName', this.name, this.itemChild)
    },
    changeChildAge(){
      this.$emit('changeChildAge', this.age,this.itemChild)
    },
    deleteChild(){
      this.$emit('onDeleteChild', this.itemChild.idx)
    }
  },
  data(){
    return {
      name: this.child.name,
      age: this.child.age,
      itemChild: this.child
    }
  }

}
</script>

<style scoped>

</style>