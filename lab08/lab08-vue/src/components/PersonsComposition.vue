<template>
    <h1>Persons (Composition API)</h1>
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

<script setup>
import { ref, computed } from 'vue'

const name = ref('')
const surname = ref('')
const persons = ref([])

const addPerson = () => {
    persons.value.push({name: name.value, surname: surname.value})
}

const countPersons = computed(() => {
    return persons.value.length
})
</script>

<style>
</style>