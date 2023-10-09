<template>
  <div>
    <header
      class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
    >
      <span
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none fs-4"
        >Warehouse System</span
      >
      <div class="float-left">
        <button
          type="button"
          class="btn btn-primary"
          style="margin: 5px"
          @click="addProduct"
        >
          {{ isAddNewProductVisible ? "View products" : "Add product" }}
        </button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "WarehouseHeader",
  props: {
    isAddNewProductVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    addProduct() {
      this.$emit("add-product");
    },
  },
};
</script>

<style scoped></style>
