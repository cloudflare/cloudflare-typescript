// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.patterns',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'validate_dlp_zero_trust_patterns',
  description:
    'Validates whether this pattern is a valid regular expression. Rejects it if\nthe regular expression is too complex or can match an unbounded-length\nstring. The regex will be rejected if it uses `*` or `+`. Bound the maximum\nnumber of characters that can be matched using a range, e.g. `{1,100}`.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      regex: {
        type: 'string',
      },
      max_match_bytes: {
        type: 'integer',
        description:
          'Maximum number of bytes that the regular expression can match.\n\nIf this is `null` then there is no limit on the length. Patterns can use\n`*` and `+`. Otherwise repeats should use a range `{m,n}` to restrict\npatterns to the length. If this field is missing, then a default length\nlimit is used.\n\nNote that the length is specified in bytes. Since regular expressions\nuse UTF-8 the pattern `.` can match up to 4 bytes. Hence `.{1,256}`\nhas a maximum length of 1024 bytes.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.dlp.patterns.validate(body);
};

export default { metadata, tool, handler };
