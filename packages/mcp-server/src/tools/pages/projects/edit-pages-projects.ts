// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pages.projects',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/pages/projects/{project_name}',
  operationId: 'pages-project-update-project',
};

export const tool: Tool = {
  name: 'edit_pages_projects',
  description:
    'Set new attributes for an existing project. Modify environment variables. To delete an environment variable, set the key to null.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      project_name: {
        type: 'string',
        description: 'Name of the project.',
      },
      name: {
        type: 'string',
        description: 'Name of the project.',
      },
      production_branch: {
        type: 'string',
        description: 'Production branch of the project. Used to identify production deployments.',
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
                additionalProperties: true,
              },
              always_use_latest_compatibility_date: {
                type: 'boolean',
                description: 'Whether to always use the latest compatibility date for Pages Functions.',
              },
              analytics_engine_datasets: {
                type: 'object',
                description: 'Analytics Engine bindings used for Pages Functions.',
                additionalProperties: true,
              },
              browsers: {
                type: 'object',
                description: 'Browser bindings used for Pages Functions.',
                additionalProperties: true,
              },
              build_image_major_version: {
                type: 'integer',
                description: 'The major version of the build image to use for Pages Functions.',
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
                additionalProperties: true,
              },
              durable_object_namespaces: {
                type: 'object',
                description: 'Durable Object namespaces used for Pages Functions.',
                additionalProperties: true,
              },
              env_vars: {
                type: 'object',
                description: 'Environment variables used for builds and Pages Functions.',
                additionalProperties: true,
              },
              fail_open: {
                type: 'boolean',
                description: 'Whether to fail open when the deployment config cannot be applied.',
              },
              hyperdrive_bindings: {
                type: 'object',
                description: 'Hyperdrive bindings used for Pages Functions.',
                additionalProperties: true,
              },
              kv_namespaces: {
                type: 'object',
                description: 'KV namespaces used for Pages Functions.',
                additionalProperties: true,
              },
              limits: {
                type: 'object',
                description: 'Limits for Pages Functions.',
                properties: {
                  cpu_ms: {
                    type: 'integer',
                    description: 'CPU time limit in milliseconds.',
                  },
                },
              },
              mtls_certificates: {
                type: 'object',
                description: 'mTLS bindings used for Pages Functions.',
                additionalProperties: true,
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
              },
              queue_producers: {
                type: 'object',
                description: 'Queue Producer bindings used for Pages Functions.',
                additionalProperties: true,
              },
              r2_buckets: {
                type: 'object',
                description: 'R2 buckets used for Pages Functions.',
                additionalProperties: true,
              },
              services: {
                type: 'object',
                description: 'Services used for Pages Functions.',
                additionalProperties: true,
              },
              usage_model: {
                type: 'string',
                description: 'The usage model for Pages Functions.',
                enum: ['standard', 'bundled', 'unbound'],
              },
              vectorize_bindings: {
                type: 'object',
                description: 'Vectorize bindings used for Pages Functions.',
                additionalProperties: true,
              },
              wrangler_config_hash: {
                type: 'string',
                description: 'Hash of the Wrangler configuration used for the deployment.',
              },
            },
          },
          production: {
            type: 'object',
            description: 'Configs for production deploys.',
            properties: {
              ai_bindings: {
                type: 'object',
                description: 'Constellation bindings used for Pages Functions.',
                additionalProperties: true,
              },
              always_use_latest_compatibility_date: {
                type: 'boolean',
                description: 'Whether to always use the latest compatibility date for Pages Functions.',
              },
              analytics_engine_datasets: {
                type: 'object',
                description: 'Analytics Engine bindings used for Pages Functions.',
                additionalProperties: true,
              },
              browsers: {
                type: 'object',
                description: 'Browser bindings used for Pages Functions.',
                additionalProperties: true,
              },
              build_image_major_version: {
                type: 'integer',
                description: 'The major version of the build image to use for Pages Functions.',
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
                additionalProperties: true,
              },
              durable_object_namespaces: {
                type: 'object',
                description: 'Durable Object namespaces used for Pages Functions.',
                additionalProperties: true,
              },
              env_vars: {
                type: 'object',
                description: 'Environment variables used for builds and Pages Functions.',
                additionalProperties: true,
              },
              fail_open: {
                type: 'boolean',
                description: 'Whether to fail open when the deployment config cannot be applied.',
              },
              hyperdrive_bindings: {
                type: 'object',
                description: 'Hyperdrive bindings used for Pages Functions.',
                additionalProperties: true,
              },
              kv_namespaces: {
                type: 'object',
                description: 'KV namespaces used for Pages Functions.',
                additionalProperties: true,
              },
              limits: {
                type: 'object',
                description: 'Limits for Pages Functions.',
                properties: {
                  cpu_ms: {
                    type: 'integer',
                    description: 'CPU time limit in milliseconds.',
                  },
                },
              },
              mtls_certificates: {
                type: 'object',
                description: 'mTLS bindings used for Pages Functions.',
                additionalProperties: true,
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
              },
              queue_producers: {
                type: 'object',
                description: 'Queue Producer bindings used for Pages Functions.',
                additionalProperties: true,
              },
              r2_buckets: {
                type: 'object',
                description: 'R2 buckets used for Pages Functions.',
                additionalProperties: true,
              },
              services: {
                type: 'object',
                description: 'Services used for Pages Functions.',
                additionalProperties: true,
              },
              usage_model: {
                type: 'string',
                description: 'The usage model for Pages Functions.',
                enum: ['standard', 'bundled', 'unbound'],
              },
              vectorize_bindings: {
                type: 'object',
                description: 'Vectorize bindings used for Pages Functions.',
                additionalProperties: true,
              },
              wrangler_config_hash: {
                type: 'string',
                description: 'Hash of the Wrangler configuration used for the deployment.',
              },
            },
          },
        },
      },
      source: {
        type: 'object',
        properties: {
          config: {
            type: 'object',
            properties: {
              deployments_enabled: {
                type: 'boolean',
                description:
                  'Whether to enable automatic deployments when pushing to the source repository.\nWhen disabled, no deployments (production or preview) will be triggered automatically.\n',
              },
              owner: {
                type: 'string',
                description: 'The owner of the repository.',
              },
              path_excludes: {
                type: 'array',
                description:
                  'A list of paths that should be excluded from triggering a preview deployment. Wildcard syntax (`*`) is supported.',
                items: {
                  type: 'string',
                },
              },
              path_includes: {
                type: 'array',
                description:
                  'A list of paths that should be watched to trigger a preview deployment. Wildcard syntax (`*`) is supported.',
                items: {
                  type: 'string',
                },
              },
              pr_comments_enabled: {
                type: 'boolean',
                description: 'Whether to enable PR comments.',
              },
              preview_branch_excludes: {
                type: 'array',
                description:
                  'A list of branches that should not trigger a preview deployment. Wildcard syntax (`*`) is supported. Must be used with `preview_deployment_setting` set to `custom`.',
                items: {
                  type: 'string',
                },
              },
              preview_branch_includes: {
                type: 'array',
                description:
                  'A list of branches that should trigger a preview deployment. Wildcard syntax (`*`) is supported. Must be used with `preview_deployment_setting` set to `custom`.',
                items: {
                  type: 'string',
                },
              },
              preview_deployment_setting: {
                type: 'string',
                description: 'Controls whether commits to preview branches trigger a preview deployment.',
                enum: ['all', 'none', 'custom'],
              },
              production_branch: {
                type: 'string',
                description: 'The production branch of the repository.',
              },
              production_deployments_enabled: {
                type: 'boolean',
                description:
                  'Whether to trigger a production deployment on commits to the production branch.',
              },
              repo_name: {
                type: 'string',
                description: 'The name of the repository.',
              },
            },
          },
          type: {
            type: 'string',
            description: 'The source control management provider.',
            enum: ['github', 'gitlab'],
          },
        },
      },
    },
    required: ['account_id', 'project_name', 'name', 'production_branch'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { project_name, ...body } = args as any;
  return asTextContentResult(await client.pages.projects.edit(project_name, body));
};

export default { metadata, tool, handler };
