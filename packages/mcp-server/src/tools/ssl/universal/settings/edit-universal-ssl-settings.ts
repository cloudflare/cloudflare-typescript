// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.universal.settings',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_universal_ssl_settings',
  description: 'Patch Universal SSL Settings for a Zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      enabled: {
        type: 'boolean',
        description:
          "Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. If there are no advanced certificates or custom certificates uploaded for the domain, visitors will be unable to access the domain over HTTPS.\n\nBy disabling Universal SSL, you understand that the following Cloudflare settings and preferences will result in visitors being unable to visit your domain unless you have uploaded a custom certificate or purchased an advanced certificate.\n\n* HSTS\n* Always Use HTTPS\n* Opportunistic Encryption\n* Onion Routing\n* Any Page Rules redirecting traffic to HTTPS\n\nSimilarly, any HTTP redirect to HTTPS at the origin while the Cloudflare proxy is enabled will result in users being unable to visit your site without a valid certificate at Cloudflare's edge.\n\nIf you do not have a valid custom or advanced certificate at Cloudflare's edge and are unsure if any of the above Cloudflare settings are enabled, or if any HTTP redirects exist at your origin, we advise leaving Universal SSL enabled for your domain.",
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.ssl.universal.settings.edit(body);
};

export default { metadata, tool, handler };
