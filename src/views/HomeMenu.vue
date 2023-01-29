<script setup>
import ListMenu from "./ListMenu.vue";
import ListSummary from "./ListSummary.vue";
import { ref } from "vue";
let menu = "";

const addMenu = (menu) =>{
  console.log(menu);
  menu = menu
  // addCart.value.push(menu)
  console.log(menu);
};

</script>
<template>
  <div class="display">
    <div class="ListMenu" >
      <ListMenu  @addMenu="addMenu"/>
    </div>
    <div class="ListSummary">
        <ListSummary :addCart="menu" />
    </div>
  </div>
</template>
<style scoped>
.display {
  width: 100%;
  padding-top: 3.25rem;
  padding-left: 5rem;
  display: flex;
  align-items: stretch;
  background: var(--bg);
  height: 100vh;
}
.ListMenu {
  width: 60%;
  /* align-self: center; */
  height: 100%;
}
.ListSummary {
  width: 40%;
  margin-left: auto;
  /* padding-left: 10px; */
  height: 100%;
  /* background: white; */
  margin-top: 3px;
}

</style>