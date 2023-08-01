import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema });

// Pass it into a server to hook into request handlers.
const server = createServer(yoga);

// Start the server and you're done!
const port = Number(process.env.API_PORT) || 4000;
server.listen(port, () => {
	console.info(`Server is running on ${process.env.BASE_URL}/graphql`);
});
