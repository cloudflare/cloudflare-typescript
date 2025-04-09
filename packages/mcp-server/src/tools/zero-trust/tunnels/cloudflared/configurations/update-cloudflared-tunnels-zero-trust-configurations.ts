// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.cloudflared.configurations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_cloudflared_tunnels_zero_trust_configurations',
  description: 'Adds or updates the configuration for a remotely-managed tunnel.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      tunnel_id: {
        type: 'string',
        description: 'UUID of the tunnel.',
      },
      config: {
        type: 'object',
        description: 'The tunnel configuration and ingress rules.',
        properties: {
          ingress: {
            type: 'array',
            description:
              'List of public hostname definitions. At least one ingress rule needs to be defined for the tunnel.',
            items: {
              type: 'object',
              description: 'Public hostname',
              properties: {
                hostname: {
                  type: 'string',
                  description: 'Public hostname for this service.',
                },
                service: {
                  type: 'string',
                  description:
                    "Protocol and address of destination server. Supported protocols: http://, https://, unix://, tcp://, ssh://, rdp://, unix+tls://, smb://. Alternatively can return a HTTP status code http_status:[code] e.g. 'http_status:404'.\n",
                },
                originRequest: {
                  type: 'object',
                  description:
                    'Configuration parameters for the public hostname specific connection settings between cloudflared and origin server.',
                  properties: {
                    access: {
                      type: 'object',
                      description:
                        "For all L7 requests to this hostname, cloudflared will validate each request's Cf-Access-Jwt-Assertion request header.",
                      properties: {
                        audTag: {
                          type: 'array',
                          description:
                            'Access applications that are allowed to reach this hostname for this Tunnel. Audience tags can be identified in the dashboard or via the List Access policies API.',
                          items: {
                            type: 'string',
                          },
                        },
                        teamName: {
                          type: 'string',
                        },
                        required: {
                          type: 'boolean',
                          description: 'Deny traffic that has not fulfilled Access authorization.',
                        },
                      },
                      required: ['audTag', 'teamName'],
                    },
                    caPool: {
                      type: 'string',
                      description:
                        'Path to the certificate authority (CA) for the certificate of your origin. This option should be used only if your certificate is not signed by Cloudflare.',
                    },
                    connectTimeout: {
                      type: 'integer',
                      description:
                        'Timeout for establishing a new TCP connection to your origin server. This excludes the time taken to establish TLS, which is controlled by tlsTimeout.',
                    },
                    disableChunkedEncoding: {
                      type: 'boolean',
                      description:
                        'Disables chunked transfer encoding. Useful if you are running a WSGI server.',
                    },
                    http2Origin: {
                      type: 'boolean',
                      description:
                        'Attempt to connect to origin using HTTP2. Origin must be configured as https.',
                    },
                    httpHostHeader: {
                      type: 'string',
                      description: 'Sets the HTTP Host header on requests sent to the local service.',
                    },
                    keepAliveConnections: {
                      type: 'integer',
                      description:
                        'Maximum number of idle keepalive connections between Tunnel and your origin. This does not restrict the total number of concurrent connections.',
                    },
                    keepAliveTimeout: {
                      type: 'integer',
                      description: 'Timeout after which an idle keepalive connection can be discarded.',
                    },
                    noHappyEyeballs: {
                      type: 'boolean',
                      description:
                        'Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols.',
                    },
                    noTLSVerify: {
                      type: 'boolean',
                      description:
                        'Disables TLS verification of the certificate presented by your origin. Will allow any certificate from the origin to be accepted.',
                    },
                    originServerName: {
                      type: 'string',
                      description:
                        'Hostname that cloudflared should expect from your origin server certificate.',
                    },
                    proxyType: {
                      type: 'string',
                      description:
                        'cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. This configures what type of proxy will be started. Valid options are: "" for the regular proxy and "socks" for a SOCKS5 proxy.\n',
                    },
                    tcpKeepAlive: {
                      type: 'integer',
                      description:
                        'The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server.',
                    },
                    tlsTimeout: {
                      type: 'integer',
                      description:
                        'Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server.',
                    },
                  },
                  required: [],
                },
                path: {
                  type: 'string',
                  description: 'Requests with this path route to this public hostname.',
                },
              },
              required: ['hostname', 'service'],
            },
          },
          originRequest: {
            type: 'object',
            description:
              'Configuration parameters for the public hostname specific connection settings between cloudflared and origin server.',
            properties: {
              access: {
                type: 'object',
                description:
                  "For all L7 requests to this hostname, cloudflared will validate each request's Cf-Access-Jwt-Assertion request header.",
                properties: {
                  audTag: {
                    type: 'array',
                    description:
                      'Access applications that are allowed to reach this hostname for this Tunnel. Audience tags can be identified in the dashboard or via the List Access policies API.',
                    items: {
                      type: 'string',
                    },
                  },
                  teamName: {
                    type: 'string',
                  },
                  required: {
                    type: 'boolean',
                    description: 'Deny traffic that has not fulfilled Access authorization.',
                  },
                },
                required: ['audTag', 'teamName'],
              },
              caPool: {
                type: 'string',
                description:
                  'Path to the certificate authority (CA) for the certificate of your origin. This option should be used only if your certificate is not signed by Cloudflare.',
              },
              connectTimeout: {
                type: 'integer',
                description:
                  'Timeout for establishing a new TCP connection to your origin server. This excludes the time taken to establish TLS, which is controlled by tlsTimeout.',
              },
              disableChunkedEncoding: {
                type: 'boolean',
                description: 'Disables chunked transfer encoding. Useful if you are running a WSGI server.',
              },
              http2Origin: {
                type: 'boolean',
                description: 'Attempt to connect to origin using HTTP2. Origin must be configured as https.',
              },
              httpHostHeader: {
                type: 'string',
                description: 'Sets the HTTP Host header on requests sent to the local service.',
              },
              keepAliveConnections: {
                type: 'integer',
                description:
                  'Maximum number of idle keepalive connections between Tunnel and your origin. This does not restrict the total number of concurrent connections.',
              },
              keepAliveTimeout: {
                type: 'integer',
                description: 'Timeout after which an idle keepalive connection can be discarded.',
              },
              noHappyEyeballs: {
                type: 'boolean',
                description:
                  'Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols.',
              },
              noTLSVerify: {
                type: 'boolean',
                description:
                  'Disables TLS verification of the certificate presented by your origin. Will allow any certificate from the origin to be accepted.',
              },
              originServerName: {
                type: 'string',
                description: 'Hostname that cloudflared should expect from your origin server certificate.',
              },
              proxyType: {
                type: 'string',
                description:
                  'cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. This configures what type of proxy will be started. Valid options are: "" for the regular proxy and "socks" for a SOCKS5 proxy.\n',
              },
              tcpKeepAlive: {
                type: 'integer',
                description:
                  'The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server.',
              },
              tlsTimeout: {
                type: 'integer',
                description:
                  'Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server.',
              },
            },
            required: [],
          },
          'warp-routing': {
            type: 'object',
            description:
              'Enable private network access from WARP users to private network routes. This is enabled if the tunnel has an assigned route.',
            properties: {
              enabled: {
                type: 'boolean',
              },
            },
            required: [],
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { tunnel_id, ...body } = args;
  return client.zeroTrust.tunnels.cloudflared.configurations.update(tunnel_id, body);
};

export default { metadata, tool, handler };
