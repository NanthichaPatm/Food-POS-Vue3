<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="container">
    <nav class="sidenav">
      <a href="#" class="nav-menu">
        <router-link to="/manage/home"
        >
        <span> <font-awesome-icon icon="fa-solid fa-house" /> </span>
          Home</router-link
      ></a
      >
      <a href="#" class="nav-menu">
        <router-link to="/manage/customers"
        >
        <span> <font-awesome-icon icon="fa-solid fa-user" /></span>
        Customers</router-link
      ></a
      >
      <a href="#" class="nav-menu">
        <span>
          <font-awesome-icon icon="fa-solid fa-table-cells-large" />
        </span>
        Table</a
      >
      <a href="#" class="nav-menu">
        <span><font-awesome-icon icon="fa-solid fa-sack-dollar" /> </span>
        Cashier</a
      >
      <a href="#" class="nav-menu">
        <span><font-awesome-icon icon="fa-solid fa-basket-shopping" /></span>
        Orders</a
      >
      <a href="#" class="nav-menu">
        <span> <font-awesome-icon icon="fa-solid fa-chart-line" /></span>
        Report</a
      >
      <a href="#" class="nav-menu">
        <span> <font-awesome-icon icon="fa-solid fa-gear" /></span>
        Setting
      </a>
      <div class="end-nav">
        <a href="#" id="user-img"
          ><img
            src="https://cdn.icon-icons.com/icons2/2630/PNG/512/avatar_girl_woman_glasses_blonde_hair_icon_159132.png"
        /></a>
        <a href="#" class="nav-menu">
          <span>
            <font-awesome-icon icon="fa-solid fa-right-from-bracket"
          /></span>
          Logout
        </a>
      </div>
    </nav>
    <RouterView />
  </div>
</template>
<style scoped>
/* SideNav */
.container {
  height: 100vh;
}
.sidenav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5rem;
  height: 100%;
  /* padding-top: 4rem; */
  font-size: 12px;
  position: fixed;
  padding-top: 3.5rem;
  z-index: 1;
  background: white;
}
.sidenav .end-nav a img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 3px 10px var(--lightGray);
  background: white;
}
.nav-menu{
  background: white;
}
 a {
  text-decoration: none;
  width: 100%;
  text-align: center;
  color: var(--gray);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
nav a span {
  display: block;
  font-size: 20px;
}
.sidenav .end-nav {
  margin-top: auto;
  width: 100%;
  align-items: center;
}
.sidenav .end-nav a {
  align-items: center;
  display: block;
  margin-bottom: 5px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.nav-menu:hover {
  border: 2px solid orange;
  border-radius: 10%;
  background: rgb(225, 223, 223);
}
nav a img:hover {
  border: 2px solid orange;
  border-radius: 50%;
}
</style>