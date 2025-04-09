// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_page_rules',
  description: 'Creates a new Page Rule.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      actions: {
        type: 'array',
        description:
          'The set of actions to perform if the targets of this rule match the\nrequest. Actions can redirect to another URL or override settings, but\nnot both.\n',
        items: {
          anyOf: [
            {
              type: 'object',
              title: 'Always Use HTTPS',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'If enabled, any `http://`` URL is converted to `https://` through a\n301 redirect.',
                  enum: ['always_use_https'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Automatic HTTPS Rewrites',
              properties: {
                id: {
                  type: 'string',
                  description: 'Turn on or off Automatic HTTPS Rewrites.',
                  enum: ['automatic_https_rewrites'],
                },
                value: {
                  type: 'string',
                  description: 'The status of Automatic HTTPS Rewrites.',
                  enum: ['on', 'off'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Browser Cache TTL',
              properties: {
                id: {
                  type: 'string',
                  description: 'Control how long resources cached by client browsers remain valid.',
                  enum: ['browser_cache_ttl'],
                },
                value: {
                  type: 'integer',
                  description:
                    'The number of seconds to cache resources for. The API prohibits\nsetting this to 0 for non-Enterprise domains.\n',
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Browser Integrity Check',
              properties: {
                id: {
                  type: 'string',
                  description:
                    "Inspect the visitor's browser for headers commonly associated with\nspammers and certain bots.",
                  enum: ['browser_check'],
                },
                value: {
                  type: 'string',
                  description: 'The status of Browser Integrity Check.',
                  enum: ['on', 'off'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Bypass Cache on Cookie',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Bypass cache and fetch resources from the origin server if a regular\nexpression matches against a cookie name present in the request.',
                  enum: ['bypass_cache_on_cookie'],
                },
                value: {
                  type: 'string',
                  description:
                    'The regular expression to use for matching cookie names in the\nrequest. Refer to [Bypass Cache on Cookie\nsetting](https://developers.cloudflare.com/rules/page-rules/reference/additional-reference/#bypass-cache-on-cookie-setting)\nto learn about limited regular expression support.\n',
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Cache By Device Type',
              properties: {
                id: {
                  type: 'string',
                  description: "Separate cached content based on the visitor's device type.",
                  enum: ['cache_by_device_type'],
                },
                value: {
                  type: 'string',
                  description: 'The status of Cache By Device Type.',
                  enum: ['on', 'off'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Cache Deception Armor',
              properties: {
                id: {
                  type: 'string',
                  description:
                    "Protect from web cache deception attacks while still allowing static\nassets to be cached. This setting verifies that the URL's extension\nmatches the returned `Content-Type`.",
                  enum: ['cache_deception_armor'],
                },
                value: {
                  type: 'string',
                  description: 'The status of Cache Deception Armor.',
                  enum: ['on', 'off'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Custom Cache Key',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Control specifically what variables to include when deciding which\nresources to cache. This allows customers to determine what to cache\nbased on something other than just the URL.',
                  enum: ['cache_key_fields'],
                },
                value: {
                  type: 'object',
                  properties: {
                    cookie: {
                      type: 'object',
                      description: 'Controls which cookies appear in the Cache Key.\n',
                      properties: {
                        check_presence: {
                          type: 'array',
                          description:
                            'A list of cookies to check for the presence of, without\nincluding their actual values.\n',
                          items: {
                            type: 'string',
                          },
                        },
                        include: {
                          type: 'array',
                          description: 'A list of cookies to include.\n',
                          items: {
                            type: 'string',
                          },
                        },
                      },
                      required: [],
                    },
                    header: {
                      type: 'object',
                      description:
                        'Controls which headers go into the Cache Key. Exactly one of\n`include` or `exclude` is expected.\n',
                      properties: {
                        check_presence: {
                          type: 'array',
                          description:
                            'A list of headers to check for the presence of, without\nincluding their actual values.\n',
                          items: {
                            type: 'string',
                          },
                        },
                        exclude: {
                          type: 'array',
                          description: 'A list of headers to ignore.\n',
                          items: {
                            type: 'string',
                          },
                        },
                        include: {
                          type: 'array',
                          description: 'A list of headers to include.\n',
                          items: {
                            type: 'string',
                          },
                        },
                      },
                      required: [],
                    },
                    host: {
                      type: 'object',
                      description: 'Determines which host header to include in the Cache Key.\n',
                      properties: {
                        resolved: {
                          type: 'boolean',
                          description:
                            'Whether to include the Host header in the HTTP request sent\nto the origin.\n',
                        },
                      },
                      required: [],
                    },
                    query_string: {
                      type: 'object',
                      description:
                        'Controls which URL query string parameters go into the Cache\nKey. Exactly one of `include` or `exclude` is expected.\n',
                      properties: {
                        exclude: {
                          anyOf: [
                            {
                              type: 'string',
                              description: 'Ignore all query string parameters.',
                              enum: ['*'],
                            },
                            {
                              type: 'array',
                              description: 'A list of query string parameters to ignore.\n',
                              items: {
                                type: 'string',
                              },
                            },
                          ],
                          description: 'Ignore all query string parameters.',
                        },
                        include: {
                          anyOf: [
                            {
                              type: 'string',
                              description: 'Include all query string parameters.',
                              enum: ['*'],
                            },
                            {
                              type: 'array',
                              description: 'A list of query string parameters to include.\n',
                              items: {
                                type: 'string',
                              },
                            },
                          ],
                          description: 'Include all query string parameters.',
                        },
                      },
                      required: [],
                    },
                    user: {
                      type: 'object',
                      description:
                        'Feature fields to add features about the end-user (client) into\nthe Cache Key.\n',
                      properties: {
                        device_type: {
                          type: 'boolean',
                          description:
                            'Classifies a request as `mobile`, `desktop`, or `tablet`\nbased on the User Agent.\n',
                        },
                        geo: {
                          type: 'boolean',
                          description: "Includes the client's country, derived from the IP address.\n",
                        },
                        lang: {
                          type: 'boolean',
                          description:
                            'Includes the first language code contained in the\n`Accept-Language` header sent by the client.\n',
                        },
                      },
                      required: [],
                    },
                  },
                  required: [],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Cache Level',
              properties: {
                id: {
                  type: 'string',
                  description: 'Apply custom caching based on the option selected.',
                  enum: ['cache_level'],
                },
                value: {
                  type: 'string',
                  description:
                    '* `bypass`: Cloudflare does not cache.\n* `basic`: Delivers resources from cache when there is no query\n  string.\n* `simplified`: Delivers the same resource to everyone independent\n  of the query string.\n* `aggressive`: Caches all static content that has a query string.\n* `cache_everything`: Treats all content as static and caches all\n  file types beyond the [Cloudflare default cached\n  content](https://developers.cloudflare.com/cache/concepts/default-cache-behavior/#default-cached-file-extensions).',
                  enum: ['bypass', 'basic', 'simplified', 'aggressive', 'cache_everything'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Cache on Cookie',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Apply the Cache Everything option (Cache Level setting) based on a\nregular expression match against a cookie name.',
                  enum: ['cache_on_cookie'],
                },
                value: {
                  type: 'string',
                  description: 'The regular expression to use for matching cookie names in the\nrequest.\n',
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Cache TTL by Status Code',
              properties: {
                id: {
                  type: 'string',
                  description:
                    "Enterprise customers can set cache time-to-live (TTL) based on the\nresponse status from the origin web server. Cache TTL refers to the\nduration of a resource in the Cloudflare network before being\nmarked as stale or discarded from cache. Status codes are returned\nby a resource's origin. Setting cache TTL based on response status\noverrides the default cache behavior (standard caching) for static\nfiles and overrides cache instructions sent by the origin web\nserver. To cache non-static assets, set a Cache Level of Cache\nEverything using a Page Rule. Setting no-store Cache-Control or a\nlow TTL (using `max-age`/`s-maxage`) increases requests to origin\nweb servers and decreases performance.",
                  enum: ['cache_ttl_by_status'],
                },
                value: {
                  type: 'object',
                  description:
                    'A JSON object containing status codes and their corresponding TTLs.\nEach key-value pair in the cache TTL by status cache rule has the\nfollowing syntax\n- `status_code`: An integer value such as 200 or 500. status_code\n  matches the exact status code from the origin web server. Valid\n  status codes are between 100-999.\n- `status_code_range`: Integer values for from and to.\n  status_code_range matches any status code from the origin web\n  server within the specified range.\n- `value`: An integer value that defines the duration an asset is\n  valid in seconds or one of the following strings: no-store\n  (equivalent to -1), no-cache (equivalent to 0).\n',
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Disable Apps',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Turn off all active [Cloudflare Apps](https://developers.cloudflare.com/support/more-dashboard-apps/cloudflare-apps/)\n(deprecated).',
                  enum: ['disable_apps'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Disable Performance',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Turn off\n[Rocket Loader](https://developers.cloudflare.com/speed/optimization/content/rocket-loader/),\n[Mirage](https://developers.cloudflare.com/speed/optimization/images/mirage/), and\n[Polish](https://developers.cloudflare.com/images/polish/).',
                  enum: ['disable_performance'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Disable Security',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Turn off\n[Email Obfuscation](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/),\n[Rate Limiting (previous version, deprecated)](https://developers.cloudflare.com/waf/reference/legacy/old-rate-limiting/),\n[Scrape Shield](https://developers.cloudflare.com/waf/tools/scrape-shield/),\n[URL (Zone) Lockdown](https://developers.cloudflare.com/waf/tools/zone-lockdown/), and\n[WAF managed rules (previous version, deprecated)](https://developers.cloudflare.com/waf/reference/legacy/old-waf-managed-rules/).',
                  enum: ['disable_security'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Disable Zaraz',
              properties: {
                id: {
                  type: 'string',
                  description: 'Turn off [Zaraz](https://developers.cloudflare.com/zaraz/).',
                  enum: ['disable_zaraz'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Edge Cache TTL',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Specify how long to cache a resource in the Cloudflare global\nnetwork. *Edge Cache TTL* is not visible in response headers.',
                  enum: ['edge_cache_ttl'],
                },
                value: {
                  type: 'integer',
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Email Obfuscation',
              properties: {
                id: {
                  type: 'string',
                  description: 'Turn on or off **Email Obfuscation**.',
                  enum: ['email_obfuscation'],
                },
                value: {
                  type: 'string',
                  description: 'The status of Email Obfuscation.',
                  enum: ['on', 'off'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Origin Cache Control',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Origin Cache Control is enabled by default for Free, Pro, and\nBusiness domains and disabled by default for Enterprise domains.',
                  enum: ['explicit_cache_control'],
                },
                value: {
                  type: 'string',
                  description: 'The status of Origin Cache Control.',
                  enum: ['on', 'off'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Forwarding URL',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Redirects one URL to another using an `HTTP 301/302` redirect. Refer\nto [Wildcard matching and referencing](https://developers.cloudflare.com/rules/page-rules/reference/wildcard-matching/).',
                  enum: ['forwarding_url'],
                },
                value: {
                  type: 'object',
                  properties: {
                    status_code: {
                      type: 'string',
                      description:
                        'The status code to use for the URL redirect. 301 is a permanent\nredirect. 302 is a temporary redirect.',
                      enum: [301, 302],
                    },
                    url: {
                      type: 'string',
                      description:
                        "The URL to redirect the request to.\nNotes: ${num} refers to the position of '*' in the constraint value.",
                    },
                  },
                  required: [],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Host Header Override',
              properties: {
                id: {
                  type: 'string',
                  description: 'Apply a specific host header.',
                  enum: ['host_header_override'],
                },
                value: {
                  type: 'string',
                  description: 'The hostname to use in the `Host` header',
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'IP Geolocation Header',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Cloudflare adds a CF-IPCountry HTTP header containing the country code that corresponds to the visitor.',
                  enum: ['ip_geolocation'],
                },
                value: {
                  type: 'string',
                  description: 'The status of adding the IP Geolocation Header.',
                  enum: ['on', 'off'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Mirage',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Cloudflare Mirage reduces bandwidth used by images in mobile browsers.\nIt can accelerate loading of image-heavy websites on very slow mobile connections and HTTP/1.',
                  enum: ['mirage'],
                },
                value: {
                  type: 'string',
                  description: 'The status of Mirage.',
                  enum: ['on', 'off'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Opportunistic Encryption',
              properties: {
                id: {
                  type: 'string',
                  description:
                    "Opportunistic Encryption allows browsers to access HTTP URIs over an encrypted TLS channel.\nIt's not a substitute for HTTPS, but provides additional security for otherwise vulnerable requests.",
                  enum: ['opportunistic_encryption'],
                },
                value: {
                  type: 'string',
                  description: 'The status of Opportunistic Encryption.',
                  enum: ['on', 'off'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Origin Error Page Passthru',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Turn on or off Cloudflare error pages generated from issues sent from the origin server. If enabled, this setting triggers error pages issued by the origin.',
                  enum: ['origin_error_page_pass_thru'],
                },
                value: {
                  type: 'string',
                  description: 'The status of Origin Error Page Passthru.',
                  enum: ['on', 'off'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Polish',
              properties: {
                id: {
                  type: 'string',
                  description: 'Apply options from the Polish feature of the Cloudflare Speed app.',
                  enum: ['polish'],
                },
                value: {
                  type: 'string',
                  description: 'The level of Polish you want applied to your origin.',
                  enum: ['off', 'lossless', 'lossy'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Resolve Override',
              properties: {
                id: {
                  type: 'string',
                  description: 'Change the origin address to the value specified in this setting.',
                  enum: ['resolve_override'],
                },
                value: {
                  type: 'string',
                  description: 'The origin address you want to override with.\n',
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Respect Strong ETags',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Turn on or off byte-for-byte equivalency checks between the\nCloudflare cache and the origin server.',
                  enum: ['respect_strong_etag'],
                },
                value: {
                  type: 'string',
                  description: 'The status of Respect Strong ETags',
                  enum: ['on', 'off'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Response Buffering',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Turn on or off whether Cloudflare should wait for an entire file\nfrom the origin server before forwarding it to the site visitor. By\ndefault, Cloudflare sends packets to the client as they arrive from\nthe origin server.',
                  enum: ['response_buffering'],
                },
                value: {
                  type: 'string',
                  description: 'The status of Response Buffering',
                  enum: ['on', 'off'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Rocket Loader',
              properties: {
                id: {
                  type: 'string',
                  description: 'Turn on or off Rocket Loader in the Cloudflare Speed app.',
                  enum: ['rocket_loader'],
                },
                value: {
                  type: 'string',
                  description: 'The status of Rocket Loader',
                  enum: ['on', 'off'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Security Level',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Control options for the **Security Level** feature from the **Security** app.',
                  enum: ['security_level'],
                },
                value: {
                  type: 'string',
                  enum: ['off', 'essentially_off', 'low', 'medium', 'high', 'under_attack'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'Query String Sort',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Turn on or off the reordering of query strings. When query strings have the same structure, caching improves.',
                  enum: ['sort_query_string_for_cache'],
                },
                value: {
                  type: 'string',
                  description: 'The status of Query String Sort',
                  enum: ['on', 'off'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'SSL',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Control options for the SSL feature of the Edge Certificates tab in the Cloudflare SSL/TLS app.',
                  enum: ['ssl'],
                },
                value: {
                  type: 'string',
                  description: 'The encryption mode that Cloudflare uses to connect to your origin server.',
                  enum: ['off', 'flexible', 'full', 'strict', 'origin_pull'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'True Client IP Header',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Turn on or off the True-Client-IP Header feature of the Cloudflare Network app.',
                  enum: ['true_client_ip_header'],
                },
                value: {
                  type: 'string',
                  description: 'The status of True Client IP Header.',
                  enum: ['on', 'off'],
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'WAF',
              properties: {
                id: {
                  type: 'string',
                  description:
                    'Turn on or off [WAF managed rules (previous version, deprecated)](https://developers.cloudflare.com/waf/reference/legacy/old-waf-managed-rules/).\nYou cannot enable or disable individual WAF managed rules via Page Rules.',
                  enum: ['waf'],
                },
                value: {
                  type: 'string',
                  description: 'The status of WAF managed rules (previous version).',
                  enum: ['on', 'off'],
                },
              },
              required: [],
            },
          ],
        },
      },
      targets: {
        type: 'array',
        description: 'The rule targets to evaluate on each request.',
        items: {
          type: 'object',
          description: 'URL target.',
          properties: {
            constraint: {
              type: 'object',
              description: 'String constraint.',
              properties: {
                operator: {
                  type: 'string',
                  description:
                    "The matches operator can use asterisks and pipes as wildcard and 'or' operators.",
                  enum: ['matches', 'contains', 'equals', 'not_equal', 'not_contain'],
                },
                value: {
                  type: 'string',
                  description:
                    "The URL pattern to match against the current request. The pattern may contain up to four asterisks ('*') as placeholders.",
                },
              },
              required: ['operator', 'value'],
            },
            target: {
              type: 'string',
              description: 'A target based on the URL of the request.',
              enum: ['url'],
            },
          },
          required: [],
        },
      },
      priority: {
        type: 'integer',
        description:
          'The priority of the rule, used to define which Page Rule is processed\nover another. A higher number indicates a higher priority. For example,\nif you have a catch-all Page Rule (rule A: `/images/*`) but want a more\nspecific Page Rule to take precedence (rule B: `/images/special/*`),\nspecify a higher priority for rule B so it overrides rule A.\n',
      },
      status: {
        type: 'string',
        description: 'The status of the Page Rule.',
        enum: ['active', 'disabled'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.pageRules.create(body);
};

export default { metadata, tool, handler };
