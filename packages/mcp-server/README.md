# Cloudflare TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/cloudflare-typescript.git
cd cloudflare-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export CLOUDFLARE_API_TOKEN="Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"
export CLOUDFLARE_API_KEY="144c9defac04969c7bfad8efaa8ea194"
export CLOUDFLARE_EMAIL="user@example.com"
export CLOUDFLARE_API_USER_SERVICE_KEY="v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y cloudflare-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "cloudflare_api": {
      "command": "node",
      "args": ["/path/to/local/cloudflare-typescript/packages/mcp-server"],
      "env": {
        "CLOUDFLARE_API_TOKEN": "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY",
        "CLOUDFLARE_API_KEY": "144c9defac04969c7bfad8efaa8ea194",
        "CLOUDFLARE_EMAIL": "user@example.com",
        "CLOUDFLARE_API_USER_SERVICE_KEY": "v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719"
      }
    }
  }
}
```

## Code Mode

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server,
your agent will write code against the TypeScript SDK, which will then be executed in an
isolated sandbox. To accomplish this, the server will expose two tools to your agent:

- The first tool is a docs search tool, which can be used to generically query for
  documentation about your API/SDK.

- The second tool is a code tool, where the agent can write code against the TypeScript SDK.
  The code will be executed in a sandbox environment without web or filesystem access. Then,
  anything the code returns or prints will be returned to the agent as the result of the
  tool call.

Using this scheme, agents are capable of performing very complex tasks deterministically
and repeatably.

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ------------------------- | ------------------------ | ---------------- |
| `X-Auth-Email` | `apiEmail` | api_email |
| `X-Auth-Key` | `apiKey` | api_key |
| `x-cloudflare-api-token` | `apiToken` | api_token |
| `X-Auth-User-Service-Key` | `userServiceKey` | user_service_key |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "cloudflare_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```
