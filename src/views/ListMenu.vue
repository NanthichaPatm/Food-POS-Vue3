<script setup>
import { ref, defineEmits } from "vue";
import Card from "../components/Card.vue";
import MenusList from "../data/MenuList.json";

const Menus = ref(MenusList);
const emit = defineEmits(['addMenu']);

const addToCart = (menu) => {
  console.log(menu);
  emit('addMenu', menu);
};
</script>

<template>
  <div>
    <div class="type-list">
      <nav>
        <a href="#">Starters</a>
        <a href="#">Breakfast</a>
        <a href="#">Lunch</a>
        <a href="#">Supper</a>
        <a href="#">Deserts</a>
        <a href="#">Beverages</a>
      </nav>
    </div>
    <div class="menu-list">
      <Card
        class="card-menu"
        v-for="(menu, index) in Menus"
        :key="index"
        :menu="menu"
        @click="addToCart(menu)"
      />
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
  overflow: auto;
  height: 80vh;
}
.type-list {
  margin-top: 0;
  height: 100%;
}
.type-list nav {
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: white;
  text-align: center;
  margin: 15px 2rem 30px 2rem;
  /* padding-top: 5px;
  padding-bottom: 5px; */
  border-radius: 5px;
}

.type-list nav a {
  margin: 5px 5px;
  padding: 5px;
  text-decoration: none;
  font-size: 14px;
  color: var(--gray);
  font-weight: 700;
  overflow: hidden;
}
.type-list nav a:hover {
  border: 2px solid orange;
  border-radius: 5px;
  color: var(--orange);
  background: rgba(166, 166, 166, 0.15);
}
.type-list nav a:focus {
  border: 2px solid orange;
  border-radius: 5px;
  color: var(--orange);
  background: rgba(166, 166, 166, 0.15);
}
</style>