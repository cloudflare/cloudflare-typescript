// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'browser_rendering.markdown',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/browser-rendering/markdown',
  operationId: 'brapi-post_Markdown',
};

export const tool: Tool = {
  name: 'create_browser_rendering_markdown',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets markdown of a webpage from provided URL or HTML. Control page loading with `gotoOptions` and `waitFor*` options.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    status: {\n      type: 'boolean',\n      description: 'Response status'\n    },\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'number',\n            description: 'Error code'\n          },\n          message: {\n            type: 'string',\n            description: 'Error Message'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'string',\n      description: 'Markdown'\n    }\n  },\n  required: [    'status'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      cacheTTL: {
        type: 'number',
        description: 'Cache TTL default is 5s. Set to 0 to disable.',
      },
      actionTimeout: {
        type: 'number',
        description:
          'The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceeded, the action stops and returns a timeout error.',
      },
      addScriptTag: {
        type: 'array',
        description: 'Adds a `<script>` tag into the page with the desired URL or content.',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            content: {
              type: 'string',
            },
            type: {
              type: 'string',
            },
            url: {
              type: 'string',
            },
          },
          required: [],
        },
      },
      addStyleTag: {
        type: 'array',
        description:
          'Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content.',
        items: {
          type: 'object',
          properties: {
            content: {
              type: 'string',
            },
            url: {
              type: 'string',
            },
          },
          required: [],
        },
      },
      allowRequestPattern: {
        type: 'array',
        description: "Only allow requests that match the provided regex patterns, eg. '/^.*\\.(css)'.",
        items: {
          type: 'string',
        },
      },
      allowResourceTypes: {
        type: 'array',
        description: "Only allow requests that match the provided resource types, eg. 'image' or 'script'.",
        items: {
          type: 'string',
          enum: [
            'document',
            'stylesheet',
            'image',
            'media',
            'font',
            'script',
            'texttrack',
            'xhr',
            'fetch',
            'prefetch',
            'eventsource',
            'websocket',
            'manifest',
            'signedexchange',
            'ping',
            'cspviolationreport',
            'preflight',
            'other',
          ],
        },
      },
      authenticate: {
        type: 'object',
        description: 'Provide credentials for HTTP authentication.',
        properties: {
          password: {
            type: 'string',
          },
          username: {
            type: 'string',
          },
        },
        required: ['password', 'username'],
      },
      bestAttempt: {
        type: 'boolean',
        description: "Attempt to proceed when 'awaited' events fail or timeout.",
      },
      cookies: {
        type: 'array',
        description: 'Check [options](https://pptr.dev/api/puppeteer.page.setcookie).',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            value: {
              type: 'string',
            },
            domain: {
              type: 'string',
            },
            expires: {
              type: 'number',
            },
            httpOnly: {
              type: 'boolean',
            },
            partitionKey: {
              type: 'string',
            },
            path: {
              type: 'string',
            },
            priority: {
              type: 'string',
              enum: ['Low', 'Medium', 'High'],
            },
            sameParty: {
              type: 'boolean',
            },
            sameSite: {
              type: 'string',
              enum: ['Strict', 'Lax', 'None'],
            },
            secure: {
              type: 'boolean',
            },
            sourcePort: {
              type: 'number',
            },
            sourceScheme: {
              type: 'string',
              enum: ['Unset', 'NonSecure', 'Secure'],
            },
            url: {
              type: 'string',
            },
          },
          required: ['name', 'value'],
        },
      },
      emulateMediaType: {
        type: 'string',
      },
      gotoOptions: {
        type: 'object',
        description: 'Check [options](https://pptr.dev/api/puppeteer.gotooptions).',
        properties: {
          referer: {
            type: 'string',
          },
          referrerPolicy: {
            type: 'string',
          },
          timeout: {
            type: 'number',
          },
          waitUntil: {
            anyOf: [
              {
                type: 'string',
                enum: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2'],
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                  enum: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2'],
                },
              },
            ],
          },
        },
        required: [],
      },
      html: {
        type: 'string',
        description:
          'Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set.',
      },
      rejectRequestPattern: {
        type: 'array',
        description: "Block undesired requests that match the provided regex patterns, eg. '/^.*\\.(css)'.",
        items: {
          type: 'string',
        },
      },
      rejectResourceTypes: {
        type: 'array',
        description:
          "Block undesired requests that match the provided resource types, eg. 'image' or 'script'.",
        items: {
          type: 'string',
          enum: [
            'document',
            'stylesheet',
            'image',
            'media',
            'font',
            'script',
            'texttrack',
            'xhr',
            'fetch',
            'prefetch',
            'eventsource',
            'websocket',
            'manifest',
            'signedexchange',
            'ping',
            'cspviolationreport',
            'preflight',
            'other',
          ],
        },
      },
      setExtraHTTPHeaders: {
        type: 'object',
      },
      setJavaScriptEnabled: {
        type: 'boolean',
      },
      url: {
        type: 'string',
        description: 'URL to navigate to, eg. `https://example.com`.',
      },
      userAgent: {
        type: 'string',
      },
      viewport: {
        type: 'object',
        description: 'Check [options](https://pptr.dev/api/puppeteer.page.setviewport).',
        properties: {
          height: {
            type: 'number',
          },
          width: {
            type: 'number',
          },
          deviceScaleFactor: {
            type: 'number',
          },
          hasTouch: {
            type: 'boolean',
          },
          isLandscape: {
            type: 'boolean',
          },
          isMobile: {
            type: 'boolean',
          },
        },
        required: ['height', 'width'],
      },
      waitForSelector: {
        type: 'object',
        description:
          'Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector).',
        properties: {
          selector: {
            type: 'string',
          },
          hidden: {
            type: 'string',
            enum: [true],
          },
          timeout: {
            type: 'number',
          },
          visible: {
            type: 'string',
            enum: [true],
          },
        },
        required: ['selector'],
      },
      waitForTimeout: {
        type: 'number',
        description: 'Waits for a specified timeout before continuing.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.browserRendering.markdown.create(body)));
};

export default { metadata, tool, handler };
