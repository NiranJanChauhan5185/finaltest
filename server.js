import app from "./app.js";
import { PORT } from "./solution.js";

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});