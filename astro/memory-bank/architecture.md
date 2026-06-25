# Architecture

## Agent Discovery

```mermaid
flowchart TD
  Agent["Agent scanner"] --> Home["/ or /fr"]
  Home --> Middleware["functions/_middleware.js"]
  Middleware -->|"Accept: text/markdown"| LLMs["/llms.txt"]
  Middleware -->|"HTML request"| HTML["Astro static page"]
  Home --> Links["Link headers"]
  Links --> Catalog["/.well-known/api-catalog"]
  Links --> Skills["/.well-known/agent-skills/index.json"]
  Links --> MCP["/.well-known/mcp/server-card.json"]
  Catalog --> OpenAPI["/openapi.json"]
  OpenAPI --> Contact["POST /api/contact"]
```

- Cloudflare Pages Functions handle request-time negotiation and homepage discovery headers.
- Static public files provide agent-readable discovery artifacts.
- Browser WebMCP tools are registered only when `navigator.modelContext.provideContext` exists.
