<script setup>
import Card from '../components/Card.vue';
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
        <Card class="card-menu"/>
    </div>
</template>
<style scoped>

.card-menu{
  overflow: auto;
  height: 80vh;
}
.type-list{
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