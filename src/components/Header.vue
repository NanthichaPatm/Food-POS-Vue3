<script setup>
import SideNav from "../components/SideNav.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const navigateToWelcome = () => {
  router.push({ name: "welcome" });
};
</script>
<template>
  <div class="container">
    <header>
      <h2 @click="navigateToWelcome">Vue POS</h2>
      <input
        type="text"
        placeholder="Search product..."
      />
      <div class="input-icon">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="input" />
      </div>
      <div class="end-header">
        <button>
          <font-awesome-icon icon="fa-solid fa-rotate" />
        </button>
        <button>
          <font-awesome-icon icon="fa-solid fa-wifi" />
        </button>
        <button>
          <font-awesome-icon icon="fa-solid fa-diagram-successor" />
          Select Table
        </button>
      </div>
    </header>
    <SideNav />
  </div>
</template>
<style scoped>
.container {
  height: 100%;
}
header {
  padding: 0.5rem;
  width: 100%;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}
header h2 {
  font-weight: 900;
  margin-right: 1.5rem;
  cursor:pointer;
}
header .input-icon {
  align-self: center;
  font-size: 20px;
  background-color: var(--bg);
  border-radius: 0 10px 10px 0;
  padding-right: 5px;
  color: var(--gray);
  cursor: pointer;
  padding-right: 10px;
}
header input {
  background-color: var(--bg);
  border: none;
  border-radius: 10px 0 0 10px;
  height: 2rem;
  align-self: center;
  padding-left: 10px;
  width: 35%;
}
header input:focus {
  outline: none;
}
header.input-icon input:focus {
  font-size: 30px;
}
header .end-header {
  margin-left: auto;
  height: 100%;
  align-self: center;
  justify-content: center;
}
header button {
  font-size: 12px;
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
  background-color: var(--bg);
  color: var(--gray);
  margin-left: 10px;
  font-weight: bolder;
}
header button:nth-last-child(1) {
  font-size: 11px;
  width: 6rem;
  height: 2rem;
  background-color: var(--orange);
  color: white;
}
header button:nth-last-child(2) {
  color: rgb(1, 179, 1);
}
</style>