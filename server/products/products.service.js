const db = require("../database-mysql/index");
const addProductService = async (productData) => {
  return new Promise(async (resolve, reject) => {
    const query = "INSERT INTO products (title,image,description,price,quantity,cat_id) VALUES (?)";
    const values = [
      productData.title,
      productData.image,
      productData.description,
      productData.price,
      productData.quantity,
      productData.cat_id
    ];
    db.query(query, [values], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.affectedRows === 0) {
          resolve(null);
        } else {
          resolve(results);
        }
      }
    });
  });
};
const updateProductService = async (idProduct,fieldsToUpdate) => {
  return new Promise(async (resolve, reject) => {
    const query = "UPDATE products SET ? WHERE idProduct = ?";
    db.query(query, [fieldsToUpdate, idProduct], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.changedRows === 0) {
          resolve(null);
        } else {
          resolve(results);
        }
      }
    });
  });
};
const getProductByIdCategoryService = async (id) => {
  return new Promise(async (resolve, reject) => {
    const query = "SELECT * FROM products WHERE cat_id = ?";
    db.query(query, [id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length === 0) {
          resolve(null);
        } else {
          resolve([results]);
        }
      }
    });
  });
};

const getAllProductService = async () => {
  return new Promise(async (resolve, reject) => {
    const query = "SELECT * FROM products";
    db.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length === 0) {
          resolve(null);
        } else {
          resolve([results]);
        }
      }
    });
  });
};
const deleteProductByIdService = async (id) => {
  return new Promise(async (resolve, reject) => {
    const query = "DELETE products WHERE id = ?";
    db.query(query, [id], (error, result) => {
      if (error) {
        reject(error);
      } else {
        if (result.changedRows === 0) {
          resolve(null);
        } else {
          resolve(result);
        }
      }
    });
  });
};

module.exports = {
  addProductService,
  updateProductService,
  getProductByIdCategoryService,
  getAllProductService,
  deleteProductByIdService,
};
