import "dotenv/config";
import server from "./routes";
import "./database";
server.start();
