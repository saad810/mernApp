import mongoose from "mongoose";
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js'
import User from './models/userSchema.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        // inerting users
        const createdUsers = await User.insertMany(users);
        // get admin user to nisert products becoz admin can only manage products
        const adminUser = createdUsers[0]._id;
        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser }; //will give all data of user + will add a admin user as user to match db schema
        });
        await Product.insertMany(sampleProducts);
        console.log('Data Imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.log('Error Occured'.red.inverse)
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        console.log("Data Destroyed Successfully".red.bgBlue);
        process.exit(1);
    } catch (error) {
        console.log('Error is deleting data'.red.inverse)
        process.exit(1);
    }
}

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();

}