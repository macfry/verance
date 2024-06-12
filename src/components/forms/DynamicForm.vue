<script setup lang="ts">
import { onMounted } from 'vue';

import FormItem from '@/components/forms/FormItem.vue';
import InputText from '@/components/forms/InputText.vue';
import SearchBox from '@/components/forms/SearchBox.vue';
import IconTrash from '@/components/icons/IconTrash.vue';
import IconPlus from '@/components/icons/IconPlus.vue';

import { useFormStore } from '@/stores/form';
import { storeToRefs } from 'pinia';

const store = useFormStore();
const { form } = storeToRefs(store)
const { createInitialFields, removeField, addNewField } = store;

const isQueryIncluded = (text: string) => {
    if (!text || !form.value.query) return false;

    return text.toLowerCase().includes(form.value.query.toLowerCase())
};

const vowelCountCheck = (str: string) => {
    const vowels = /[aeiou]/gi;
    const matches = str.match(vowels);

    return matches ? matches.length : 0
};

onMounted(() => {
    createInitialFields(3);
});
</script>

<template>
    <form class="">
        <div>
            <SearchBox v-model="form.query" />
        </div>

        <FormItem v-for="(field, index) in form.fields" :key="field.id">
            <template #formItem>
                <InputText class="mb-3" :label="`Field ${index + 1}`" :name="`field-${field.id}`"
                    :highlighted="isQueryIncluded(field.value)" v-model="field.value" />
            </template>

            <template #icon v-if="store.form.fields.length > 1">
                <button :onClick="() => removeField(field.id)" type="button" class="remove-field"
                    :disabled="form.fields.length >= 10">
                    <IconTrash />
                </button>
            </template>

            <template #vowels>
                (vowels: {{ vowelCountCheck(field.value) }})
            </template>
        </FormItem>

        <button :onClick="addNewField" type="button" class="add-field">
            <span>New Field</span>

            <IconPlus />

        </button>
    </form>
</template>

<style scoped>
.remove-field {
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 2rem;
}

.remove-field svg {
    fill: rgb(246, 52, 52);
}

.remove-field,
.add-field {
    cursor: pointer;
}

.add-field {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1em;
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 4px;
    background-color: rgb(55, 110, 238);
    margin-top: 2rem;
    color: white;
}

.add-field span {
    margin-right: 0.5rem;
}

.add-field svg {
    width: 1rem;
    fill: white;
}
</style>