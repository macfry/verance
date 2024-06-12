<script lang="ts">
export default {
    inheritAttrs: false,
};
</script>

<script lang="ts" setup>
const props = defineProps({
    label: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    modelValue: {
        type: String,
        default: '',
    },
    id: {
        type: String,
    },
    highlighted: {
        type: Boolean,
    },
    placeholder: {
        type: String,
        default: '',
    }
});

const emits = defineEmits(['update:modelValue']);

const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emits('update:modelValue', target.value);
};
</script>

<template>
    <div class="form-group">
        <label :for="props.id || `${props.name}Input`" class="form-label" v-if="props.label">
            {{ props.label }}
        </label>

        <input class="form-control" type="text" v-bind="$attrs" :id="props.id || `${props.name}Input`"
            :placeholder="props.placeholder" :name="props.name" :value="props.modelValue" :class="{
                'is-highlighted': highlighted,
            }" @input="onInput" />

    </div>
</template>

<style scoped>
.form-group {
    display: flex;
    flex-wrap: wrap;
}

.form-label {
    padding-top: calc(.375rem + 1px);
    padding-bottom: calc(.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
}

.form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.form-control.is-highlighted {
    background-color: rgb(0, 189, 126, 0.75);
}

@media screen and (min-width: 500px) {
    .form-group {
        flex-wrap: nowrap;
    }

    .form-label {
        flex: 0 0 auto;
        margin-right: 1rem;
    }
}
</style>
