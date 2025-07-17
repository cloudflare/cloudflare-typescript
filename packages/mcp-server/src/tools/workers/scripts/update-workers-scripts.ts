// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/workers/scripts/{script_name}',
  operationId: 'worker-script-upload-worker-module',
};

export const tool: Tool = {
  name: 'update_workers_scripts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpload a worker module. You can find more about the multipart metadata on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      script_name: {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
      },
      metadata: {
        type: 'object',
        description: 'JSON encoded metadata about the uploaded parts and Worker configuration.',
        properties: {
          assets: {
            type: 'object',
            description: 'Configuration for assets within a Worker.',
            properties: {
              config: {
                type: 'object',
                description: 'Configuration for assets within a Worker.',
                properties: {
                  _headers: {
                    type: 'string',
                    description:
                      'The contents of a _headers file (used to attach custom headers on asset responses).',
                  },
                  _redirects: {
                    type: 'string',
                    description:
                      'The contents of a _redirects file (used to apply redirects or proxy paths ahead of asset serving).',
                  },
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
                  serve_directly: {
                    type: 'boolean',
                    description:
                      'When true and the incoming request matches an asset, that will be served instead of invoking the Worker script. When false, requests will always invoke the Worker script.',
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
                    namespace: {
                      type: 'string',
                      description: 'Namespace to bind to.',
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
                    environment: {
                      type: 'string',
                      description: 'Optional environment if the Worker utilizes one.',
                    },
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
                  },
                  required: ['environment', 'name', 'service', 'type'],
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
                      description: 'Name of Tail Worker to bind to.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['tail_consumer'],
                    },
                  },
                  required: ['name', 'service', 'type'],
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
                      description:
                        'Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".',
                    },
                    key_jwk: {
                      type: 'object',
                      description:
                        'Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".',
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
              ],
              description: 'A binding to allow the Worker to communicate with resources.',
            },
          },
          body_part: {
            type: 'string',
            description:
              'Name of the part in the multipart request that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker.',
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
          keep_assets: {
            type: 'boolean',
            description:
              'Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token.',
          },
          keep_bindings: {
            type: 'array',
            description: 'List of binding types to keep from previous_upload.',
            items: {
              type: 'string',
            },
          },
          logpush: {
            type: 'boolean',
            description: 'Whether Logpush is turned on for the Worker.',
          },
          main_module: {
            type: 'string',
            description:
              'Name of the part in the multipart request that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker.',
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
            description: 'Migrations to apply for Durable Objects associated with this Worker.',
          },
          observability: {
            type: 'object',
            description: 'Observability settings for the Worker.',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'Whether observability is enabled for the Worker.',
              },
              head_sampling_rate: {
                type: 'number',
                description:
                  'The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.',
              },
              logs: {
                type: 'object',
                description: 'Log settings for the Worker.',
                properties: {
                  enabled: {
                    type: 'boolean',
                    description: 'Whether logs are enabled for the Worker.',
                  },
                  invocation_logs: {
                    type: 'boolean',
                    description:
                      'Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.',
                  },
                  head_sampling_rate: {
                    type: 'number',
                    description:
                      'The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.',
                  },
                },
                required: ['enabled', 'invocation_logs'],
              },
            },
            required: ['enabled'],
          },
          placement: {
            type: 'object',
            description:
              'Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',
            properties: {
              last_analyzed_at: {
                type: 'string',
                description:
                  'The last time the script was analyzed for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',
                format: 'date-time',
              },
              mode: {
                type: 'string',
                description:
                  'Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',
                enum: ['smart'],
              },
              status: {
                type: 'string',
                description:
                  'Status of [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',
                enum: ['SUCCESS', 'UNSUPPORTED_APPLICATION', 'INSUFFICIENT_INVOCATIONS'],
              },
            },
          },
          tags: {
            type: 'array',
            description: 'List of strings to use as tags for this Worker.',
            items: {
              type: 'string',
            },
          },
          tail_consumers: {
            type: 'array',
            description: 'List of Workers that will consume logs from the attached Worker.',
            items: {
              $ref: '#/$defs/consumer_script',
            },
          },
          usage_model: {
            type: 'string',
            description: 'Usage model for the Worker invocations.',
            enum: ['standard'],
          },
        },
      },
      files: {
        type: 'array',
        description:
          'An array of modules (often JavaScript files) comprising a Worker script. At least one module must be present and referenced in the metadata as `main_module` or `body_part` by filename.<br/>Possible Content-Type(s) are: `application/javascript+module`, `text/javascript+module`, `application/javascript`, `text/javascript`, `application/wasm`, `text/plain`, `application/octet-stream`, `application/source-map`.',
        items: {
          type: 'string',
        },
      },
    },
    required: ['account_id', 'script_name', 'metadata'],
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
      consumer_script: {
        type: 'object',
        description: 'A reference to a script that will consume logs from the attached Worker.',
        properties: {
          service: {
            type: 'string',
            description: 'Name of Worker that is to be the consumer.',
          },
          environment: {
            type: 'string',
            description: 'Optional environment if the Worker utilizes one.',
          },
          namespace: {
            type: 'string',
            description: 'Optional dispatch namespace the script belongs to.',
          },
        },
        required: ['service'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_name, ...body } = args as any;
  return asTextContentResult(await client.workers.scripts.update(script_name, body));
};

export default { metadata, tool, handler };
