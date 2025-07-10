// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

type TextContentBlock = {
  type: 'text';
  text: string;
};

type ImageContentBlock = {
  type: 'image';
  data: string;
  mimeType: string;
};

type AudioContentBlock = {
  type: 'audio';
  data: string;
  mimeType: string;
};

type ResourceContentBlock = {
  type: 'resource';
  resource:
    | {
        uri: string;
        mimeType: string;
        text: string;
      }
    | {
        uri: string;
        mimeType: string;
        blob: string;
      };
};

export type ContentBlock = TextContentBlock | ImageContentBlock | AudioContentBlock | ResourceContentBlock;

export type ToolCallResult = {
  content: ContentBlock[];
  isError?: boolean;
};

export type HandlerFunction = (
  client: Cloudflare,
  args: Record<string, unknown> | undefined,
) => Promise<ToolCallResult>;

export function asTextContentResult(result: unknown): ToolCallResult {
  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(result, null, 2),
      },
    ],
  };
}

export async function asBinaryContentResult(response: Response): Promise<ToolCallResult> {
  const blob = await response.blob();
  const mimeType = blob.type;
  const data = Buffer.from(await blob.arrayBuffer()).toString('base64');
  if (mimeType.startsWith('image/')) {
    return {
      content: [{ type: 'image', mimeType, data }],
    };
  } else if (mimeType.startsWith('audio/')) {
    return {
      content: [{ type: 'audio', mimeType, data }],
    };
  } else {
    return {
      content: [
        {
          type: 'resource',
          resource: {
            // We must give a URI, even though this isn't actually an MCP resource.
            uri: 'resource://tool-response',
            mimeType,
            blob: data,
          },
        },
      ],
    };
  }
}

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
  httpMethod?: string;
  httpPath?: string;
  operationId?: string;
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};
