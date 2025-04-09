// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'alerting.policies',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_alerting_policies',
  description: 'Creates a new Notification policy.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account id',
      },
      alert_type: {
        type: 'string',
        description:
          'Refers to which event will trigger a Notification dispatch. You can use the endpoint to get available alert types which then will give you a list of possible values.',
        enum: [
          'access_custom_certificate_expiration_type',
          'advanced_ddos_attack_l4_alert',
          'advanced_ddos_attack_l7_alert',
          'advanced_http_alert_error',
          'bgp_hijack_notification',
          'billing_usage_alert',
          'block_notification_block_removed',
          'block_notification_new_block',
          'block_notification_review_rejected',
          'brand_protection_alert',
          'brand_protection_digest',
          'clickhouse_alert_fw_anomaly',
          'clickhouse_alert_fw_ent_anomaly',
          'cloudforce_one_request_notification',
          'custom_analytics',
          'custom_ssl_certificate_event_type',
          'dedicated_ssl_certificate_event_type',
          'device_connectivity_anomaly_alert',
          'dos_attack_l4',
          'dos_attack_l7',
          'expiring_service_token_alert',
          'failing_logpush_job_disabled_alert',
          'fbm_auto_advertisement',
          'fbm_dosd_attack',
          'fbm_volumetric_attack',
          'health_check_status_notification',
          'hostname_aop_custom_certificate_expiration_type',
          'http_alert_edge_error',
          'http_alert_origin_error',
          'image_notification',
          'image_resizing_notification',
          'incident_alert',
          'load_balancing_health_alert',
          'load_balancing_pool_enablement_alert',
          'logo_match_alert',
          'magic_tunnel_health_check_event',
          'magic_wan_tunnel_health',
          'maintenance_event_notification',
          'mtls_certificate_store_certificate_expiration_type',
          'pages_event_alert',
          'radar_notification',
          'real_origin_monitoring',
          'scriptmonitor_alert_new_code_change_detections',
          'scriptmonitor_alert_new_hosts',
          'scriptmonitor_alert_new_malicious_hosts',
          'scriptmonitor_alert_new_malicious_scripts',
          'scriptmonitor_alert_new_malicious_url',
          'scriptmonitor_alert_new_max_length_resource_url',
          'scriptmonitor_alert_new_resources',
          'secondary_dns_all_primaries_failing',
          'secondary_dns_primaries_failing',
          'secondary_dns_warning',
          'secondary_dns_zone_successfully_updated',
          'secondary_dns_zone_validation_warning',
          'security_insights_alert',
          'sentinel_alert',
          'stream_live_notifications',
          'synthetic_test_latency_alert',
          'synthetic_test_low_availability_alert',
          'traffic_anomalies_alert',
          'tunnel_health_event',
          'tunnel_update_event',
          'universal_ssl_event_type',
          'web_analytics_metrics_update',
          'zone_aop_custom_certificate_expiration_type',
        ],
      },
      enabled: {
        type: 'boolean',
        description: 'Whether or not the Notification policy is enabled.',
      },
      mechanisms: {
        type: 'object',
        description:
          'List of IDs that will be used when dispatching a notification. IDs for email type will be the email address.',
        properties: {
          email: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'The email address',
                },
              },
              required: [],
            },
          },
          pagerduty: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'UUID',
                },
              },
              required: [],
            },
          },
          webhooks: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'UUID',
                },
              },
              required: [],
            },
          },
        },
        required: [],
      },
      name: {
        type: 'string',
        description: 'Name of the policy.',
      },
      alert_interval: {
        type: 'string',
        description:
          'Optional specification of how often to re-alert from the same incident, not support on all alert types.',
      },
      description: {
        type: 'string',
        description: 'Optional description for the Notification policy.',
      },
      filters: {
        type: 'object',
        description:
          'Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria. This is only available for select alert types. See alert type documentation for more details.',
        properties: {
          actions: {
            type: 'array',
            description: 'Usage depends on specific alert type',
            items: {
              type: 'string',
            },
          },
          affected_asns: {
            type: 'array',
            description: 'Used for configuring radar_notification',
            items: {
              type: 'string',
            },
          },
          affected_components: {
            type: 'array',
            description: 'Used for configuring incident_alert',
            items: {
              type: 'string',
            },
          },
          affected_locations: {
            type: 'array',
            description: 'Used for configuring radar_notification',
            items: {
              type: 'string',
            },
          },
          airport_code: {
            type: 'array',
            description: 'Used for configuring maintenance_event_notification',
            items: {
              type: 'string',
            },
          },
          alert_trigger_preferences: {
            type: 'array',
            description: 'Usage depends on specific alert type',
            items: {
              type: 'string',
            },
          },
          alert_trigger_preferences_value: {
            type: 'array',
            description: 'Usage depends on specific alert type',
            items: {
              type: 'string',
            },
          },
          enabled: {
            type: 'array',
            description: 'Used for configuring load_balancing_pool_enablement_alert',
            items: {
              type: 'string',
            },
          },
          environment: {
            type: 'array',
            description: 'Used for configuring pages_event_alert',
            items: {
              type: 'string',
            },
          },
          event: {
            type: 'array',
            description: 'Used for configuring pages_event_alert',
            items: {
              type: 'string',
            },
          },
          event_source: {
            type: 'array',
            description: 'Used for configuring load_balancing_health_alert',
            items: {
              type: 'string',
            },
          },
          event_type: {
            type: 'array',
            description: 'Usage depends on specific alert type',
            items: {
              type: 'string',
            },
          },
          group_by: {
            type: 'array',
            description: 'Usage depends on specific alert type',
            items: {
              type: 'string',
            },
          },
          health_check_id: {
            type: 'array',
            description: 'Used for configuring health_check_status_notification',
            items: {
              type: 'string',
            },
          },
          incident_impact: {
            type: 'array',
            description: 'Used for configuring incident_alert',
            items: {
              type: 'string',
              enum: [
                'INCIDENT_IMPACT_NONE',
                'INCIDENT_IMPACT_MINOR',
                'INCIDENT_IMPACT_MAJOR',
                'INCIDENT_IMPACT_CRITICAL',
              ],
            },
          },
          input_id: {
            type: 'array',
            description: 'Used for configuring stream_live_notifications',
            items: {
              type: 'string',
            },
          },
          insight_class: {
            type: 'array',
            description: 'Used for configuring security_insights_alert',
            items: {
              type: 'string',
            },
          },
          limit: {
            type: 'array',
            description: 'Used for configuring billing_usage_alert',
            items: {
              type: 'string',
            },
          },
          logo_tag: {
            type: 'array',
            description: 'Used for configuring logo_match_alert',
            items: {
              type: 'string',
            },
          },
          megabits_per_second: {
            type: 'array',
            description: 'Used for configuring advanced_ddos_attack_l4_alert',
            items: {
              type: 'string',
            },
          },
          new_health: {
            type: 'array',
            description: 'Used for configuring load_balancing_health_alert',
            items: {
              type: 'string',
            },
          },
          new_status: {
            type: 'array',
            description: 'Used for configuring tunnel_health_event',
            items: {
              type: 'string',
            },
          },
          packets_per_second: {
            type: 'array',
            description: 'Used for configuring advanced_ddos_attack_l4_alert',
            items: {
              type: 'string',
            },
          },
          pool_id: {
            type: 'array',
            description: 'Usage depends on specific alert type',
            items: {
              type: 'string',
            },
          },
          pop_names: {
            type: 'array',
            description: 'Usage depends on specific alert type',
            items: {
              type: 'string',
            },
          },
          product: {
            type: 'array',
            description: 'Used for configuring billing_usage_alert',
            items: {
              type: 'string',
            },
          },
          project_id: {
            type: 'array',
            description: 'Used for configuring pages_event_alert',
            items: {
              type: 'string',
            },
          },
          protocol: {
            type: 'array',
            description: 'Used for configuring advanced_ddos_attack_l4_alert',
            items: {
              type: 'string',
            },
          },
          query_tag: {
            type: 'array',
            description: 'Usage depends on specific alert type',
            items: {
              type: 'string',
            },
          },
          requests_per_second: {
            type: 'array',
            description: 'Used for configuring advanced_ddos_attack_l7_alert',
            items: {
              type: 'string',
            },
          },
          selectors: {
            type: 'array',
            description: 'Usage depends on specific alert type',
            items: {
              type: 'string',
            },
          },
          services: {
            type: 'array',
            description: 'Used for configuring clickhouse_alert_fw_ent_anomaly',
            items: {
              type: 'string',
            },
          },
          slo: {
            type: 'array',
            description: 'Usage depends on specific alert type',
            items: {
              type: 'string',
            },
          },
          status: {
            type: 'array',
            description: 'Used for configuring health_check_status_notification',
            items: {
              type: 'string',
            },
          },
          target_hostname: {
            type: 'array',
            description: 'Used for configuring advanced_ddos_attack_l7_alert',
            items: {
              type: 'string',
            },
          },
          target_ip: {
            type: 'array',
            description: 'Used for configuring advanced_ddos_attack_l4_alert',
            items: {
              type: 'string',
            },
          },
          target_zone_name: {
            type: 'array',
            description: 'Used for configuring advanced_ddos_attack_l7_alert',
            items: {
              type: 'string',
            },
          },
          traffic_exclusions: {
            type: 'array',
            description: 'Used for configuring traffic_anomalies_alert',
            items: {
              type: 'string',
              enum: ['security_events'],
            },
          },
          tunnel_id: {
            type: 'array',
            description: 'Used for configuring tunnel_health_event',
            items: {
              type: 'string',
            },
          },
          tunnel_name: {
            type: 'array',
            description: 'Usage depends on specific alert type',
            items: {
              type: 'string',
            },
          },
          where: {
            type: 'array',
            description: 'Usage depends on specific alert type',
            items: {
              type: 'string',
            },
          },
          zones: {
            type: 'array',
            description: 'Usage depends on specific alert type',
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.alerting.policies.create(body);
};

export default { metadata, tool, handler };
