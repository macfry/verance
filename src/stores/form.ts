import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

interface IField {
  id: number;
  value: string;
  vowelsCount: number;
  isHiglighted: boolean;
}

interface IForm {
  maxCount: number;
  query: string;
  fields: IField[];
  lastId: number;
}

export const useFormStore = defineStore('dynamicForm', () => {
  const form = reactive<IForm>({
    maxCount: 10,
    query: '',
    fields: [],
    lastId: 0,
  });

  const defaultField = computed<IField>(() => ({
    id: form.lastId,
    value: '',
    vowelsCount: 0,
    isHiglighted: false,
  }));

  function addNewField() {
    if (form.fields.length >= form.maxCount) return;
    form.fields.push(defaultField.value);
    form.lastId++;
  };

  function createInitialFields(count: number) {
    for (let i = 1; i <= count; i++) {
      addNewField();
    }
  };

  function removeField(id: number) {
    if (form.fields.length <= 1) return;

    form.fields = [...form.fields.filter((item) => item.id !== id)];
  }

  return { form, createInitialFields, addNewField, removeField };
});
