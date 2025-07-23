// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'browser_rendering.pdf',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/browser-rendering/pdf',
  operationId: 'brapi-post_Pdf',
};

export const tool: Tool = {
  name: 'create_browser_rendering_pdf',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches rendered PDF from provided URL or HTML. Check available options like `gotoOptions` and `waitFor*` to control page load behaviour.",
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
      },
      html: {
        type: 'string',
        description:
          'Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set.',
      },
      pdfOptions: {
        type: 'object',
        description: 'Check [options](https://pptr.dev/api/puppeteer.pdfoptions).',
        properties: {
          displayHeaderFooter: {
            type: 'boolean',
            description: 'Whether to show the header and footer.',
          },
          footerTemplate: {
            type: 'string',
            description: 'HTML template for the print footer.',
          },
          format: {
            type: 'string',
            description: 'Paper format. Takes priority over width and height if set.',
            enum: ['letter', 'legal', 'tabloid', 'ledger', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6'],
          },
          headerTemplate: {
            type: 'string',
            description: 'HTML template for the print header.',
          },
          height: {
            anyOf: [
              {
                type: 'string',
              },
              {
                type: 'number',
              },
            ],
            description: 'Sets the height of paper. Can be a number or string with unit.',
          },
          landscape: {
            type: 'boolean',
            description: 'Whether to print in landscape orientation.',
          },
          margin: {
            type: 'object',
            description: 'Set the PDF margins. Useful when setting header and footer.',
            properties: {
              bottom: {
                anyOf: [
                  {
                    type: 'string',
                  },
                  {
                    type: 'number',
                  },
                ],
              },
              left: {
                anyOf: [
                  {
                    type: 'string',
                  },
                  {
                    type: 'number',
                  },
                ],
              },
              right: {
                anyOf: [
                  {
                    type: 'string',
                  },
                  {
                    type: 'number',
                  },
                ],
              },
              top: {
                anyOf: [
                  {
                    type: 'string',
                  },
                  {
                    type: 'number',
                  },
                ],
              },
            },
          },
          omitBackground: {
            type: 'boolean',
            description: 'Hides default white background and allows generating pdfs with transparency.',
          },
          outline: {
            type: 'boolean',
            description: 'Generate document outline.',
          },
          pageRanges: {
            type: 'string',
            description: "Paper ranges to print, e.g. '1-5, 8, 11-13'.",
          },
          preferCSSPageSize: {
            type: 'boolean',
            description: 'Give CSS @page size priority over other size declarations.',
          },
          printBackground: {
            type: 'boolean',
            description: 'Set to true to print background graphics.',
          },
          scale: {
            type: 'number',
            description: 'Scales the rendering of the web page. Amount must be between 0.1 and 2.',
          },
          tagged: {
            type: 'boolean',
            description: 'Generate tagged (accessible) PDF.',
          },
          timeout: {
            type: 'number',
            description: 'Timeout in milliseconds.',
          },
          width: {
            anyOf: [
              {
                type: 'string',
              },
              {
                type: 'number',
              },
            ],
            description: 'Sets the width of paper. Can be a number or string with unit.',
          },
        },
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
    },
    required: ['account_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.browserRendering.pdf.create(body));
};

export default { metadata, tool, handler };
