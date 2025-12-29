import 'dotenv/config';
import { createApp } from "./app";

const PORT = process.env.PORT || 3000;

function bootstrap() {
  const app = createApp();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

bootstrap();
