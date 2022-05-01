import mongoose from "mongoose";

mongoose.connect("mongodb+srv://davidneves:193728@cluster0.aggie.mongodb.net/livraria?");

const db = mongoose.connection;

export default db;