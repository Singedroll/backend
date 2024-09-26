import { response } from "express";
import { sql } from "../../database";

export const getOrders = async (request, response) => {
  const orders = await sql`SELECT * FROM orders`;
  return orders;
};

export const putOrders = async (request, response) => {
  const orders =
    await sql`INSERT INTO orders (orderid, customersid, productid, quantity)
  return orders;
};
