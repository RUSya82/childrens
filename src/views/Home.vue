<template>
  <div class="container">
    <div class="card mt-4" v-for="(user, index) in getUsers" :key="user.idx">
      <table class="table" >
        <thead>
        <tr class="table-active">
          <th scope="col">#</th>
          <th scope="col">Full Name</th>
          <th scope="col">Last</th>
        </tr>
        </thead>
        <tbody>
        <tr >
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ getUserFullName(user) }}</td>
          <td>{{ user.age }}</td>
        </tr>
        <tr v-for="(child, indexOfChild) in user.children" :key="child.idx">
          <td >{{ indexOfChild + 1 }}</td>
          <td>{{ child.name }}</td>
          <td>{{ child.age }}</td>
        </tr>
        <!--      <tr v-for="child in user.children"></tr>-->
        </tbody>
      </table>

    </div>
  </div>

</template>

<script>


export default {
  name: 'Home',
  components: {},
  mounted() {
    console.log(this.getUsers)

  },
  computed: {
    getUsers() {
      return this.$store.getters['getUsers'];
    },
  },
  methods: {
    getUserFullName(user) {
      let {patronymic, name, surname} = user;
      return [surname, name, patronymic].join(' ')
    }
  }
}
</script>
