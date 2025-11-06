// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pages.projects.deployments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/pages/projects/{project_name}/deployments',
  operationId: 'pages-deployment-get-deployments',
};

export const tool: Tool = {
  name: 'list_projects_pages_deployments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch a list of project deployments.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/deployment'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        false,\n        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'The number of items on the current page.'\n        },\n        page: {\n          type: 'integer',\n          description: 'The page currently being requested.'\n        },\n        per_page: {\n          type: 'integer',\n          description: 'The number of items per page being returned.'\n        },\n        total_count: {\n          type: 'integer',\n          description: 'The total count of items.'\n        },\n        total_pages: {\n          type: 'integer',\n          description: 'The total count of pages.'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    deployment: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Id of the deployment.'\n        },\n        aliases: {\n          type: 'array',\n          description: 'A list of alias URLs pointing to this deployment.',\n          items: {\n            type: 'string'\n          }\n        },\n        build_config: {\n          type: 'object',\n          description: 'Configs for the project build process.',\n          properties: {\n            build_caching: {\n              type: 'boolean',\n              description: 'Enable build caching for the project.'\n            },\n            build_command: {\n              type: 'string',\n              description: 'Command used to build project.'\n            },\n            destination_dir: {\n              type: 'string',\n              description: 'Output directory of the build.'\n            },\n            root_dir: {\n              type: 'string',\n              description: 'Directory to run the command.'\n            },\n            web_analytics_tag: {\n              type: 'string',\n              description: 'The classifying tag for analytics.'\n            },\n            web_analytics_token: {\n              type: 'string',\n              description: 'The auth token for analytics.'\n            }\n          }\n        },\n        created_on: {\n          type: 'string',\n          description: 'When the deployment was created.',\n          format: 'date-time'\n        },\n        deployment_trigger: {\n          type: 'object',\n          description: 'Info about what caused the deployment.',\n          properties: {\n            metadata: {\n              type: 'object',\n              description: 'Additional info about the trigger.',\n              properties: {\n                branch: {\n                  type: 'string',\n                  description: 'Where the trigger happened.'\n                },\n                commit_hash: {\n                  type: 'string',\n                  description: 'Hash of the deployment trigger commit.'\n                },\n                commit_message: {\n                  type: 'string',\n                  description: 'Message of the deployment trigger commit.'\n                }\n              }\n            },\n            type: {\n              type: 'string',\n              description: 'What caused the deployment.',\n              enum: [                'push',\n                'ad_hoc'\n              ]\n            }\n          }\n        },\n        env_vars: {\n          type: 'object',\n          description: 'Environment variables used for builds and Pages Functions.',\n          additionalProperties: true\n        },\n        environment: {\n          type: 'string',\n          description: 'Type of deploy.',\n          enum: [            'preview',\n            'production'\n          ]\n        },\n        is_skipped: {\n          type: 'boolean',\n          description: 'If the deployment has been skipped.'\n        },\n        latest_stage: {\n          $ref: '#/$defs/stage'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'When the deployment was last modified.',\n          format: 'date-time'\n        },\n        project_id: {\n          type: 'string',\n          description: 'Id of the project.'\n        },\n        project_name: {\n          type: 'string',\n          description: 'Name of the project.'\n        },\n        short_id: {\n          type: 'string',\n          description: 'Short Id (8 character) of the deployment.'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            config: {\n              type: 'object',\n              properties: {\n                deployments_enabled: {\n                  type: 'boolean'\n                },\n                owner: {\n                  type: 'string'\n                },\n                path_excludes: {\n                  type: 'array',\n                  items: {\n                    type: 'string'\n                  }\n                },\n                path_includes: {\n                  type: 'array',\n                  items: {\n                    type: 'string'\n                  }\n                },\n                pr_comments_enabled: {\n                  type: 'boolean'\n                },\n                preview_branch_excludes: {\n                  type: 'array',\n                  items: {\n                    type: 'string'\n                  }\n                },\n                preview_branch_includes: {\n                  type: 'array',\n                  items: {\n                    type: 'string'\n                  }\n                },\n                preview_deployment_setting: {\n                  type: 'string',\n                  enum: [                    'all',\n                    'none',\n                    'custom'\n                  ]\n                },\n                production_branch: {\n                  type: 'string'\n                },\n                production_deployments_enabled: {\n                  type: 'boolean'\n                },\n                repo_name: {\n                  type: 'string'\n                }\n              }\n            },\n            type: {\n              type: 'string'\n            }\n          }\n        },\n        stages: {\n          type: 'array',\n          description: 'List of past stages.',\n          items: {\n            $ref: '#/$defs/stage'\n          }\n        },\n        url: {\n          type: 'string',\n          description: 'The live URL to view this deployment.'\n        }\n      }\n    },\n    stage: {\n      type: 'object',\n      description: 'The status of the deployment.',\n      properties: {\n        ended_on: {\n          type: 'string',\n          description: 'When the stage ended.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'The current build stage.',\n          enum: [            'queued',\n            'initialize',\n            'clone_repo',\n            'build',\n            'deploy'\n          ]\n        },\n        started_on: {\n          type: 'string',\n          description: 'When the stage started.',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          description: 'State of the current stage.',\n          enum: [            'success',\n            'idle',\n            'active',\n            'failure',\n            'canceled'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
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
      env: {
        type: 'string',
        description: 'What type of deployments to fetch.',
        enum: ['production', 'preview'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'project_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { project_name, jq_filter, ...body } = args as any;
  const response = await client.pages.projects.deployments.list(project_name, body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
