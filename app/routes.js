import { flatRoutes } from "@react-router/fs-routes";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default flatRoutes();
