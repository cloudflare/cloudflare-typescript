// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'abuse_reports',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_abuse_reports',
  description: 'Submit the Abuse Report of a particular type',
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
            description: 'The abuse report type',
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
            enum: [0, 1],
          },
          city: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          country: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          host_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          original_work: {
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
          act: {
            type: 'string',
            description: 'The abuse report type',
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
              'A list of IP addresses separated by ‘\n’ (new line character). The list of destination IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique',
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
          justification: {
            type: 'string',
            description:
              'A detailed description of the infringement, including any necessary access details and the exact steps needed to view the content, not exceeding 5000 characters',
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
            enum: ['send', 'send-anon', 'none'],
          },
          ncsei_subject_representation: {
            type: 'boolean',
            description: 'If the submitter is the target of NCSEI in the URLs of the abuse report.',
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
              'A list of IP addresses separated by ‘\n’ (new line character). The list of source IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique',
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
              'A list of valid URLs separated by ‘\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          report_type: {
            type: 'string',
            description: 'The abuse report type',
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
          host_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          justification: {
            type: 'string',
            description:
              'A detailed description of the infringement, including any necessary access details and the exact steps needed to view the content, not exceeding 5000 characters',
          },
          owner_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
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
          act: {
            type: 'string',
            description: 'The abuse report type',
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
            enum: [0, 1],
          },
          city: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          destination_ips: {
            type: 'string',
            description:
              'A list of IP addresses separated by ‘\n’ (new line character). The list of destination IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique',
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
          ncmec_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          ncsei_subject_representation: {
            type: 'boolean',
            description: 'If the submitter is the target of NCSEI in the URLs of the abuse report.',
          },
          original_work: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
          signature: {
            type: 'string',
            description:
              "Required for DMCA reports, should be same as Name. An affirmation that all information in the report is true and accurate while agreeing to the policies of Cloudflare's abuse reports",
          },
          source_ips: {
            type: 'string',
            description:
              'A list of IP addresses separated by ‘\n’ (new line character). The list of source IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique',
          },
          state: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
          urls: {
            type: 'string',
            description:
              'A list of valid URLs separated by ‘\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          report_type: {
            type: 'string',
            description: 'The abuse report type',
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
          host_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          justification: {
            type: 'string',
            description:
              'A detailed description of the infringement, including any necessary access details and the exact steps needed to view the content, not exceeding 5000 characters',
          },
          owner_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          act: {
            type: 'string',
            description: 'The abuse report type',
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
            enum: [0, 1],
          },
          city: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          destination_ips: {
            type: 'string',
            description:
              'A list of IP addresses separated by ‘\n’ (new line character). The list of destination IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique',
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
          ncmec_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          ncsei_subject_representation: {
            type: 'boolean',
            description: 'If the submitter is the target of NCSEI in the URLs of the abuse report.',
          },
          original_work: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
          signature: {
            type: 'string',
            description:
              "Required for DMCA reports, should be same as Name. An affirmation that all information in the report is true and accurate while agreeing to the policies of Cloudflare's abuse reports",
          },
          source_ips: {
            type: 'string',
            description:
              'A list of IP addresses separated by ‘\n’ (new line character). The list of source IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique',
          },
          state: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
              'A list of valid URLs separated by ‘\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          report_type: {
            type: 'string',
            description: 'The abuse report type',
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
          host_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          justification: {
            type: 'string',
            description:
              'A detailed description of the infringement, including any necessary access details and the exact steps needed to view the content, not exceeding 5000 characters',
          },
          owner_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          act: {
            type: 'string',
            description: 'The abuse report type',
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
            enum: [0, 1],
          },
          city: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          destination_ips: {
            type: 'string',
            description:
              'A list of IP addresses separated by ‘\n’ (new line character). The list of destination IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique',
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
          ncmec_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          ncsei_subject_representation: {
            type: 'boolean',
            description: 'If the submitter is the target of NCSEI in the URLs of the abuse report.',
          },
          original_work: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
          signature: {
            type: 'string',
            description:
              "Required for DMCA reports, should be same as Name. An affirmation that all information in the report is true and accurate while agreeing to the policies of Cloudflare's abuse reports",
          },
          source_ips: {
            type: 'string',
            description:
              'A list of IP addresses separated by ‘\n’ (new line character). The list of source IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique',
          },
          state: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
              'A list of valid URLs separated by ‘\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          report_type: {
            type: 'string',
            description: 'The abuse report type',
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
          host_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          justification: {
            type: 'string',
            description:
              'A detailed description of the infringement, including any necessary access details and the exact steps needed to view the content, not exceeding 5000 characters',
          },
          ncmec_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          owner_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          act: {
            type: 'string',
            description: 'The abuse report type',
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
            enum: [0, 1],
          },
          city: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          destination_ips: {
            type: 'string',
            description:
              'A list of IP addresses separated by ‘\n’ (new line character). The list of destination IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique',
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
          ncsei_subject_representation: {
            type: 'boolean',
            description: 'If the submitter is the target of NCSEI in the URLs of the abuse report.',
          },
          original_work: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
          signature: {
            type: 'string',
            description:
              "Required for DMCA reports, should be same as Name. An affirmation that all information in the report is true and accurate while agreeing to the policies of Cloudflare's abuse reports",
          },
          source_ips: {
            type: 'string',
            description:
              'A list of IP addresses separated by ‘\n’ (new line character). The list of source IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique',
          },
          state: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
              'A list of valid URLs separated by ‘\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          report_type: {
            type: 'string',
            description: 'The abuse report type',
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
          host_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          justification: {
            type: 'string',
            description:
              'A detailed description of the infringement, including any necessary access details and the exact steps needed to view the content, not exceeding 5000 characters',
          },
          owner_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          act: {
            type: 'string',
            description: 'The abuse report type',
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
            enum: [0, 1],
          },
          city: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          destination_ips: {
            type: 'string',
            description:
              'A list of IP addresses separated by ‘\n’ (new line character). The list of destination IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique',
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
          ncmec_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          ncsei_subject_representation: {
            type: 'boolean',
            description: 'If the submitter is the target of NCSEI in the URLs of the abuse report.',
          },
          original_work: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
          signature: {
            type: 'string',
            description:
              "Required for DMCA reports, should be same as Name. An affirmation that all information in the report is true and accurate while agreeing to the policies of Cloudflare's abuse reports",
          },
          source_ips: {
            type: 'string',
            description:
              'A list of IP addresses separated by ‘\n’ (new line character). The list of source IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique',
          },
          state: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
              'A list of valid URLs separated by ‘\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          report_type: {
            type: 'string',
            description: 'The abuse report type',
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
          owner_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
          },
          act: {
            type: 'string',
            description: 'The abuse report type',
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
            enum: [0, 1],
          },
          city: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          destination_ips: {
            type: 'string',
            description:
              'A list of IP addresses separated by ‘\n’ (new line character). The list of destination IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique',
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
            enum: ['send', 'send-anon', 'none'],
          },
          justification: {
            type: 'string',
            description:
              'A detailed description of the infringement, including any necessary access details and the exact steps needed to view the content, not exceeding 5000 characters',
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
            enum: ['send', 'send-anon', 'none'],
          },
          ncsei_subject_representation: {
            type: 'boolean',
            description: 'If the submitter is the target of NCSEI in the URLs of the abuse report.',
          },
          original_work: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
          signature: {
            type: 'string',
            description:
              "Required for DMCA reports, should be same as Name. An affirmation that all information in the report is true and accurate while agreeing to the policies of Cloudflare's abuse reports",
          },
          source_ips: {
            type: 'string',
            description:
              'A list of IP addresses separated by ‘\n’ (new line character). The list of source IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique',
          },
          state: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
              'A list of valid URLs separated by ‘\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          report_type: {
            type: 'string',
            description: 'The abuse report type',
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
          host_notification: {
            type: 'string',
            description:
              'Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.',
            enum: ['send', 'send-anon', 'none'],
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
          act: {
            type: 'string',
            description: 'The abuse report type',
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
            enum: [0, 1],
          },
          city: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
          destination_ips: {
            type: 'string',
            description:
              'A list of IP addresses separated by ‘\n’ (new line character). The list of destination IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique',
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
          justification: {
            type: 'string',
            description:
              'A detailed description of the infringement, including any necessary access details and the exact steps needed to view the content, not exceeding 5000 characters',
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
            enum: ['send', 'send-anon', 'none'],
          },
          original_work: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
          signature: {
            type: 'string',
            description:
              "Required for DMCA reports, should be same as Name. An affirmation that all information in the report is true and accurate while agreeing to the policies of Cloudflare's abuse reports",
          },
          source_ips: {
            type: 'string',
            description:
              'A list of IP addresses separated by ‘\n’ (new line character). The list of source IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique',
          },
          state: {
            type: 'string',
            description:
              'Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
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
              'A list of valid URLs separated by ‘\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/).',
          },
        },
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { report_type, ...body } = args;
  return client.abuseReports.create(report_type, body);
};

export default { metadata, tool, handler };
