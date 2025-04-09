// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'browser_rendering.snapshot',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_browser_rendering_snapshot',
  description:
    "Returns the page's HTML content and screenshot. Control page loading with `gotoOptions` and `waitFor*` options. Customize screenshots with `viewport`, `fullPage`, `clip` and others.",
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
      screenshotOptions: {
        type: 'object',
        properties: {
          captureBeyondViewport: {
            type: 'boolean',
          },
          clip: {
            type: 'object',
            properties: {
              height: {
                type: 'number',
              },
              width: {
                type: 'number',
              },
              x: {
                type: 'number',
              },
              y: {
                type: 'number',
              },
              scale: {
                type: 'number',
              },
            },
            required: ['height', 'width', 'x', 'y'],
          },
          fromSurface: {
            type: 'boolean',
          },
          fullPage: {
            type: 'boolean',
          },
          omitBackground: {
            type: 'boolean',
          },
          optimizeForSpeed: {
            type: 'boolean',
          },
          quality: {
            type: 'number',
          },
          type: {
            type: 'string',
            enum: ['png', 'jpeg', 'webp'],
          },
        },
        required: [],
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.browserRendering.snapshot.create(body);
};

export default { metadata, tool, handler };
