<script setup>
import { ref, defineProps, defineEmits } from "vue";
import CardAddMenu from "../components/Add-Menu.vue";
const emit = defineEmits(['remove']);
const { addCart } = defineProps(["addCart"]);

const removeMenu = (i)=>{
  console.log(i)
  emit('remove',i);
}

</script>
<template>
  <div class="container">
    <div class="header">
      <button>
        <font-awesome-icon icon="fa-solid fa-plus" />
        Add Customer
      </button>
      <button><font-awesome-icon icon="fa-solid fa-plus" /></button>
      <button>
        <font-awesome-icon icon="fa-solid fa-rectangle-list" />
      </button>
      <button><font-awesome-icon icon="fa-solid fa-rotate-right" /></button>
    </div>
    <div class="AddMenu">
      <CardAddMenu :addCart="addCart" @remove="removeMenu" />
    </div>
    <div class="totalPrice">
      <div>
        <p>Subtotal</p>
        <h4>$200.00</h4>
      </div>
      <div>
        <p>Tax</p>
        <h4>$200.00</h4>
      </div>
      <div>
        <p>Payable Amount</p>
        <h4>$245.00</h4>
      </div>
      <div>
        <button>
          <i class="fa-solid fa-circle-pause"></i>
          Hold Order
        </button>
        <button>
          <i class="fa-solid fa-circle-right"></i>
          Proceed
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* all */

.container {
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

/* Add customer */
.header {
  margin-top: 3px;
  display: flex;
  align-items: center;
  justify-content: end;
  background: white;
  padding-bottom: 15px;
}
.header button:nth-child(1) {
  margin-right: auto;
  width: fit-content;
}
.header button {
  margin: 15px 5px 0 5px;
  padding-top: 9px;
  padding-bottom: 9px;
  border-radius: 5px;
  border: none;
  width: 35px;
  font-weight: bold;
  cursor: pointer;
}
.AddMenu {
  margin-top: 5px;
  background: white;
  height: 65vh;
}
.totalPrice {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  border-left: 1px solid rgba(122, 122, 122, 0.25);
  padding-left: 10px;
}
.totalPrice div {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 12px;
}
.totalPrice div h4 {
  font-weight: 700;
  padding-right: 2rem;
}
.totalPrice div:nth-last-child(2) {
  font-size: 15px;
  font-weight: 900;
  margin-bottom: 1rem;
}
.totalPrice div button {
  border: none;
  background: orange;
  padding: 10px;
  font-size: 12px;
  border-radius: 5px;
  width: 50%;
  margin: 0 5px;
  margin-right: auto;
  color: white;
  font-weight: bolder;
}
.totalPrice div button:nth-last-child(1) {
  background: rgb(39, 177, 39);
}
</style>