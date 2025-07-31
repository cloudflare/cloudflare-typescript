// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'leaked_credential_checks.detections',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/leaked-credential-checks/detections/{detection_id}',
  operationId: 'waf-product-api-leaked-credentials-delete-detection',
};

export const tool: Tool = {
  name: 'delete_leaked_credential_checks_detections',
  description: 'Remove user-defined detection pattern for Leaked Credential Checks.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      detection_id: {
        type: 'string',
        description: 'Defines the unique ID for this custom detection.',
      },
    },
    required: ['zone_id', 'detection_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { detection_id, ...body } = args as any;
  return asTextContentResult(
    (await client.leakedCredentialChecks.detections.delete(detection_id, body)) as object,
  );
};

export default { metadata, tool, handler };
