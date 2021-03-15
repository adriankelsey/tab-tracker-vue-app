<template>
  <div class="register">
    <h1>register</h1>
    <input
      name="email"
      type="email"
      placeholder="enter email"
      v-model="email"
    />
    <input
      name="password"
      type="password"
      placeholder="enter password"
      v-model="password"
    />
    <button @click="submit">submit</button>
  </div>
</template>

<script>
import Authentication from '@/services/Authentication'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async submit() {
      try {
        const response = await Authentication.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)

      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
