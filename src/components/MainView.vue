<template>
  <div class="container">
    <WarehouseHeader
      :isAddNewProductVisible="isAddNewProductVisible"
      @add-product="addProduct"
    />
    <section>
      <div class="container my-5">
        <header class="mb-4">
          <h3>{{ isAddNewProductVisible ? "New Product" : "Products" }}</h3>
        </header>
        <div v-if="hasError">
          <h5>Could not retrieve all products. Please try later!</h5>
        </div>
        <div v-if="!isAddNewProductVisible" class="row">
          <WarehouseProduct
            v-for="product in products"
            :key="product.id"
            :pProduct="product"
          />
        </div>
        <div v-else><WarehouseAddProduct /></div>
      </div>
    </section>
    <WarehouseFooter />
  </div>
</template>

<script>
import WarehouseService from "../services/WarehouseService";
import WarehouseHeader from "./WarehouseHeader.vue";
import WarehouseProduct from "./WarehouseProduct.vue";
import WarehouseFooter from "./WarehouseFooter.vue";
import WarehouseAddProduct from "./WarehouseAddProduct.vue";

export default {
  name: "MainView",
  components: {
    WarehouseHeader,
    WarehouseProduct,
    WarehouseFooter,
    WarehouseAddProduct,
  },
  data() {
    return {
      products: [],
      isAddNewProductVisible: false,
      hasError: false,
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const response = await WarehouseService.getAllProducts();

      if (response.data.success) {
        this.products = response.data.results;
        this.hasError = false;
      } else {
        this.hasError = true;
      }
    },
    addProduct() {
      this.isAddNewProductVisible = !this.isAddNewProductVisible;
      this.hasError = false;
    },
  },
};
</script>

<style scoped></style>
