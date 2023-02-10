<template>
  <Teleport to="body">
    <dialog open>
      <slot></slot>
    </dialog>
  </Teleport>
</template>

<style scoped>
dialog {
  margin: 0;
  position: fixed;
  top: 20vh;
  left: 50%;
  width: 40%;
}
</style>