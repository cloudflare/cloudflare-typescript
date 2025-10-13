// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pages.projects.deployments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/pages/projects/{project_name}/deployments',
  operationId: 'pages-deployment-create-deployment',
};

export const tool: Tool = {
  name: 'create_projects_pages_deployments',
  description:
    'Start a new deployment from production. The repository and account must have already been authorized on the Cloudflare Pages dashboard.',
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
      _headers: {
        type: 'string',
        description: 'Headers configuration file for the deployment.',
      },
      _redirects: {
        type: 'string',
        description: 'Redirects configuration file for the deployment.',
      },
      '_routes.json': {
        type: 'string',
        description: 'Routes configuration file defining routing rules.',
      },
      '_worker.bundle': {
        type: 'string',
        description:
          'Worker bundle file in multipart/form-data format. Mutually exclusive with `_worker.js`.\nCannot specify both `_worker.js` and `_worker.bundle` in the same request.\nMaximum size: 25 MiB.\n',
      },
      '_worker.js': {
        type: 'string',
        description:
          'Worker JavaScript file. Mutually exclusive with `_worker.bundle`.\nCannot specify both `_worker.js` and `_worker.bundle` in the same request.\n',
      },
      branch: {
        type: 'string',
        description:
          'The branch to build the new deployment from. The `HEAD` of the branch will be used. If omitted, the production branch will be used by default.',
      },
      commit_dirty: {
        type: 'string',
        description: 'Boolean string indicating if the working directory has uncommitted changes.',
        enum: ['true', 'false'],
      },
      commit_hash: {
        type: 'string',
        description: 'Git commit SHA associated with this deployment.',
      },
      commit_message: {
        type: 'string',
        description: 'Git commit message associated with this deployment.',
      },
      'functions-filepath-routing-config.json': {
        type: 'string',
        description: 'Functions routing configuration file.',
      },
      manifest: {
        type: 'string',
        description:
          'JSON string containing a manifest of files to deploy. Maps file paths to their content hashes.\nRequired for direct upload deployments. Maximum 20,000 entries.\n',
      },
      pages_build_output_dir: {
        type: 'string',
        description: 'The build output directory path.',
      },
      wrangler_config_hash: {
        type: 'string',
        description: 'Hash of the Wrangler configuration file used for this deployment.',
      },
    },
    required: ['account_id', 'project_name'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { project_name, ...body } = args as any;
  return asTextContentResult(await client.pages.projects.deployments.create(project_name, body));
};

export default { metadata, tool, handler };
