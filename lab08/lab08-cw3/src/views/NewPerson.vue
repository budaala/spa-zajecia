<template>
    <h1>{{ title }}</h1>
    <form action="">
        <input type="text" v-model="name" placeholder="Name">
        <input type="text" v-model="surname" placeholder="Surname">
        <button @click.prevent="store.addPerson(name, surname)">Add</button>
    </form>

</template>

<script setup>
import { ref } from 'vue'
import {store } from '../store.js'

defineProps({ title: String })

const name = ref('')
const surname = ref('')

</script>