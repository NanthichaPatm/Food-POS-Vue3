<script setup>
import { ref, defineProps } from "vue";
const { menu } = defineProps(["menu"]);
const Cart = ref([]);

const addToCart = (menu) => {
  // console.log(menu);
  // Cart.value.push(menu);
  // console.log(Cart.value);
  emit("addMenu", menu);
};
</script>

<template>
  <div class="card">
    <img :src="menu.img" />
    <div class="card-text">
      <p>{{ menu.name }}</p>
      <h5>${{ menu.price }}</h5>
      <button class="addTo">
        <font-awesome-icon icon="fa-solid fa-cart-plus" />
      </button>
    </div>
  </div>
</template>
<style scoped>
.menu-list .card {
  width: 165px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin: 0 15px 20px 0;
  border-radius: 10px;
  padding-bottom: 5px;
  background: white;
  overflow: hidden;
}
.card img {
  width: 100%;
  height: 150px;
  margin: 0;
}
.card .card-text {
  display: flex;
  flex-direction: column;
  padding: auto 5px 0 5px;
  text-align: center;
  background: white;
  height: 100px;
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

.addTo {
  width: fit-content;
  align-self: end;
  margin: 0px 5px;
  border-radius: 50%;
  padding: 6px;
  border: none;
  text-align: center;
  font-size: 18px;
  color: var(--orange);
  background: none;
}
.addTo:hover {
  color: var(--gray);
  cursor: pointer;
}
</style>