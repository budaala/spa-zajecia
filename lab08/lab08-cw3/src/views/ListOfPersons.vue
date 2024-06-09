<template>
    <div>
    <h1>{{ title }}</h1>
        <ul>
            <li v-for="person in persons" :key="person">{{ person.name }} {{ person.surname }}</li>
        </ul>
    </div>
    <div>
        <p>Persons: {{ count }}</p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { store } from '../store.js'

defineProps({ title: String })

const persons = ref(store.persons)
const count = computed(() => {
    return store.persons.length
})

</script>