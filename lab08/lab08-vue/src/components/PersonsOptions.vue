<template>
    <h1>Persons (Options API)</h1>
    <div>
        <form action="">
            <input type="text" v-model="name" placeholder="Name">
            <input type="text" v-model="surname" placeholder="Surname">
            <button @click.prevent="addPerson">Add</button>
        </form>
    </div>
    <div>
        <ul>
            <li v-for="person in persons" :key="person">{{ person.name }} {{ person.surname }}</li>
        </ul>
    </div>
    <div>
        <p>Persons: {{ countPersons }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            surname: '',
            persons: []
        }
    },
    methods: {
        addPerson() {
            this.persons.push({name: this.name, surname: this.surname})
        }
    },
    computed: {
        countPersons() {
            return this.persons.length
        }
    }
}
</script>

<style>
</style>