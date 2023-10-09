import axios from "axios";

const url = "api/warehouse";

class WarehouseService {
  static async addNewProduct(product) {
    try {
      return await axios.post(url + "/product", null, {
        params: { ...product },
      });
    } catch (e) {
      console.error(e);
    }
  }

  static async updateProduct(product) {
    try {
      return await axios.post(url + "/updateProduct", null, {
        params: { ...product },
      });
    } catch (e) {
      console.error(e);
    }
  }

  static async deleteProduct(sku) {
    try {
      return await axios.delete(url + "/product", { params: { sku } });
    } catch (e) {
      console.error(e);
    }
  }

  static async getAllProducts() {
    try {
      return await axios.get(url + "/products");
    } catch (e) {
      console.error(e);
    }
  }
}

export default WarehouseService;
