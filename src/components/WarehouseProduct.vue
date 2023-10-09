<template>
  <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
    <div class="card w-100 my-2 shadow-2-strong">
      <div class="card-body d-flex flex-column">
        <div class="form-group">
          <h6 v-if="hasError" style="color: red">
            Could not update product info
          </h6>
          <label for="productName">Product Name</label>
          <input
            type="text"
            class="form-control"
            id="productName"
            placeholder="Enter name"
            v-model="product.name"
            :disabled="!canEdit"
          />
        </div>
        <div class="form-group">
          <label for="productDescription">Product Description</label>
          <input
            type="text"
            class="form-control"
            id="productDescription"
            placeholder="Enter description"
            v-model="product.description"
            :disabled="!canEdit"
          />
        </div>
        <div class="form-group">
          <label for="productAmount">Product Amount</label>
          <input
            type="number"
            class="form-control"
            id="productAmount"
            placeholder="Enter amount"
            v-model="product.amount"
            :disabled="!canEdit"
          />
        </div>
        <div class="form-group">
          <label for="productPrice">Product Price</label>
          <input
            type="number"
            class="form-control"
            id="productPrice"
            placeholder="Enter price"
            v-model="product.price"
            :disabled="!canEdit"
          />
        </div>
        <div class="card-footer align-items-end">
          <div class="col-12">
            <button
              type="button"
              class="btn btn-primary"
              @click="canEdit = !canEdit"
              v-if="!canEdit"
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="cancelEdit"
              v-else
            >
              Cancel
            </button>
          </div>
          <div v-if="canEdit" class="col-12 pt-2">
            <button
              type="button"
              class="btn btn-success"
              @click="updateProduct"
            >
              Save
            </button>
          </div>
          <div class="col-12 pt-2">
            <button type="button" class="btn btn-danger" @click="deleteProduct">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WarehouseService from "../services/WarehouseService";

export default {
  name: "WarehouseProduct",
  props: {
    pProduct: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      canEdit: false,
      product: Object.assign({}, this.pProduct),
      productCopy: Object.assign({}, this.pProduct),
      hasError: false,
    };
  },
  methods: {
    async updateProduct() {
      const response = await WarehouseService.updateProduct(this.product);

      if (response.data.success) {
        this.hasError = false;
        location.reload();
      } else {
        this.hasError = true;
      }
    },
    async deleteProduct() {
      const response = await WarehouseService.deleteProduct(this.product.sku);

      if (response.data.success) {
        this.hasError = false;
        location.reload();
      } else {
        this.hasError = true;
      }
    },
    cancelEdit() {
      this.canEdit = !this.canEdit;
      this.product = this.productCopy;
    },
  },
};
</script>
