import { Application } from "express"
import SplunkWebHookRoutes from "./SplunkWebHook.routes"

export const SplunkWebHookRoute = (app: Application) => {
  app.use("/api/splunk-webhook", SplunkWebHookRoutes);
};