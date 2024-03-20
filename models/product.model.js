const mongoose = require("mongoose");

// schema:
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },

  {
    timestamps: true,
    //will have two more extra fields - createdAt and updatedAt
  }
);

// allow mongodb to use the schema
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;


