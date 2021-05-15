<template>
  <div class="loading-screen">
    <div class="percentLogin"></div>
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.loading-screen {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #c7d7ef;
  z-index: 1000;
  @include flex-center;
  .lds-ring {
    transform: scale(2);
  }
}
</style>
