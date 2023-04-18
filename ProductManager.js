class ProductManager {
  constructor(products = []) {
    this.products = products;
    this.nextId = 1;
  }

  addProduct({ title, description, price, thumbnail, code, stock }) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error('All fields are mandatory');
      return;
    }

    const existingProduct = this.products.find((product) => product.code === code);
    if (existingProduct) {
      console.error('A product with that code already exists');
      return;
    }

    const newProduct = { id: this.nextId++, title, description, price, thumbnail, code, stock };
    this.products.push(newProduct);

    console.log('Product added successfully');
    return newProduct;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      console.error('Not found');
      return;
    }

    return product;
  }
};

const productManager = new ProductManager();