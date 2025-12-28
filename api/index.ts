// api/index.ts
import app from '../server/index'; // путь к твоему основному файлу express
export default app;..
if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => console.log('Server running on 3000'));
}
export default app;
