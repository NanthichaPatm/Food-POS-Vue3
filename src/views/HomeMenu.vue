<script setup>
import ListMenu from "./ListMenu.vue";
import ListSummary from "./ListSummary.vue";
import { ref } from "vue";
const addCart = ref([]);

// let addCart = ref();

const addMenu = (menu) =>{
  addCart.value.push(menu)
  console.log(addCart.value)
  // addCart.value = menu
};

const removeMenu = (i) =>{
  console.log(i);
  console.log(addCart.value)
  addCart.value = addCart.value.filter((menu,index) =>{
    if (index !== i){
      return menu;
    }
  });
  console.log(addCart.value)
}

</script>
<template>
  <div class="display">
    <div class="ListMenu" >
      <ListMenu  @addMenu="addMenu"/>
    </div>
    <div class="ListSummary">
        <ListSummary :addCart="addCart" @remove="removeMenu" />
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