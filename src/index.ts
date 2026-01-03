import express, { NextFunction, Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/users', (request: Request, Response: Response, next: NextFunction) => {
})

// // Example gateway routes
// app.get("/service1/*", (req: Request, res: Response) => {
//   res.json({ service: "service1", path: req.path });
// });

// app.get("/service2/*", (req: Request, res: Response) => {
//   res.json({ service: "service2", path: req.path });
// });

// app.get("/", (req: Request, res: Response) => {
//   res.json({ status: "ok", message: "API Gateway running 🚀" });
// });

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
