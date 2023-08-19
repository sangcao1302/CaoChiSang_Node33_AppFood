import express from 'express';
const app = express();
app.use(express.json()) // hàm gọi middleware chuyển đổi cấu trúc json để backend nhận được

import cors from 'cors';
app.use(cors()); // middleware chấp nhận tất FE truy cập vào

app.listen(8080); 



import rootRoutes from './Routes/rootRoutes.js';

app.use("/api",rootRoutes)


