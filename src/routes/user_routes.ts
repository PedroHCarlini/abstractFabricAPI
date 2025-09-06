import { Router } from "express";

export const userRoutes = Router();

userRoutes.post("/users", (req, res) => {
  console.log("User created");
});
userRoutes.get("/users", (req, res) => {
  console.log("Users read");
});
userRoutes.get("/users/:id", (req, res) => {
  console.log("User read");
});
userRoutes.put("/users/:id", (req, res) => {
  console.log("User updated");
});
userRoutes.delete("/users/:id", (req, res) => {
  console.log("User deleted");
});

export default userRoutes;
