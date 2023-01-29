<script setup>
import { ref, defineProps, watch, computed, onMounted,defineEmits } from "vue";
const {addCart} = defineProps(["addCart"]);
const AddMenus = ref(addCart)

const emit = defineEmits(["remove"])

const ShowInfo = (i) => {
  AddMenus.value = AddMenus.value.map((menu, index) => {
    if (index === i) {
      menu.isShow = !menu.isShow;
    }
    return menu;
  });
};

const removeMenu = (i) =>{
  console.log(i)
  emit('remove',i)
  AddMenus.value = AddMenus.value.filter((menu, index) => {
    if (index !== i) {
       return menu;
    }
  });
};




</script>
<template>
     <div class="container">
      <div class="Add-Meun">
        <div
        v-for="(menu, index) in AddMenus"
        :key="index"
        class="section"
        :style="`border-left:${
          menu.isShow ? '2px solid rgb(20, 211, 20)' : 'translucent'
        } ;`"
      >
        <a class="collapsible" @click="ShowInfo(index)">
          <div>
            <span v-if="menu.isShow" class="icon"
              ><font-awesome-icon icon="fa-solid fa-chevron-down"
            /></span>
            <span v-else class="icon"
              ><font-awesome-icon icon="fa-solid fa-chevron-right"
            /></span>
          </div>

          <span>{{ index + 1 }}</span>
          <div>
            <h4>{{ menu.name }}</h4>
            <p class="note" v-if="menu.note">{{ menu.note }}</p>
          </div>
          <div>
            <div>
              <h4>${{ menu.price }}</h4>
              <p class="note" id="discount" v-if="menu.fullPrice">
                ${{ menu.fullPrice }}
              </p>
            </div>
            <button class="icon" id="removeMenu" @click="removeMenu(index)">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </button>
          </div>
        </a>
        <div class="content" v-if="menu.isShow">
          <span
            ><label for="quantity">Quantity</label> <input type="number" aria-valuemin="1" value="1"
          /></span>
          <span
            ><label for="discount">Discount(%)</label> <input type="number"
          /></span>
        </div>
      </div>
      </div>
      <div class="end-content">
          <button>Add</button>
          <button>Discount</button>
          <button>Coupon Code</button>
          <button>Note</button>
        </div>
     </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.Add-Menu {
  overflow: scroll;
}

.section:nth-child(odd) {
  background: var(--bg);
}
.section {
  border-radius: 10px;
  margin-top: 10px;
}
.section .collapsible {
  display: flex;
  justify-content: start;
  align-items: start;
  margin: 0 10px;
  padding: 5px 5px 0px 5px;
  border-radius: 10px;
}
.section:active {
  border-left: 2px solid rgb(20, 211, 20);
}
.section .collapsible :nth-last-child(1) {
  display: flex;
  margin-left: auto;
  align-self: start;
}
.section .collapsible :nth-last-child(1) div {
  margin-top: 0;
}
.section .collapsible div {
  margin: 5px;
}
.section .collapsible span {
  margin: 5px;
  align-self: start;
}
.icon {
  margin-top: 5px;
  font-size: 10px;
  color: var(--lightGray);
  font-weight: 700;
  cursor: pointer;
}
#removeMenu {
  font-size: 8px;
  background: var(--lightGray);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 2px 4px;
  margin-left: 5px;
}
#removeMenu:hover {
  background: red;
}
.note {
  font-size: 11px;
  color: var(--lightGray);
  margin-top: -5px;
}
#discount {
  text-decoration: line-through;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content span {
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
}
.content span input {
  width: 8rem;
  border: 1.5px solid var(--lightGray);
  border-radius: 5px;
  padding: 5px;
}
.content span input:focus{
    outline: 1.5px solid var(--orange);
}

/* end-content  */
.end-content {
  margin-top: auto;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 10px;
  background-color: rgba(247, 155, 57, 0.329);
  padding: 5px;
  border-radius: 5px;
}
.end-content button {
  background: none;
  color: var(--orange);
  border: none;
  font-weight: 600;
}
.end-content button:nth-child(1) {
  margin-right: auto;
  color: var(--gray);
}
.end-content button:hover {
  cursor: pointer;
  border: 1px solid orange;
  border-radius: 5px;
  background: rgba(166, 166, 166, 0.15);
}
</style>