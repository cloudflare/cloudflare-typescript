// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.versions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/workers/scripts/{script_name}/versions',
  operationId: 'worker-versions-upload-version',
};

export const tool: Tool = {
  name: 'create_scripts_workers_versions',
  description:
    "Upload a Worker Version without deploying to Cloudflare's network. You can find more about the multipart metadata on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      script_name: {
        type: 'string',
        description: 'Name of the script.',
      },
      metadata: {
        type: 'object',
        description: 'JSON-encoded metadata about the uploaded parts and Worker configuration.',
        properties: {
          main_module: {
            type: 'string',
            description:
              'Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker, which is required for Version Upload.',
          },
          annotations: {
            type: 'object',
            properties: {
              'workers/message': {
                type: 'string',
                description: 'Human-readable message about the version. Truncated to 100 bytes.',
              },
              'workers/tag': {
                type: 'string',
                description: 'User-provided identifier for the version.',
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
                      description:
                        'Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".',
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
          keep_bindings: {
            type: 'array',
            description: 'List of binding types to keep from previous_upload.',
            items: {
              type: 'string',
            },
          },
          usage_model: {
            type: 'string',
            description: 'Usage model for the Worker invocations.',
            enum: ['standard', 'bundled', 'unbound'],
          },
        },
        required: ['main_module'],
      },
      files: {
        type: 'array',
        description:
          'An array of modules (often JavaScript files) comprising a Worker script. At least one module must be present and referenced in the metadata as `main_module` or `body_part` by filename.<br/>Possible Content-Type(s) are: `application/javascript+module`, `text/javascript+module`, `application/javascript`, `text/javascript`, `text/x-python`, `text/x-python-requirement`, `application/wasm`, `text/plain`, `application/octet-stream`, `application/source-map`.',
        items: {
          type: 'string',
        },
      },
    },
    required: ['account_id', 'script_name', 'metadata'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_name, ...body } = args as any;
  return asTextContentResult(await client.workers.scripts.versions.create(script_name, body));
};

export default { metadata, tool, handler };
