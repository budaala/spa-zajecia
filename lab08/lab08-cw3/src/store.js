import { reactive } from "vue";
import router from "./router/index.js";

export const store = reactive({
    persons: [],
    addPerson(name, surname) {
        console.log(name, surname)
        this.persons.push({ name, surname });
        router.push({ name: "ListOfPersons" });
    },
    countPersons() {
        return this.persons.length;
    }
});