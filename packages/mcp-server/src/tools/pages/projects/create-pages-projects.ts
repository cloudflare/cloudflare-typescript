// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pages.projects',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_pages_projects',
  description: 'Create a new project.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      build_config: {
        type: 'object',
        description: 'Configs for the project build process.',
        properties: {
          build_caching: {
            type: 'boolean',
            description: 'Enable build caching for the project.',
          },
          build_command: {
            type: 'string',
            description: 'Command used to build project.',
          },
          destination_dir: {
            type: 'string',
            description: 'Output directory of the build.',
          },
          root_dir: {
            type: 'string',
            description: 'Directory to run the command.',
          },
          web_analytics_tag: {
            type: 'string',
            description: 'The classifying tag for analytics.',
          },
          web_analytics_token: {
            type: 'string',
            description: 'The auth token for analytics.',
          },
        },
        required: [],
      },
      deployment_configs: {
        type: 'object',
        description: 'Configs for deployments in a project.',
        properties: {
          preview: {
            type: 'object',
            description: 'Configs for preview deploys.',
            properties: {
              ai_bindings: {
                type: 'object',
                description: 'Constellation bindings used for Pages Functions.',
              },
              analytics_engine_datasets: {
                type: 'object',
                description: 'Analytics Engine bindings used for Pages Functions.',
              },
              browsers: {
                type: 'object',
                description: 'Browser bindings used for Pages Functions.',
              },
              compatibility_date: {
                type: 'string',
                description: 'Compatibility date used for Pages Functions.',
              },
              compatibility_flags: {
                type: 'array',
                description: 'Compatibility flags used for Pages Functions.',
                items: {
                  type: 'string',
                },
              },
              d1_databases: {
                type: 'object',
                description: 'D1 databases used for Pages Functions.',
              },
              durable_object_namespaces: {
                type: 'object',
                description: 'Durable Object namespaces used for Pages Functions.',
              },
              env_vars: {
                type: 'object',
                description: 'Environment variables used for builds and Pages Functions.',
              },
              hyperdrive_bindings: {
                type: 'object',
                description: 'Hyperdrive bindings used for Pages Functions.',
              },
              kv_namespaces: {
                type: 'object',
                description: 'KV namespaces used for Pages Functions.',
              },
              mtls_certificates: {
                type: 'object',
                description: 'mTLS bindings used for Pages Functions.',
              },
              placement: {
                type: 'object',
                description: 'Placement setting used for Pages Functions.',
                properties: {
                  mode: {
                    type: 'string',
                    description: 'Placement mode.',
                  },
                },
                required: [],
              },
              queue_producers: {
                type: 'object',
                description: 'Queue Producer bindings used for Pages Functions.',
              },
              r2_buckets: {
                type: 'object',
                description: 'R2 buckets used for Pages Functions.',
              },
              services: {
                type: 'object',
                description: 'Services used for Pages Functions.',
              },
              vectorize_bindings: {
                type: 'object',
                description: 'Vectorize bindings used for Pages Functions.',
              },
            },
            required: [],
          },
          production: {
            type: 'object',
            description: 'Configs for production deploys.',
            properties: {
              ai_bindings: {
                type: 'object',
                description: 'Constellation bindings used for Pages Functions.',
              },
              analytics_engine_datasets: {
                type: 'object',
                description: 'Analytics Engine bindings used for Pages Functions.',
              },
              browsers: {
                type: 'object',
                description: 'Browser bindings used for Pages Functions.',
              },
              compatibility_date: {
                type: 'string',
                description: 'Compatibility date used for Pages Functions.',
              },
              compatibility_flags: {
                type: 'array',
                description: 'Compatibility flags used for Pages Functions.',
                items: {
                  type: 'string',
                },
              },
              d1_databases: {
                type: 'object',
                description: 'D1 databases used for Pages Functions.',
              },
              durable_object_namespaces: {
                type: 'object',
                description: 'Durable Object namespaces used for Pages Functions.',
              },
              env_vars: {
                type: 'object',
                description: 'Environment variables used for builds and Pages Functions.',
              },
              hyperdrive_bindings: {
                type: 'object',
                description: 'Hyperdrive bindings used for Pages Functions.',
              },
              kv_namespaces: {
                type: 'object',
                description: 'KV namespaces used for Pages Functions.',
              },
              mtls_certificates: {
                type: 'object',
                description: 'mTLS bindings used for Pages Functions.',
              },
              placement: {
                type: 'object',
                description: 'Placement setting used for Pages Functions.',
                properties: {
                  mode: {
                    type: 'string',
                    description: 'Placement mode.',
                  },
                },
                required: [],
              },
              queue_producers: {
                type: 'object',
                description: 'Queue Producer bindings used for Pages Functions.',
              },
              r2_buckets: {
                type: 'object',
                description: 'R2 buckets used for Pages Functions.',
              },
              services: {
                type: 'object',
                description: 'Services used for Pages Functions.',
              },
              vectorize_bindings: {
                type: 'object',
                description: 'Vectorize bindings used for Pages Functions.',
              },
            },
            required: [],
          },
        },
        required: [],
      },
      name: {
        type: 'string',
        description: 'Name of the project.',
      },
      production_branch: {
        type: 'string',
        description: 'Production branch of the project. Used to identify production deployments.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.pages.projects.create(body);
};

export default { metadata, tool, handler };
