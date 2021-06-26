// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
});

// Categories have many Products
Category.hasMany(Product, {
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
              // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
            // Define an alias for when data is retrieved
  as: 'product_tag1'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tag_product2'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


// onDelete: 'CASCADE' Deletes everything associated with this id