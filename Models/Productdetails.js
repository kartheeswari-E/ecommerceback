import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
  {
   productname:{
    type: String,
   },
   productprice:{
    type: String,
   },
   productmrp:{
    type: String,
   },
   productdiscount:{
    type: String,
   },
   Brand:{
    type: String,
   },

ModelName:{
    type: String,
},
NetworkService:{
    type: String,
},
productprovider:{
    type: String,
},

Operating:{
    type: String,
},

Android:{
    type: String,
},

Cellulartechnology:{
    type: String,
} 
 },
  {
    timestamps: true,
  }
);

export default mongoose.model("product", ProductSchema);
