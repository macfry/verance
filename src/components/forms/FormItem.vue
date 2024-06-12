<template>
  <div class="form-item">
    <div class="form-container">
      <div class="input-box">
        <slot name="formItem"></slot>
      </div>

      <div class="vowels">
        <slot name="vowels"></slot>
      </div>
    </div>

    <i class="icon-box">
      <slot name="icon"></slot>
    </i>
  </div>
</template>

<style scoped>
.form-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 1rem;
  gap: 0.5rem;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-box {
  flex: 1;
}

.vowels {
  display: flex;
  align-items: center;
}

.icon-box {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

@media screen and (min-width: 500px) {
  .form-container {
    flex-direction: row;
  }
}
</style>
