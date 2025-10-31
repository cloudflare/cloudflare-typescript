// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.beta.workers.versions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/workers/workers/{worker_id}/versions',
  operationId: 'createWorkerVersion',
};

export const tool: Tool = {
  name: 'create_workers_beta_workers_versions',
  description: 'Create a new version.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      worker_id: {
        type: 'string',
        description: 'Identifier for the Worker, which can be ID or name.',
      },
      deploy: {
        type: 'boolean',
        description: 'If true, a deployment will be created that sends 100% of traffic to the new version.',
      },
      annotations: {
        type: 'object',
        description: 'Metadata about the version.',
        properties: {
          'workers/message': {
            type: 'string',
            description: 'Human-readable message about the version.',
          },
          'workers/tag': {
            type: 'string',
            description: 'User-provided identifier for the version.',
          },
          'workers/triggered_by': {
            type: 'string',
            description: 'Operation that triggered the creation of the version.',
          },
        },
      },
      assets: {
        type: 'object',
        description:
          'Configuration for assets within a Worker.\n\n[`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and\n[`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/) files should be\nincluded as modules named `_headers` and `_redirects` with content type `text/plain`.\n',
        properties: {
          config: {
            type: 'object',
            description: 'Configuration for assets within a Worker.',
            properties: {
              html_handling: {
                type: 'string',
                description: 'Determines the redirects and rewrites of requests for HTML content.',
                enum: ['auto-trailing-slash', 'force-trailing-slash', 'drop-trailing-slash', 'none'],
              },
              not_found_handling: {
                type: 'string',
                description:
                  'Determines the response when a request does not match a static asset, and there is no Worker script.',
                enum: ['none', '404-page', 'single-page-application'],
              },
              run_worker_first: {
                anyOf: [
                  {
                    type: 'array',
                    description:
                      "Contains a list path rules to control routing to either the Worker or assets. Glob (*) and negative (!) rules are supported. Rules must start with either '/' or '!/'. At least one non-negative rule must be provided, and negative rules have higher precedence than non-negative rules.",
                    items: {
                      type: 'string',
                    },
                  },
                  {
                    type: 'boolean',
                    description:
                      'Enables routing to always invoke the Worker script ahead of all requests. When true, this is equivalent to `["/*"]` in the string array version of this field.',
                  },
                ],
                description:
                  "Contains a list path rules to control routing to either the Worker or assets. Glob (*) and negative (!) rules are supported. Rules must start with either '/' or '!/'. At least one non-negative rule must be provided, and negative rules have higher precedence than non-negative rules.",
              },
            },
          },
          jwt: {
            type: 'string',
            description: 'Token provided upon successful upload of all files from a registered manifest.',
          },
        },
      },
      bindings: {
        type: 'array',
        description:
          'List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.',
        items: {
          anyOf: [
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['ai'],
                },
              },
              required: ['name', 'type'],
            },
            {
              type: 'object',
              properties: {
                dataset: {
                  type: 'string',
                  description: 'The name of the dataset to bind to.',
                },
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['analytics_engine'],
                },
              },
              required: ['dataset', 'name', 'type'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['assets'],
                },
              },
              required: ['name', 'type'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['browser'],
                },
              },
              required: ['name', 'type'],
            },
            {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'Identifier of the D1 database to bind to.',
                },
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['d1'],
                },
              },
              required: ['id', 'name', 'type'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                part: {
                  type: 'string',
                  description:
                    'The name of the file containing the data content. Only accepted for `service worker syntax` Workers.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['data_blob'],
                },
              },
              required: ['name', 'part', 'type'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                namespace: {
                  type: 'string',
                  description: 'The name of the dispatch namespace.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['dispatch_namespace'],
                },
                outbound: {
                  type: 'object',
                  description: 'Outbound worker.',
                  properties: {
                    params: {
                      type: 'array',
                      description:
                        'Pass information from the Dispatch Worker to the Outbound Worker through the parameters.',
                      items: {
                        type: 'string',
                      },
                    },
                    worker: {
                      type: 'object',
                      description: 'Outbound worker.',
                      properties: {
                        environment: {
                          type: 'string',
                          description: 'Environment of the outbound worker.',
                        },
                        service: {
                          type: 'string',
                          description: 'Name of the outbound worker.',
                        },
                      },
                    },
                  },
                },
              },
              required: ['name', 'namespace', 'type'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['durable_object_namespace'],
                },
                class_name: {
                  type: 'string',
                  description: 'The exported class name of the Durable Object.',
                },
                environment: {
                  type: 'string',
                  description: 'The environment of the script_name to bind to.',
                },
                namespace_id: {
                  type: 'string',
                  description: 'Namespace identifier tag.',
                },
                script_name: {
                  type: 'string',
                  description:
                    'The script where the Durable Object is defined, if it is external to this Worker.',
                },
              },
              required: ['name', 'type'],
            },
            {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'Identifier of the Hyperdrive connection to bind to.',
                },
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['hyperdrive'],
                },
              },
              required: ['id', 'name', 'type'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'The name of the inherited binding.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['inherit'],
                },
                old_name: {
                  type: 'string',
                  description:
                    'The old name of the inherited binding. If set, the binding will be renamed from `old_name` to `name` in the new version. If not set, the binding will keep the same name between versions.',
                },
                version_id: {
                  type: 'string',
                  description:
                    'Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version. Defaults to inheriting the binding from the latest version.',
                },
              },
              required: ['name', 'type'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['images'],
                },
              },
              required: ['name', 'type'],
            },
            {
              type: 'object',
              properties: {
                json: {
                  type: 'string',
                  description: 'JSON data to use.',
                },
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['json'],
                },
              },
              required: ['json', 'name', 'type'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                namespace_id: {
                  type: 'string',
                  description: 'Namespace identifier tag.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['kv_namespace'],
                },
              },
              required: ['name', 'namespace_id', 'type'],
            },
            {
              type: 'object',
              properties: {
                certificate_id: {
                  type: 'string',
                  description: 'Identifier of the certificate to bind to.',
                },
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['mtls_certificate'],
                },
              },
              required: ['certificate_id', 'name', 'type'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                text: {
                  type: 'string',
                  description: 'The text value to use.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['plain_text'],
                },
              },
              required: ['name', 'text', 'type'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                pipeline: {
                  type: 'string',
                  description: 'Name of the Pipeline to bind to.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['pipelines'],
                },
              },
              required: ['name', 'pipeline', 'type'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                queue_name: {
                  type: 'string',
                  description: 'Name of the Queue to bind to.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['queue'],
                },
              },
              required: ['name', 'queue_name', 'type'],
            },
            {
              type: 'object',
              properties: {
                bucket_name: {
                  type: 'string',
                  description: 'R2 bucket to bind to.',
                },
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['r2_bucket'],
                },
                jurisdiction: {
                  type: 'string',
                  description:
                    'The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket.',
                  enum: ['eu', 'fedramp'],
                },
              },
              required: ['bucket_name', 'name', 'type'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                text: {
                  type: 'string',
                  description: 'The secret value to use.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['secret_text'],
                },
              },
              required: ['name', 'text', 'type'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['send_email'],
                },
                allowed_destination_addresses: {
                  type: 'array',
                  description: 'List of allowed destination addresses.',
                  items: {
                    type: 'string',
                  },
                },
                allowed_sender_addresses: {
                  type: 'array',
                  description: 'List of allowed sender addresses.',
                  items: {
                    type: 'string',
                  },
                },
                destination_address: {
                  type: 'string',
                  description: 'Destination address for the email.',
                },
              },
              required: ['name', 'type'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                service: {
                  type: 'string',
                  description: 'Name of Worker to bind to.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['service'],
                },
                environment: {
                  type: 'string',
                  description: 'Optional environment if the Worker utilizes one.',
                },
              },
              required: ['name', 'service', 'type'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                part: {
                  type: 'string',
                  description:
                    'The name of the file containing the text content. Only accepted for `service worker syntax` Workers.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['text_blob'],
                },
              },
              required: ['name', 'part', 'type'],
            },
            {
              type: 'object',
              properties: {
                index_name: {
                  type: 'string',
                  description: 'Name of the Vectorize index to bind to.',
                },
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['vectorize'],
                },
              },
              required: ['index_name', 'name', 'type'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['version_metadata'],
                },
              },
              required: ['name', 'type'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                secret_name: {
                  type: 'string',
                  description: 'Name of the secret in the store.',
                },
                store_id: {
                  type: 'string',
                  description: 'ID of the store containing the secret.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['secrets_store_secret'],
                },
              },
              required: ['name', 'secret_name', 'store_id', 'type'],
            },
            {
              type: 'object',
              properties: {
                algorithm: {
                  type: 'object',
                  description:
                    'Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).',
                  additionalProperties: true,
                },
                format: {
                  type: 'string',
                  description:
                    'Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format).',
                  enum: ['raw', 'pkcs8', 'spki', 'jwk'],
                },
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['secret_key'],
                },
                usages: {
                  type: 'array',
                  description:
                    'Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).',
                  items: {
                    type: 'string',
                    enum: [
                      'encrypt',
                      'decrypt',
                      'sign',
                      'verify',
                      'deriveKey',
                      'deriveBits',
                      'wrapKey',
                      'unwrapKey',
                    ],
                  },
                },
                key_base64: {
                  type: 'string',
                  description: 'Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".',
                },
                key_jwk: {
                  type: 'object',
                  description:
                    'Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".',
                  additionalProperties: true,
                },
              },
              required: ['algorithm', 'format', 'name', 'type', 'usages'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['workflow'],
                },
                workflow_name: {
                  type: 'string',
                  description: 'Name of the Workflow to bind to.',
                },
                class_name: {
                  type: 'string',
                  description:
                    'Class name of the Workflow. Should only be provided if the Workflow belongs to this script.',
                },
                script_name: {
                  type: 'string',
                  description:
                    'Script name that contains the Workflow. If not provided, defaults to this script name.',
                },
              },
              required: ['name', 'type', 'workflow_name'],
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'A JavaScript variable name for the binding.',
                },
                part: {
                  type: 'string',
                  description:
                    'The name of the file containing the WebAssembly module content. Only accepted for `service worker syntax` Workers.',
                },
                type: {
                  type: 'string',
                  description: 'The kind of resource that the binding provides.',
                  enum: ['wasm_module'],
                },
              },
              required: ['name', 'part', 'type'],
            },
          ],
          description: 'A binding to allow the Worker to communicate with resources.',
        },
      },
      compatibility_date: {
        type: 'string',
        description:
          'Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker.',
      },
      compatibility_flags: {
        type: 'array',
        description:
          'Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.',
        items: {
          type: 'string',
          description: 'Flag that enables or disables a specific feature in the Workers runtime.',
        },
      },
      limits: {
        type: 'object',
        description: 'Resource limits enforced at runtime.',
        properties: {
          cpu_ms: {
            type: 'integer',
            description: 'CPU time limit in milliseconds.',
          },
        },
        required: ['cpu_ms'],
      },
      main_module: {
        type: 'string',
        description:
          'The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler).',
      },
      migrations: {
        anyOf: [
          {
            $ref: '#/$defs/single_step_migration',
          },
          {
            type: 'object',
            properties: {
              new_tag: {
                type: 'string',
                description: 'Tag to set as the latest migration tag.',
              },
              old_tag: {
                type: 'string',
                description:
                  "Tag used to verify against the latest migration tag for this Worker. If they don't match, the upload is rejected.",
              },
              steps: {
                type: 'array',
                description: 'Migrations to apply in order.',
                items: {
                  $ref: '#/$defs/migration_step',
                },
              },
            },
          },
        ],
        description:
          'Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed.',
      },
      modules: {
        type: 'array',
        description:
          'Code, sourcemaps, and other content used at runtime.\n\nThis includes [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and\n[`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/) files used to configure \n[Static Assets](https://developers.cloudflare.com/workers/static-assets/). `_headers` and `_redirects` files should be \nincluded as modules named `_headers` and `_redirects` with content type `text/plain`.\n',
        items: {
          type: 'object',
          properties: {
            content_base64: {
              type: 'string',
              description: 'The base64-encoded module content.',
            },
            content_type: {
              type: 'string',
              description: 'The content type of the module.',
            },
            name: {
              type: 'string',
              description: 'The name of the module.',
            },
          },
          required: ['content_base64', 'content_type', 'name'],
        },
      },
      placement: {
        type: 'object',
        description: 'Placement settings for the version.',
        properties: {
          mode: {
            type: 'string',
            description: 'Placement mode for the version.',
            enum: ['smart'],
          },
        },
      },
      usage_model: {
        type: 'string',
        description: 'Usage model for the version.',
        enum: ['standard', 'bundled', 'unbound'],
      },
    },
    required: ['account_id', 'worker_id'],
    $defs: {
      single_step_migration: {
        type: 'object',
        description: 'A single set of migrations to apply.',
        properties: {
          deleted_classes: {
            type: 'array',
            description: 'A list of classes to delete Durable Object namespaces from.',
            items: {
              type: 'string',
            },
          },
          new_classes: {
            type: 'array',
            description: 'A list of classes to create Durable Object namespaces from.',
            items: {
              type: 'string',
            },
          },
          new_sqlite_classes: {
            type: 'array',
            description: 'A list of classes to create Durable Object namespaces with SQLite from.',
            items: {
              type: 'string',
            },
          },
          new_tag: {
            type: 'string',
            description: 'Tag to set as the latest migration tag.',
          },
          old_tag: {
            type: 'string',
            description:
              "Tag used to verify against the latest migration tag for this Worker. If they don't match, the upload is rejected.",
          },
          renamed_classes: {
            type: 'array',
            description: 'A list of classes with Durable Object namespaces that were renamed.',
            items: {
              type: 'object',
              properties: {
                from: {
                  type: 'string',
                },
                to: {
                  type: 'string',
                },
              },
            },
          },
          transferred_classes: {
            type: 'array',
            description:
              'A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.',
            items: {
              type: 'object',
              properties: {
                from: {
                  type: 'string',
                },
                from_script: {
                  type: 'string',
                },
                to: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      migration_step: {
        type: 'object',
        properties: {
          deleted_classes: {
            type: 'array',
            description: 'A list of classes to delete Durable Object namespaces from.',
            items: {
              type: 'string',
            },
          },
          new_classes: {
            type: 'array',
            description: 'A list of classes to create Durable Object namespaces from.',
            items: {
              type: 'string',
            },
          },
          new_sqlite_classes: {
            type: 'array',
            description: 'A list of classes to create Durable Object namespaces with SQLite from.',
            items: {
              type: 'string',
            },
          },
          renamed_classes: {
            type: 'array',
            description: 'A list of classes with Durable Object namespaces that were renamed.',
            items: {
              type: 'object',
              properties: {
                from: {
                  type: 'string',
                },
                to: {
                  type: 'string',
                },
              },
            },
          },
          transferred_classes: {
            type: 'array',
            description:
              'A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.',
            items: {
              type: 'object',
              properties: {
                from: {
                  type: 'string',
                },
                from_script: {
                  type: 'string',
                },
                to: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { worker_id, ...body } = args as any;
  return asTextContentResult(await client.workers.beta.workers.versions.create(worker_id, body));
};

export default { metadata, tool, handler };
