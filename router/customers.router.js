import express, { request, response } from "express";

import { sql } from "../database/index";
import { getOrders, putOrders } from "../controller/orders/orders.controller";

export const customersRouter = express.Router();

customersRouter.get("/", async (_request, response) => {
  const customers = await sql`SELECT * FROM customers`;

  response.status(200).json({
    data: customers,
  });
});

customersRouter.post("/", async (request, response) => {
  const { firstName, lastName, email, address } = request.body;

  try {
    await sql`INSERT INTO customers (firstName, lastName, email, address)
            VALUES (${firstName}, ${lastName}, ${email}, ${address})`;

    response.status(200).json({ customer: request.body });
  } catch (error) {
    response.status(400).json({ message: "aldaa garlaa" });
  }
});
customersRouter.put("/", async (request, response) => {
  const { firstName, lastName, email, address, customerID } = request.body;
  try {
    await sql`UPDATE customers
    SET firstName = ${firstName}, lastName = ${lastName}, email=${email}, address=${address}
    WHERE customerId=${customerID}`;
    response.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);

    response.status(400).json({ message: "bad request" });
  }
});
customersRouter.delete("/", async (request, response) => {
  const { customerID } = request.body;
  response.status(200).json({ messege: "success" });
  try {
    await sql`DELETE FROM customers
  WHERE customerId=${customerID}
  `;
  } catch (error) {
    console.log(error);

    response.status(400).json({ messege: "bad request" });
  }
});

// customersRouter.get("/orders", async (request, response) => {
//   try {
//     const orders = await getOrders();
//     response.status(200).json({ messege: "success", orders });
//   } catch (error) {
//     console.log(error);
//     response.status(400).json({ message: "bad request" });
//   }
// });
// customersRouter.post("/order", async (request, response) => {
//   try {
//     const orders = await putOrders();
//     response.status(200).json({ message: "success", orders });
//   } catch (error) {
//     response.status(400).json({ message: "bad request" });
//   }
// });
