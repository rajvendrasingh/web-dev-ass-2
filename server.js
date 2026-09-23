const express = require("express");

const app = express();

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());

app.use(logger);

app.use("/students", studentRoutes);

app.use(errorHandler);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});