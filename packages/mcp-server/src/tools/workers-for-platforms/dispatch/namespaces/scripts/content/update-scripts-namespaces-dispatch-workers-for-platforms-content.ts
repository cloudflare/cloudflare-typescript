// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers_for_platforms.dispatch.namespaces.scripts.content',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath:
    '/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content',
  operationId: 'namespace-worker-put-script-content',
};

export const tool: Tool = {
  name: 'update_scripts_namespaces_dispatch_workers_for_platforms_content',
  description: 'Put script content for a script uploaded to a Workers for Platforms namespace.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      dispatch_namespace: {
        type: 'string',
        description: 'Name of the Workers for Platforms dispatch namespace.',
      },
      script_name: {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
      },
      metadata: {
        $ref: '#/$defs/worker_metadata',
      },
      files: {
        type: 'array',
        description:
          'An array of modules (often JavaScript files) comprising a Worker script. At least one module must be present and referenced in the metadata as `main_module` or `body_part` by filename.<br/>Possible Content-Type(s) are: `application/javascript+module`, `text/javascript+module`, `application/javascript`, `text/javascript`, `text/x-python`, `text/x-python-requirement`, `application/wasm`, `text/plain`, `application/octet-stream`, `application/source-map`.',
        items: {
          type: 'string',
        },
      },
      'CF-WORKER-BODY-PART': {
        type: 'string',
      },
      'CF-WORKER-MAIN-MODULE-PART': {
        type: 'string',
      },
    },
    required: ['account_id', 'dispatch_namespace', 'script_name', 'metadata'],
    $defs: {
      worker_metadata: {
        type: 'object',
        description: 'JSON-encoded metadata about the uploaded parts and Worker configuration.',
        properties: {
          body_part: {
            type: 'string',
            description:
              'Name of the part in the multipart request that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker.',
          },
          main_module: {
            type: 'string',
            description:
              'Name of the part in the multipart request that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker.',
          },
        },
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_name, ...body } = args as any;
  return asTextContentResult(
    await client.workersForPlatforms.dispatch.namespaces.scripts.content.update(script_name, body),
  );
};

export default { metadata, tool, handler };
