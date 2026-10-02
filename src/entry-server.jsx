import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import AppRoutes from "./routes/Router";
export { blogPosts } from "./data/blogPosts";

export async function render(path) {
  const { prelude } = await prerenderToNodeStream(
    <StaticRouter location={path}>
      <AppRoutes />
    </StaticRouter>
  );
  let html = "";
  for await (const chunk of prelude) html += chunk.toString();
  return html;
}
