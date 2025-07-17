// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'abuse_reports',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/abuse-reports/{report_type}',
  operationId: 'SubmitAbuseReport',
};

export const tool: Tool = {
  name: 'create_abuse_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSubmit the Abuse Report of a particular type",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          report_type: {
            type: 'string',
            description: 'The abuse report type.',
            enum: [
              'abuse_dmca',
              'abuse_trademark',
              'abuse_general',
              'abuse_phishing',
              'abuse_children',
              'abuse_threat',
              'abuse_registrar_whois',
              'abuse_ncsei',
            ],
          },
          act: {
            type: 'string',
            enum: [
              'abuse_dmca',
              'abuse_trademark',
              'abuse_general',
              'abuse_phishing',
              'abuse_children',
              'abuse_threat',
              'abuse_registrar_whois',
              'abuse_ncsei',
            ],
          },
          address1: {
            type: 'string',
            description:
              'Text not exceeding 100 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          agent_name: {
            type: 'string',
            description:
              'The name of the copyright holder. Text not exceeding 60 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          agree: {
            type: 'string',
            description: 'Can be `0` for false or `1` for true. Must be value: 1 for DMCA reports',
            enum: [1],
          },
          city: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          country: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).\n',
          },
          email: {
            type: 'string',
            description:
              'A valid email of the abuse reporter. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          email2: {
            type: 'string',
            description: 'Should match the value provided in `email`',
          },
          host_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send'],
          },
          name: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          original_work: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).\n',
          },
          owner_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send'],
          },
          signature: {
            type: 'string',
            description:
              "Required for DMCA reports, should be same as Name. An affirmation that all information in the report is true and accurate while agreeing to the policies of Cloudflare's abuse reports",
          },
          state: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          urls: {
            type: 'string',
            description:
              'A list of valid URLs separated by ‘\\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          comments: {
            type: 'string',
            description: 'Any additional comments about the infringement not exceeding 2000 characters',
          },
          company: {
            type: 'string',
            description:
              'Text not exceeding 100 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          reported_country: {
            type: 'string',
            description: 'Text containing 2 characters',
          },
          reported_user_agent: {
            type: 'string',
            description: 'Text not exceeding 255 characters',
          },
          tele: {
            type: 'string',
            description:
              'Text not exceeding 20 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          title: {
            type: 'string',
            description: 'Text not exceeding 255 characters',
          },
        },
        required: [
          'account_id',
          'report_type',
          'act',
          'address1',
          'agent_name',
          'agree',
          'city',
          'country',
          'email',
          'email2',
          'host_notification',
          'name',
          'original_work',
          'owner_notification',
          'signature',
          'state',
          'urls',
        ],
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          report_type: {
            type: 'string',
            description: 'The abuse report type.',
            enum: [
              'abuse_dmca',
              'abuse_trademark',
              'abuse_general',
              'abuse_phishing',
              'abuse_children',
              'abuse_threat',
              'abuse_registrar_whois',
              'abuse_ncsei',
            ],
          },
          act: {
            type: 'string',
            enum: [
              'abuse_trademark',
              'abuse_dmca',
              'abuse_general',
              'abuse_phishing',
              'abuse_children',
              'abuse_threat',
              'abuse_registrar_whois',
              'abuse_ncsei',
            ],
          },
          email: {
            type: 'string',
            description:
              'A valid email of the abuse reporter. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          email2: {
            type: 'string',
            description: 'Should match the value provided in `email`',
          },
          host_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send'],
          },
          justification: {
            type: 'string',
            description:
              'A detailed description of the infringement, including any necessary access details and the exact steps needed to view the content, not exceeding 5000 characters.\n',
          },
          name: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          owner_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send'],
          },
          trademark_number: {
            type: 'string',
            description: 'Text not exceeding 1000 characters',
          },
          trademark_office: {
            type: 'string',
            description: 'Text not exceeding 1000 characters',
          },
          trademark_symbol: {
            type: 'string',
            description: 'Text not exceeding 1000 characters',
          },
          urls: {
            type: 'string',
            description:
              'A list of valid URLs separated by ‘\\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          comments: {
            type: 'string',
            description: 'Any additional comments about the infringement not exceeding 2000 characters',
          },
          company: {
            type: 'string',
            description:
              'Text not exceeding 100 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          reported_country: {
            type: 'string',
            description: 'Text containing 2 characters',
          },
          reported_user_agent: {
            type: 'string',
            description: 'Text not exceeding 255 characters',
          },
          tele: {
            type: 'string',
            description:
              'Text not exceeding 20 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          title: {
            type: 'string',
            description: 'Text not exceeding 255 characters',
          },
        },
        required: [
          'account_id',
          'report_type',
          'act',
          'email',
          'email2',
          'host_notification',
          'justification',
          'name',
          'owner_notification',
          'trademark_number',
          'trademark_office',
          'trademark_symbol',
          'urls',
        ],
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          report_type: {
            type: 'string',
            description: 'The abuse report type.',
            enum: [
              'abuse_dmca',
              'abuse_trademark',
              'abuse_general',
              'abuse_phishing',
              'abuse_children',
              'abuse_threat',
              'abuse_registrar_whois',
              'abuse_ncsei',
            ],
          },
          act: {
            type: 'string',
            enum: [
              'abuse_general',
              'abuse_dmca',
              'abuse_trademark',
              'abuse_phishing',
              'abuse_children',
              'abuse_threat',
              'abuse_registrar_whois',
              'abuse_ncsei',
            ],
          },
          email: {
            type: 'string',
            description:
              'A valid email of the abuse reporter. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          email2: {
            type: 'string',
            description: 'Should match the value provided in `email`',
          },
          host_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon'],
          },
          justification: {
            type: 'string',
            description:
              'A detailed description of the infringement, including any necessary access details and the exact steps needed to view the content, not exceeding 5000 characters.\n',
          },
          name: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          owner_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          urls: {
            type: 'string',
            description:
              'A list of valid URLs separated by ‘\\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          comments: {
            type: 'string',
            description: 'Any additional comments about the infringement not exceeding 2000 characters',
          },
          company: {
            type: 'string',
            description:
              'Text not exceeding 100 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          destination_ips: {
            type: 'string',
            description:
              'A list of IP addresses separated by ‘\\n’ (new line character). The list of destination IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique.',
          },
          ports_protocols: {
            type: 'string',
            description:
              'A comma separated list of ports and protocols e.g. 80/TCP, 22/UDP. The total size of the field should not exceed 2000 characters. Each individual port/protocol should not exceed 100 characters. The list should not have more than 30 unique ports and protocols.',
          },
          reported_country: {
            type: 'string',
            description: 'Text containing 2 characters',
          },
          reported_user_agent: {
            type: 'string',
            description: 'Text not exceeding 255 characters',
          },
          source_ips: {
            type: 'string',
            description:
              'A list of IP addresses separated by ‘\\n’ (new line character). The list of source IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique.',
          },
          tele: {
            type: 'string',
            description:
              'Text not exceeding 20 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          title: {
            type: 'string',
            description: 'Text not exceeding 255 characters',
          },
        },
        required: [
          'account_id',
          'report_type',
          'act',
          'email',
          'email2',
          'host_notification',
          'justification',
          'name',
          'owner_notification',
          'urls',
        ],
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          report_type: {
            type: 'string',
            description: 'The abuse report type.',
            enum: [
              'abuse_dmca',
              'abuse_trademark',
              'abuse_general',
              'abuse_phishing',
              'abuse_children',
              'abuse_threat',
              'abuse_registrar_whois',
              'abuse_ncsei',
            ],
          },
          act: {
            type: 'string',
            enum: [
              'abuse_phishing',
              'abuse_dmca',
              'abuse_trademark',
              'abuse_general',
              'abuse_children',
              'abuse_threat',
              'abuse_registrar_whois',
              'abuse_ncsei',
            ],
          },
          email: {
            type: 'string',
            description:
              'A valid email of the abuse reporter. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          email2: {
            type: 'string',
            description: 'Should match the value provided in `email`',
          },
          host_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon'],
          },
          justification: {
            type: 'string',
            description:
              'A detailed description of the infringement, including any necessary access details and the exact steps needed to view the content, not exceeding 5000 characters.\n',
          },
          name: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          owner_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon'],
          },
          urls: {
            type: 'string',
            description:
              'A list of valid URLs separated by ‘\\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          comments: {
            type: 'string',
            description: 'Any additional comments about the infringement not exceeding 2000 characters',
          },
          company: {
            type: 'string',
            description:
              'Text not exceeding 100 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          original_work: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).\n',
          },
          reported_country: {
            type: 'string',
            description: 'Text containing 2 characters',
          },
          reported_user_agent: {
            type: 'string',
            description: 'Text not exceeding 255 characters',
          },
          tele: {
            type: 'string',
            description:
              'Text not exceeding 20 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          title: {
            type: 'string',
            description: 'Text not exceeding 255 characters',
          },
        },
        required: [
          'account_id',
          'report_type',
          'act',
          'email',
          'email2',
          'host_notification',
          'justification',
          'name',
          'owner_notification',
          'urls',
        ],
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          report_type: {
            type: 'string',
            description: 'The abuse report type.',
            enum: [
              'abuse_dmca',
              'abuse_trademark',
              'abuse_general',
              'abuse_phishing',
              'abuse_children',
              'abuse_threat',
              'abuse_registrar_whois',
              'abuse_ncsei',
            ],
          },
          act: {
            type: 'string',
            enum: [
              'abuse_children',
              'abuse_dmca',
              'abuse_trademark',
              'abuse_general',
              'abuse_phishing',
              'abuse_threat',
              'abuse_registrar_whois',
              'abuse_ncsei',
            ],
          },
          email: {
            type: 'string',
            description:
              'A valid email of the abuse reporter. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          email2: {
            type: 'string',
            description: 'Should match the value provided in `email`',
          },
          host_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon'],
          },
          justification: {
            type: 'string',
            description:
              'A detailed description of the infringement, including any necessary access details and the exact steps needed to view the content, not exceeding 5000 characters.\n',
          },
          name: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          ncmec_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon'],
          },
          owner_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          urls: {
            type: 'string',
            description:
              'A list of valid URLs separated by ‘\\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          comments: {
            type: 'string',
            description: 'Any additional comments about the infringement not exceeding 2000 characters',
          },
          company: {
            type: 'string',
            description:
              'Text not exceeding 100 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          country: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).\n',
          },
          reported_country: {
            type: 'string',
            description: 'Text containing 2 characters',
          },
          reported_user_agent: {
            type: 'string',
            description: 'Text not exceeding 255 characters',
          },
          tele: {
            type: 'string',
            description:
              'Text not exceeding 20 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          title: {
            type: 'string',
            description: 'Text not exceeding 255 characters',
          },
        },
        required: [
          'account_id',
          'report_type',
          'act',
          'email',
          'email2',
          'host_notification',
          'justification',
          'name',
          'ncmec_notification',
          'owner_notification',
          'urls',
        ],
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          report_type: {
            type: 'string',
            description: 'The abuse report type.',
            enum: [
              'abuse_dmca',
              'abuse_trademark',
              'abuse_general',
              'abuse_phishing',
              'abuse_children',
              'abuse_threat',
              'abuse_registrar_whois',
              'abuse_ncsei',
            ],
          },
          act: {
            type: 'string',
            enum: [
              'abuse_threat',
              'abuse_dmca',
              'abuse_trademark',
              'abuse_general',
              'abuse_phishing',
              'abuse_children',
              'abuse_registrar_whois',
              'abuse_ncsei',
            ],
          },
          email: {
            type: 'string',
            description:
              'A valid email of the abuse reporter. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          email2: {
            type: 'string',
            description: 'Should match the value provided in `email`',
          },
          host_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon'],
          },
          justification: {
            type: 'string',
            description:
              'A detailed description of the infringement, including any necessary access details and the exact steps needed to view the content, not exceeding 5000 characters.\n',
          },
          name: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          owner_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon'],
          },
          urls: {
            type: 'string',
            description:
              'A list of valid URLs separated by ‘\\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          comments: {
            type: 'string',
            description: 'Any additional comments about the infringement not exceeding 2000 characters',
          },
          company: {
            type: 'string',
            description:
              'Text not exceeding 100 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          reported_country: {
            type: 'string',
            description: 'Text containing 2 characters',
          },
          reported_user_agent: {
            type: 'string',
            description: 'Text not exceeding 255 characters',
          },
          tele: {
            type: 'string',
            description:
              'Text not exceeding 20 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          title: {
            type: 'string',
            description: 'Text not exceeding 255 characters',
          },
        },
        required: [
          'account_id',
          'report_type',
          'act',
          'email',
          'email2',
          'host_notification',
          'justification',
          'name',
          'owner_notification',
          'urls',
        ],
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          report_type: {
            type: 'string',
            description: 'The abuse report type.',
            enum: [
              'abuse_dmca',
              'abuse_trademark',
              'abuse_general',
              'abuse_phishing',
              'abuse_children',
              'abuse_threat',
              'abuse_registrar_whois',
              'abuse_ncsei',
            ],
          },
          act: {
            type: 'string',
            enum: [
              'abuse_registrar_whois',
              'abuse_dmca',
              'abuse_trademark',
              'abuse_general',
              'abuse_phishing',
              'abuse_children',
              'abuse_threat',
              'abuse_ncsei',
            ],
          },
          email: {
            type: 'string',
            description:
              'A valid email of the abuse reporter. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          email2: {
            type: 'string',
            description: 'Should match the value provided in `email`',
          },
          name: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          owner_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          urls: {
            type: 'string',
            description:
              'A list of valid URLs separated by ‘\\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          comments: {
            type: 'string',
            description: 'Any additional comments about the infringement not exceeding 2000 characters',
          },
          company: {
            type: 'string',
            description:
              'Text not exceeding 100 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          reported_country: {
            type: 'string',
            description: 'Text containing 2 characters',
          },
          reported_user_agent: {
            type: 'string',
            description: 'Text not exceeding 255 characters',
          },
          tele: {
            type: 'string',
            description:
              'Text not exceeding 20 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          title: {
            type: 'string',
            description: 'Text not exceeding 255 characters',
          },
        },
        required: [
          'account_id',
          'report_type',
          'act',
          'email',
          'email2',
          'name',
          'owner_notification',
          'urls',
        ],
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          report_type: {
            type: 'string',
            description: 'The abuse report type.',
            enum: [
              'abuse_dmca',
              'abuse_trademark',
              'abuse_general',
              'abuse_phishing',
              'abuse_children',
              'abuse_threat',
              'abuse_registrar_whois',
              'abuse_ncsei',
            ],
          },
          act: {
            type: 'string',
            enum: [
              'abuse_ncsei',
              'abuse_dmca',
              'abuse_trademark',
              'abuse_general',
              'abuse_phishing',
              'abuse_children',
              'abuse_threat',
              'abuse_registrar_whois',
            ],
          },
          email: {
            type: 'string',
            description:
              'A valid email of the abuse reporter. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          email2: {
            type: 'string',
            description: 'Should match the value provided in `email`',
          },
          host_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon'],
          },
          name: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          ncsei_subject_representation: {
            type: 'boolean',
            description: 'If the submitter is the target of NCSEI in the URLs of the abuse report.',
          },
          owner_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          urls: {
            type: 'string',
            description:
              'A list of valid URLs separated by ‘\\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          comments: {
            type: 'string',
            description: 'Any additional comments about the infringement not exceeding 2000 characters',
          },
          company: {
            type: 'string',
            description:
              'Text not exceeding 100 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          country: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).\n',
          },
          reported_country: {
            type: 'string',
            description: 'Text containing 2 characters',
          },
          reported_user_agent: {
            type: 'string',
            description: 'Text not exceeding 255 characters',
          },
          tele: {
            type: 'string',
            description:
              'Text not exceeding 20 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          title: {
            type: 'string',
            description: 'Text not exceeding 255 characters',
          },
        },
        required: [
          'account_id',
          'report_type',
          'act',
          'email',
          'email2',
          'host_notification',
          'name',
          'ncsei_subject_representation',
          'owner_notification',
          'urls',
        ],
      },
    ],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { report_type, ...body } = args as any;
  return asTextContentResult(await client.abuseReports.create(report_type, body));
};

export default { metadata, tool, handler };
