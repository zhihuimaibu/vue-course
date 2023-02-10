<template>
  <section>
    <user-data @set-user-data="addPerson"></user-data>
    <active-user :username = 'person.name' :age = 'person.age'></active-user>
  </section>
</template>

<script>
export default {
  data() {
    return {
      person: {
        
      }
    }
  },
  methods: {
    addPerson(name, age) {
      this.person.name = name;
      this.person.age = age;
    }
  }
}
</script>