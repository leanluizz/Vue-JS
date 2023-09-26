<template>
  <div id="app">
    <h1 class="p-5">Sales</h1>
    <table class="mt-5 table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Qtde</th>
          <th>Data</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="sale in sales" :key="sale.id">
          <td>{{ sale.id }}</td>
          <td>{{ sale.name }}</td>
          <td v-money="'R$'">{{ sale.price }}</td>
          <td>{{ sale.qtde }}</td>
          <td>{{ sale.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import salesData from '@/data/sales.json';

export default {
  name: 'App',
  data() {
    return {
      sales: null,
    };
  },
  directives: {
    money: {
      inserted(el, binding) {
        const amount = parseFloat(el.innerText).toFixed(2);
        el.innerHTML = `${binding.value} ${amount.replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, '$1.')}`;
      },
    },
  },
  methods: {
    getSales() {
      this.sales = salesData;
    },
  },
  mounted() {
    this.getSales();
  },
};
</script>

<style>
body { background-color: rgb(255, 213, 0); }
table { font-weight: bold; }
td { width: 10px; }
#app {
  color: #2c3e50;
  margin-top: 60px;
}
</style>
