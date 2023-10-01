<template>
  <div id="app">
    <h1 class="p-5">Sales</h1>
    <details class="mt-5 p-5">
      <summary>Products</summary>
    <table class="mt-5 table" v-if="salesByProduct">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(sale, index) in salesByProduct" :key="sale">
          <td>#{{ index + 1 }}</td>
          <td>{{ sale.name }}</td>
          <td v-money="'R$'">{{ sale.value }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>+</td>
          <td>Total</td>
          <td v-money="'R$'">{{ calculateTotal(salesByProduct) }}</td>
        </tr>
      </tfoot>
    </table>
  </details>
  <details class="mt-5 p-5">
    <summary>Purchase Report</summary>
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
  </details>
  </div>
</template>

<script>
import salesData from '@/data/sales.json';

export default {
  name: 'App',
  data() {
    return {
      sales: '',
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
    calculateTotal(sales){
      if(!sales) return 0
      return sales.reduce((total, sale) => total + sale.value, 0)
    }
  },
  computed: {
  salesByProduct() {
    if (!this.sales) return null;

    const salesByProduct = this.sales.reduce((grouped, sale) => {
      const { name, price, qtde } = sale;
      if (!Object.prototype.hasOwnProperty.call(grouped, name)) {
        grouped[name] = {
          name,
          value: price * qtde,
        };
      } else {
        grouped[name].value += price * qtde;
      }
      return grouped;
    }, {});
    return Object.values(salesByProduct);
  },
},
  mounted() {
    this.getSales();
  },
};
</script>

<style>
body { 
background-color: #FAD961;
background-image: linear-gradient(to left, #FAD961 0%,#FAD961 ,#e6bd29 100%);
}
table { font-weight: bold; }
td { width: 10px; }
summary{ font-size: 50px; }
#app {
  color: #2c3e50;
  margin-top: 60px;
}
</style>
