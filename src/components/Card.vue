<script setup>
import { ref } from "vue";
import MenusList from "../data/MenuList.json";
const Menus = ref(MenusList);

const addTolist = (i) => {
  console.log(i);
  Menus.value = Menus.value.map((menu, index) => {
    if (index === i) {
      console.log(menu);
      return menu;
    }
    return menu;
  });
};
</script>

<template>
  <div class="menu-list">

      <div class="card" @click="addTolist(index)" v-for="(menu, index) in Menus" :key="index">
        <img :src="menu.img" />
        <div class="card-text">
          <p>{{ menu.name }}</p>
          <h5>${{ menu.price }}</h5>
        </div>
      </div>

  </div>
</template>
<style scoped>
.menu-list {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin: 0 15px 0 40px;
  height: 100%;
}
.menu-list .card {
  width: 160px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin: 0 15px 20px 0;
  border-radius: 10px;
  padding-bottom: 5px;
  background: white;
}
.card img {
  width: 100%;
  height: 135px;
  margin: 0;
  border-radius: 10px 10px 0 0;
}
.card .card-text {
  display: flex;
  flex-direction: column;
  padding: auto 5px 0 5px;
  text-align: center;
  background: white;
  margin-top: -7px;
  height: 70px;
  justify-content: end;
}
.card .card-text h5 {
  font-weight: bolder;
  padding-bottom: 5px;
}
.card .card-text p {
  font-size: 13px;
}
.card:hover {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
}
</style>