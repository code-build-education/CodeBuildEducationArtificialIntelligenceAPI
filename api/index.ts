import { createApp } from "../src/app";

// Express app  
const app = createApp();

// Port 
const port = process.env.PORT || 5001;

// Start server
app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});

