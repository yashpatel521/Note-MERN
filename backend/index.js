const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/UserRoutes");
const notesRoutes = require("./routes/NotesRoutes");
const { errorHandler, notFound } = require("./middlewares/ErrorMiddleware");
const path = require("path");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/api/users", userRoutes);
app.use("/api/notes", notesRoutes);

// -------------------------- deployment command--------------------------
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running.....");
  });
}
// -------------------------- deployment command--------------------------
app.use(notFound);
app.use(errorHandler);

// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((n) => n._id === req.params.id);
//   res.send(note);
// });

app.listen(PORT, console.log(`Server on ${PORT}`));
