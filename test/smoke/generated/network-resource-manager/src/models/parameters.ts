/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  ApplicationGateway as ApplicationGatewayMapper,
  TagsObject as TagsObjectMapper,
  ApplicationGatewayOnDemandProbe as ApplicationGatewayOnDemandProbeMapper,
  ApplicationSecurityGroup as ApplicationSecurityGroupMapper,
  AzureFirewall as AzureFirewallMapper,
  BastionHost as BastionHostMapper,
  BastionShareableLinkListRequest as BastionShareableLinkListRequestMapper,
  SessionIds as SessionIdsMapper,
  VirtualWanVpnProfileParameters as VirtualWanVpnProfileParametersMapper,
  DdosCustomPolicy as DdosCustomPolicyMapper,
  DdosProtectionPlan as DdosProtectionPlanMapper,
  ExpressRouteCircuitAuthorization as ExpressRouteCircuitAuthorizationMapper,
  ExpressRouteCircuitPeering as ExpressRouteCircuitPeeringMapper,
  ExpressRouteCircuitConnection as ExpressRouteCircuitConnectionMapper,
  ExpressRouteCircuit as ExpressRouteCircuitMapper,
  ExpressRouteCrossConnection as ExpressRouteCrossConnectionMapper,
  ExpressRouteCrossConnectionPeering as ExpressRouteCrossConnectionPeeringMapper,
  ExpressRoutePort as ExpressRoutePortMapper,
  FirewallPolicy as FirewallPolicyMapper,
  FirewallPolicyRuleGroup as FirewallPolicyRuleGroupMapper,
  IpAllocation as IpAllocationMapper,
  IpGroup as IpGroupMapper,
  LoadBalancer as LoadBalancerMapper,
  BackendAddressPool as BackendAddressPoolMapper,
  InboundNatRule as InboundNatRuleMapper,
  NatGateway as NatGatewayMapper,
  NetworkInterface as NetworkInterfaceMapper,
  NetworkInterfaceTapConfiguration as NetworkInterfaceTapConfigurationMapper,
  NetworkProfile as NetworkProfileMapper,
  NetworkSecurityGroup as NetworkSecurityGroupMapper,
  SecurityRule as SecurityRuleMapper,
  NetworkVirtualAppliance as NetworkVirtualApplianceMapper,
  NetworkWatcher as NetworkWatcherMapper,
  TopologyParameters as TopologyParametersMapper,
  VerificationIPFlowParameters as VerificationIPFlowParametersMapper,
  NextHopParameters as NextHopParametersMapper,
  SecurityGroupViewParameters as SecurityGroupViewParametersMapper,
  TroubleshootingParameters as TroubleshootingParametersMapper,
  QueryTroubleshootingParameters as QueryTroubleshootingParametersMapper,
  FlowLogInformation as FlowLogInformationMapper,
  FlowLogStatusParameters as FlowLogStatusParametersMapper,
  ConnectivityParameters as ConnectivityParametersMapper,
  AzureReachabilityReportParameters as AzureReachabilityReportParametersMapper,
  AvailableProvidersListParameters as AvailableProvidersListParametersMapper,
  NetworkConfigurationDiagnosticParameters as NetworkConfigurationDiagnosticParametersMapper,
  PacketCapture as PacketCaptureMapper,
  ConnectionMonitor as ConnectionMonitorMapper,
  FlowLog as FlowLogMapper,
  PrivateEndpoint as PrivateEndpointMapper,
  PrivateDnsZoneGroup as PrivateDnsZoneGroupMapper,
  PrivateLinkService as PrivateLinkServiceMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  CheckPrivateLinkServiceVisibilityRequest as CheckPrivateLinkServiceVisibilityRequestMapper,
  PublicIPAddress as PublicIPAddressMapper,
  PublicIPPrefix as PublicIPPrefixMapper,
  RouteFilter as RouteFilterMapper,
  RouteFilterRule as RouteFilterRuleMapper,
  RouteTable as RouteTableMapper,
  Route as RouteMapper,
  SecurityPartnerProvider as SecurityPartnerProviderMapper,
  ServiceEndpointPolicy as ServiceEndpointPolicyMapper,
  ServiceEndpointPolicyDefinition as ServiceEndpointPolicyDefinitionMapper,
  VirtualNetwork as VirtualNetworkMapper,
  Subnet as SubnetMapper,
  PrepareNetworkPoliciesRequest as PrepareNetworkPoliciesRequestMapper,
  UnprepareNetworkPoliciesRequest as UnprepareNetworkPoliciesRequestMapper,
  VirtualNetworkPeering as VirtualNetworkPeeringMapper,
  VirtualNetworkGateway as VirtualNetworkGatewayMapper,
  VpnClientParameters as VpnClientParametersMapper,
  VpnClientIPsecParameters as VpnClientIPsecParametersMapper,
  VpnDeviceScriptParameters as VpnDeviceScriptParametersMapper,
  VpnPacketCaptureStartParameters as VpnPacketCaptureStartParametersMapper,
  VpnPacketCaptureStopParameters as VpnPacketCaptureStopParametersMapper,
  P2SVpnConnectionRequest as P2SVpnConnectionRequestMapper,
  VirtualNetworkGatewayConnection as VirtualNetworkGatewayConnectionMapper,
  ConnectionSharedKey as ConnectionSharedKeyMapper,
  ConnectionResetSharedKey as ConnectionResetSharedKeyMapper,
  LocalNetworkGateway as LocalNetworkGatewayMapper,
  VirtualNetworkTap as VirtualNetworkTapMapper,
  VirtualRouter as VirtualRouterMapper,
  VirtualRouterPeering as VirtualRouterPeeringMapper,
  VirtualWAN as VirtualWANMapper,
  VpnSite as VpnSiteMapper,
  GetVpnSitesConfigurationRequest as GetVpnSitesConfigurationRequestMapper,
  VpnServerConfiguration as VpnServerConfigurationMapper,
  VirtualHub as VirtualHubMapper,
  VpnGateway as VpnGatewayMapper,
  VpnConnection as VpnConnectionMapper,
  P2SVpnGateway as P2SVpnGatewayMapper,
  P2SVpnProfileParameters as P2SVpnProfileParametersMapper,
  P2SVpnConnectionHealthRequest as P2SVpnConnectionHealthRequestMapper,
  VirtualHubRouteTableV2 as VirtualHubRouteTableV2Mapper,
  ExpressRouteGateway as ExpressRouteGatewayMapper,
  ExpressRouteConnection as ExpressRouteConnectionMapper,
  HubRouteTable as HubRouteTableMapper,
  WebApplicationFirewallPolicy as WebApplicationFirewallPolicyMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const applicationGatewayName: OperationURLParameter = {
  parameterPath: "applicationGatewayName",
  mapper: {
    serializedName: "applicationGatewayName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-04-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: ApplicationGatewayMapper
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: TagsObjectMapper
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const probeRequest: OperationParameter = {
  parameterPath: "probeRequest",
  mapper: ApplicationGatewayOnDemandProbeMapper
};

export const predefinedPolicyName: OperationURLParameter = {
  parameterPath: "predefinedPolicyName",
  mapper: {
    serializedName: "predefinedPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const applicationSecurityGroupName: OperationURLParameter = {
  parameterPath: "applicationSecurityGroupName",
  mapper: {
    serializedName: "applicationSecurityGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: ApplicationSecurityGroupMapper
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const azureFirewallName: OperationURLParameter = {
  parameterPath: "azureFirewallName",
  mapper: {
    serializedName: "azureFirewallName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: AzureFirewallMapper
};

export const azureFirewallName1: OperationURLParameter = {
  parameterPath: "azureFirewallName",
  mapper: {
    constraints: {
      MaxLength: 56,
      MinLength: 1
    },
    serializedName: "azureFirewallName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const bastionHostName: OperationURLParameter = {
  parameterPath: "bastionHostName",
  mapper: {
    serializedName: "bastionHostName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: BastionHostMapper
};

export const bslRequest: OperationParameter = {
  parameterPath: "bslRequest",
  mapper: BastionShareableLinkListRequestMapper
};

export const sessionIds: OperationParameter = {
  parameterPath: "sessionIds",
  mapper: SessionIdsMapper
};

export const domainNameLabel: OperationQueryParameter = {
  parameterPath: "domainNameLabel",
  mapper: {
    serializedName: "domainNameLabel",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const virtualWANName: OperationURLParameter = {
  parameterPath: "virtualWANName",
  mapper: {
    serializedName: "virtualWANName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const vpnClientParams: OperationParameter = {
  parameterPath: "vpnClientParams",
  mapper: VirtualWanVpnProfileParametersMapper
};

export const ddosCustomPolicyName: OperationURLParameter = {
  parameterPath: "ddosCustomPolicyName",
  mapper: {
    serializedName: "ddosCustomPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: DdosCustomPolicyMapper
};

export const ddosProtectionPlanName: OperationURLParameter = {
  parameterPath: "ddosProtectionPlanName",
  mapper: {
    serializedName: "ddosProtectionPlanName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: DdosProtectionPlanMapper
};

export const circuitName: OperationURLParameter = {
  parameterPath: "circuitName",
  mapper: {
    serializedName: "circuitName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const authorizationName: OperationURLParameter = {
  parameterPath: "authorizationName",
  mapper: {
    serializedName: "authorizationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const authorizationParameters: OperationParameter = {
  parameterPath: "authorizationParameters",
  mapper: ExpressRouteCircuitAuthorizationMapper
};

export const peeringName: OperationURLParameter = {
  parameterPath: "peeringName",
  mapper: {
    serializedName: "peeringName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const peeringParameters: OperationParameter = {
  parameterPath: "peeringParameters",
  mapper: ExpressRouteCircuitPeeringMapper
};

export const connectionName: OperationURLParameter = {
  parameterPath: "connectionName",
  mapper: {
    serializedName: "connectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const expressRouteCircuitConnectionParameters: OperationParameter = {
  parameterPath: "expressRouteCircuitConnectionParameters",
  mapper: ExpressRouteCircuitConnectionMapper
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: ExpressRouteCircuitMapper
};

export const devicePath: OperationURLParameter = {
  parameterPath: "devicePath",
  mapper: {
    serializedName: "devicePath",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const crossConnectionName: OperationURLParameter = {
  parameterPath: "crossConnectionName",
  mapper: {
    serializedName: "crossConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: ExpressRouteCrossConnectionMapper
};

export const crossConnectionParameters: OperationParameter = {
  parameterPath: "crossConnectionParameters",
  mapper: TagsObjectMapper
};

export const peeringParameters1: OperationParameter = {
  parameterPath: "peeringParameters",
  mapper: ExpressRouteCrossConnectionPeeringMapper
};

export const locationName: OperationURLParameter = {
  parameterPath: "locationName",
  mapper: {
    serializedName: "locationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const expressRoutePortName: OperationURLParameter = {
  parameterPath: "expressRoutePortName",
  mapper: {
    serializedName: "expressRoutePortName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: ExpressRoutePortMapper
};

export const linkName: OperationURLParameter = {
  parameterPath: "linkName",
  mapper: {
    serializedName: "linkName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const firewallPolicyName: OperationURLParameter = {
  parameterPath: "firewallPolicyName",
  mapper: {
    serializedName: "firewallPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters10: OperationParameter = {
  parameterPath: "parameters",
  mapper: FirewallPolicyMapper
};

export const ruleGroupName: OperationURLParameter = {
  parameterPath: "ruleGroupName",
  mapper: {
    serializedName: "ruleGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters11: OperationParameter = {
  parameterPath: "parameters",
  mapper: FirewallPolicyRuleGroupMapper
};

export const ipAllocationName: OperationURLParameter = {
  parameterPath: "ipAllocationName",
  mapper: {
    serializedName: "ipAllocationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters12: OperationParameter = {
  parameterPath: "parameters",
  mapper: IpAllocationMapper
};

export const ipGroupsName: OperationURLParameter = {
  parameterPath: "ipGroupsName",
  mapper: {
    serializedName: "ipGroupsName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters13: OperationParameter = {
  parameterPath: "parameters",
  mapper: IpGroupMapper
};

export const loadBalancerName: OperationURLParameter = {
  parameterPath: "loadBalancerName",
  mapper: {
    serializedName: "loadBalancerName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters14: OperationParameter = {
  parameterPath: "parameters",
  mapper: LoadBalancerMapper
};

export const backendAddressPoolName: OperationURLParameter = {
  parameterPath: "backendAddressPoolName",
  mapper: {
    serializedName: "backendAddressPoolName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters15: OperationParameter = {
  parameterPath: "parameters",
  mapper: BackendAddressPoolMapper
};

export const frontendIPConfigurationName: OperationURLParameter = {
  parameterPath: "frontendIPConfigurationName",
  mapper: {
    serializedName: "frontendIPConfigurationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const inboundNatRuleName: OperationURLParameter = {
  parameterPath: "inboundNatRuleName",
  mapper: {
    serializedName: "inboundNatRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const inboundNatRuleParameters: OperationParameter = {
  parameterPath: "inboundNatRuleParameters",
  mapper: InboundNatRuleMapper
};

export const loadBalancingRuleName: OperationURLParameter = {
  parameterPath: "loadBalancingRuleName",
  mapper: {
    serializedName: "loadBalancingRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const outboundRuleName: OperationURLParameter = {
  parameterPath: "outboundRuleName",
  mapper: {
    serializedName: "outboundRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const probeName: OperationURLParameter = {
  parameterPath: "probeName",
  mapper: {
    serializedName: "probeName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const natGatewayName: OperationURLParameter = {
  parameterPath: "natGatewayName",
  mapper: {
    serializedName: "natGatewayName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters16: OperationParameter = {
  parameterPath: "parameters",
  mapper: NatGatewayMapper
};

export const networkInterfaceName: OperationURLParameter = {
  parameterPath: "networkInterfaceName",
  mapper: {
    serializedName: "networkInterfaceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters17: OperationParameter = {
  parameterPath: "parameters",
  mapper: NetworkInterfaceMapper
};

export const virtualMachineScaleSetName: OperationURLParameter = {
  parameterPath: "virtualMachineScaleSetName",
  mapper: {
    serializedName: "virtualMachineScaleSetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const virtualmachineIndex: OperationURLParameter = {
  parameterPath: "virtualmachineIndex",
  mapper: {
    serializedName: "virtualmachineIndex",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2018-10-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const ipConfigurationName: OperationURLParameter = {
  parameterPath: "ipConfigurationName",
  mapper: {
    serializedName: "ipConfigurationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const tapConfigurationName: OperationURLParameter = {
  parameterPath: "tapConfigurationName",
  mapper: {
    serializedName: "tapConfigurationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const tapConfigurationParameters: OperationParameter = {
  parameterPath: "tapConfigurationParameters",
  mapper: NetworkInterfaceTapConfigurationMapper
};

export const networkProfileName: OperationURLParameter = {
  parameterPath: "networkProfileName",
  mapper: {
    serializedName: "networkProfileName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters18: OperationParameter = {
  parameterPath: "parameters",
  mapper: NetworkProfileMapper
};

export const networkSecurityGroupName: OperationURLParameter = {
  parameterPath: "networkSecurityGroupName",
  mapper: {
    serializedName: "networkSecurityGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters19: OperationParameter = {
  parameterPath: "parameters",
  mapper: NetworkSecurityGroupMapper
};

export const securityRuleName: OperationURLParameter = {
  parameterPath: "securityRuleName",
  mapper: {
    serializedName: "securityRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const securityRuleParameters: OperationParameter = {
  parameterPath: "securityRuleParameters",
  mapper: SecurityRuleMapper
};

export const defaultSecurityRuleName: OperationURLParameter = {
  parameterPath: "defaultSecurityRuleName",
  mapper: {
    serializedName: "defaultSecurityRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const networkVirtualApplianceName: OperationURLParameter = {
  parameterPath: "networkVirtualApplianceName",
  mapper: {
    serializedName: "networkVirtualApplianceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters20: OperationParameter = {
  parameterPath: "parameters",
  mapper: NetworkVirtualApplianceMapper
};

export const parameters21: OperationParameter = {
  parameterPath: "parameters",
  mapper: NetworkWatcherMapper
};

export const networkWatcherName: OperationURLParameter = {
  parameterPath: "networkWatcherName",
  mapper: {
    serializedName: "networkWatcherName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters22: OperationParameter = {
  parameterPath: "parameters",
  mapper: TopologyParametersMapper
};

export const parameters23: OperationParameter = {
  parameterPath: "parameters",
  mapper: VerificationIPFlowParametersMapper
};

export const parameters24: OperationParameter = {
  parameterPath: "parameters",
  mapper: NextHopParametersMapper
};

export const parameters25: OperationParameter = {
  parameterPath: "parameters",
  mapper: SecurityGroupViewParametersMapper
};

export const parameters26: OperationParameter = {
  parameterPath: "parameters",
  mapper: TroubleshootingParametersMapper
};

export const parameters27: OperationParameter = {
  parameterPath: "parameters",
  mapper: QueryTroubleshootingParametersMapper
};

export const parameters28: OperationParameter = {
  parameterPath: "parameters",
  mapper: FlowLogInformationMapper
};

export const parameters29: OperationParameter = {
  parameterPath: "parameters",
  mapper: FlowLogStatusParametersMapper
};

export const parameters30: OperationParameter = {
  parameterPath: "parameters",
  mapper: ConnectivityParametersMapper
};

export const parameters31: OperationParameter = {
  parameterPath: "parameters",
  mapper: AzureReachabilityReportParametersMapper
};

export const parameters32: OperationParameter = {
  parameterPath: "parameters",
  mapper: AvailableProvidersListParametersMapper
};

export const parameters33: OperationParameter = {
  parameterPath: "parameters",
  mapper: NetworkConfigurationDiagnosticParametersMapper
};

export const parameters34: OperationParameter = {
  parameterPath: "parameters",
  mapper: PacketCaptureMapper
};

export const packetCaptureName: OperationURLParameter = {
  parameterPath: "packetCaptureName",
  mapper: {
    serializedName: "packetCaptureName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters35: OperationParameter = {
  parameterPath: "parameters",
  mapper: ConnectionMonitorMapper
};

export const connectionMonitorName: OperationURLParameter = {
  parameterPath: "connectionMonitorName",
  mapper: {
    serializedName: "connectionMonitorName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters36: OperationParameter = {
  parameterPath: "parameters",
  mapper: FlowLogMapper
};

export const flowLogName: OperationURLParameter = {
  parameterPath: "flowLogName",
  mapper: {
    serializedName: "flowLogName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateEndpointName: OperationURLParameter = {
  parameterPath: "privateEndpointName",
  mapper: {
    serializedName: "privateEndpointName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters37: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateEndpointMapper
};

export const privateDnsZoneGroupName: OperationURLParameter = {
  parameterPath: "privateDnsZoneGroupName",
  mapper: {
    serializedName: "privateDnsZoneGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters38: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateDnsZoneGroupMapper
};

export const serviceName: OperationURLParameter = {
  parameterPath: "serviceName",
  mapper: {
    serializedName: "serviceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters39: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateLinkServiceMapper
};

export const peConnectionName: OperationURLParameter = {
  parameterPath: "peConnectionName",
  mapper: {
    serializedName: "peConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters40: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateEndpointConnectionMapper
};

export const parameters41: OperationParameter = {
  parameterPath: "parameters",
  mapper: CheckPrivateLinkServiceVisibilityRequestMapper
};

export const publicIpAddressName: OperationURLParameter = {
  parameterPath: "publicIpAddressName",
  mapper: {
    serializedName: "publicIpAddressName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters42: OperationParameter = {
  parameterPath: "parameters",
  mapper: PublicIPAddressMapper
};

export const publicIpPrefixName: OperationURLParameter = {
  parameterPath: "publicIpPrefixName",
  mapper: {
    serializedName: "publicIpPrefixName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters43: OperationParameter = {
  parameterPath: "parameters",
  mapper: PublicIPPrefixMapper
};

export const routeFilterName: OperationURLParameter = {
  parameterPath: "routeFilterName",
  mapper: {
    serializedName: "routeFilterName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const routeFilterParameters: OperationParameter = {
  parameterPath: "routeFilterParameters",
  mapper: RouteFilterMapper
};

export const ruleName: OperationURLParameter = {
  parameterPath: "ruleName",
  mapper: {
    serializedName: "ruleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const routeFilterRuleParameters: OperationParameter = {
  parameterPath: "routeFilterRuleParameters",
  mapper: RouteFilterRuleMapper
};

export const routeTableName: OperationURLParameter = {
  parameterPath: "routeTableName",
  mapper: {
    serializedName: "routeTableName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters44: OperationParameter = {
  parameterPath: "parameters",
  mapper: RouteTableMapper
};

export const routeName: OperationURLParameter = {
  parameterPath: "routeName",
  mapper: {
    serializedName: "routeName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const routeParameters: OperationParameter = {
  parameterPath: "routeParameters",
  mapper: RouteMapper
};

export const securityPartnerProviderName: OperationURLParameter = {
  parameterPath: "securityPartnerProviderName",
  mapper: {
    serializedName: "securityPartnerProviderName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters45: OperationParameter = {
  parameterPath: "parameters",
  mapper: SecurityPartnerProviderMapper
};

export const serviceEndpointPolicyName: OperationURLParameter = {
  parameterPath: "serviceEndpointPolicyName",
  mapper: {
    serializedName: "serviceEndpointPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters46: OperationParameter = {
  parameterPath: "parameters",
  mapper: ServiceEndpointPolicyMapper
};

export const serviceEndpointPolicyDefinitionName: OperationURLParameter = {
  parameterPath: "serviceEndpointPolicyDefinitionName",
  mapper: {
    serializedName: "serviceEndpointPolicyDefinitionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const serviceEndpointPolicyDefinitions: OperationParameter = {
  parameterPath: "serviceEndpointPolicyDefinitions",
  mapper: ServiceEndpointPolicyDefinitionMapper
};

export const location1: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._ ]+$")
    },
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const virtualNetworkName: OperationURLParameter = {
  parameterPath: "virtualNetworkName",
  mapper: {
    serializedName: "virtualNetworkName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters47: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualNetworkMapper
};

export const ipAddress: OperationQueryParameter = {
  parameterPath: "ipAddress",
  mapper: {
    serializedName: "ipAddress",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const subnetName: OperationURLParameter = {
  parameterPath: "subnetName",
  mapper: {
    serializedName: "subnetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const subnetParameters: OperationParameter = {
  parameterPath: "subnetParameters",
  mapper: SubnetMapper
};

export const prepareNetworkPoliciesRequestParameters: OperationParameter = {
  parameterPath: "prepareNetworkPoliciesRequestParameters",
  mapper: PrepareNetworkPoliciesRequestMapper
};

export const unprepareNetworkPoliciesRequestParameters: OperationParameter = {
  parameterPath: "unprepareNetworkPoliciesRequestParameters",
  mapper: UnprepareNetworkPoliciesRequestMapper
};

export const virtualNetworkPeeringName: OperationURLParameter = {
  parameterPath: "virtualNetworkPeeringName",
  mapper: {
    serializedName: "virtualNetworkPeeringName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const virtualNetworkPeeringParameters: OperationParameter = {
  parameterPath: "virtualNetworkPeeringParameters",
  mapper: VirtualNetworkPeeringMapper
};

export const parameters48: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualNetworkGatewayMapper
};

export const virtualNetworkGatewayName: OperationURLParameter = {
  parameterPath: "virtualNetworkGatewayName",
  mapper: {
    serializedName: "virtualNetworkGatewayName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const gatewayVip: OperationQueryParameter = {
  parameterPath: ["options", "gatewayVip"],
  mapper: {
    serializedName: "gatewayVip",
    type: {
      name: "String"
    }
  }
};

export const parameters49: OperationParameter = {
  parameterPath: "parameters",
  mapper: VpnClientParametersMapper
};

export const peer: OperationQueryParameter = {
  parameterPath: ["options", "peer"],
  mapper: {
    serializedName: "peer",
    type: {
      name: "String"
    }
  }
};

export const peer1: OperationQueryParameter = {
  parameterPath: "peer",
  mapper: {
    serializedName: "peer",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const vpnclientIpsecParams: OperationParameter = {
  parameterPath: "vpnclientIpsecParams",
  mapper: VpnClientIPsecParametersMapper
};

export const parameters50: OperationParameter = {
  parameterPath: "parameters",
  mapper: VpnDeviceScriptParametersMapper
};

export const virtualNetworkGatewayConnectionName: OperationURLParameter = {
  parameterPath: "virtualNetworkGatewayConnectionName",
  mapper: {
    serializedName: "virtualNetworkGatewayConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters51: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: VpnPacketCaptureStartParametersMapper
};

export const parameters52: OperationParameter = {
  parameterPath: "parameters",
  mapper: VpnPacketCaptureStopParametersMapper
};

export const request: OperationParameter = {
  parameterPath: "request",
  mapper: P2SVpnConnectionRequestMapper
};

export const parameters53: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualNetworkGatewayConnectionMapper
};

export const parameters54: OperationParameter = {
  parameterPath: "parameters",
  mapper: ConnectionSharedKeyMapper
};

export const parameters55: OperationParameter = {
  parameterPath: "parameters",
  mapper: ConnectionResetSharedKeyMapper
};

export const parameters56: OperationParameter = {
  parameterPath: "parameters",
  mapper: LocalNetworkGatewayMapper
};

export const localNetworkGatewayName: OperationURLParameter = {
  parameterPath: "localNetworkGatewayName",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "localNetworkGatewayName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const tapName: OperationURLParameter = {
  parameterPath: "tapName",
  mapper: {
    serializedName: "tapName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters57: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualNetworkTapMapper
};

export const tapParameters: OperationParameter = {
  parameterPath: "tapParameters",
  mapper: TagsObjectMapper
};

export const virtualRouterName: OperationURLParameter = {
  parameterPath: "virtualRouterName",
  mapper: {
    serializedName: "virtualRouterName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters58: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualRouterMapper
};

export const parameters59: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualRouterPeeringMapper
};

export const virtualWANName1: OperationURLParameter = {
  parameterPath: "virtualWANName",
  mapper: {
    serializedName: "VirtualWANName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const wANParameters: OperationParameter = {
  parameterPath: "wANParameters",
  mapper: VirtualWANMapper
};

export const wANParameters1: OperationParameter = {
  parameterPath: "wANParameters",
  mapper: TagsObjectMapper
};

export const vpnSiteName: OperationURLParameter = {
  parameterPath: "vpnSiteName",
  mapper: {
    serializedName: "vpnSiteName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const vpnSiteParameters: OperationParameter = {
  parameterPath: "vpnSiteParameters",
  mapper: VpnSiteMapper
};

export const vpnSiteParameters1: OperationParameter = {
  parameterPath: "vpnSiteParameters",
  mapper: TagsObjectMapper
};

export const vpnSiteLinkName: OperationURLParameter = {
  parameterPath: "vpnSiteLinkName",
  mapper: {
    serializedName: "vpnSiteLinkName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const request1: OperationParameter = {
  parameterPath: "request",
  mapper: GetVpnSitesConfigurationRequestMapper
};

export const vpnServerConfigurationName: OperationURLParameter = {
  parameterPath: "vpnServerConfigurationName",
  mapper: {
    serializedName: "vpnServerConfigurationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const vpnServerConfigurationParameters: OperationParameter = {
  parameterPath: "vpnServerConfigurationParameters",
  mapper: VpnServerConfigurationMapper
};

export const vpnServerConfigurationParameters1: OperationParameter = {
  parameterPath: "vpnServerConfigurationParameters",
  mapper: TagsObjectMapper
};

export const virtualHubName: OperationURLParameter = {
  parameterPath: "virtualHubName",
  mapper: {
    serializedName: "virtualHubName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const virtualHubParameters: OperationParameter = {
  parameterPath: "virtualHubParameters",
  mapper: VirtualHubMapper
};

export const virtualHubParameters1: OperationParameter = {
  parameterPath: "virtualHubParameters",
  mapper: TagsObjectMapper
};

export const gatewayName: OperationURLParameter = {
  parameterPath: "gatewayName",
  mapper: {
    serializedName: "gatewayName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const vpnGatewayParameters: OperationParameter = {
  parameterPath: "vpnGatewayParameters",
  mapper: VpnGatewayMapper
};

export const vpnGatewayParameters1: OperationParameter = {
  parameterPath: "vpnGatewayParameters",
  mapper: TagsObjectMapper
};

export const vpnConnectionParameters: OperationParameter = {
  parameterPath: "vpnConnectionParameters",
  mapper: VpnConnectionMapper
};

export const linkConnectionName: OperationURLParameter = {
  parameterPath: "linkConnectionName",
  mapper: {
    serializedName: "linkConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const p2SVpnGatewayParameters: OperationParameter = {
  parameterPath: "p2SVpnGatewayParameters",
  mapper: P2SVpnGatewayMapper
};

export const p2SVpnGatewayParameters1: OperationParameter = {
  parameterPath: "p2SVpnGatewayParameters",
  mapper: TagsObjectMapper
};

export const parameters60: OperationParameter = {
  parameterPath: "parameters",
  mapper: P2SVpnProfileParametersMapper
};

export const request2: OperationParameter = {
  parameterPath: "request",
  mapper: P2SVpnConnectionHealthRequestMapper
};

export const p2SVpnGatewayName: OperationURLParameter = {
  parameterPath: "p2SVpnGatewayName",
  mapper: {
    serializedName: "p2sVpnGatewayName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const virtualHubRouteTableV2Parameters: OperationParameter = {
  parameterPath: "virtualHubRouteTableV2Parameters",
  mapper: VirtualHubRouteTableV2Mapper
};

export const putExpressRouteGatewayParameters: OperationParameter = {
  parameterPath: "putExpressRouteGatewayParameters",
  mapper: ExpressRouteGatewayMapper
};

export const expressRouteGatewayName: OperationURLParameter = {
  parameterPath: "expressRouteGatewayName",
  mapper: {
    serializedName: "expressRouteGatewayName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const putExpressRouteConnectionParameters: OperationParameter = {
  parameterPath: "putExpressRouteConnectionParameters",
  mapper: ExpressRouteConnectionMapper
};

export const routeTableParameters: OperationParameter = {
  parameterPath: "routeTableParameters",
  mapper: HubRouteTableMapper
};

export const policyName: OperationURLParameter = {
  parameterPath: "policyName",
  mapper: {
    constraints: {
      MaxLength: 128
    },
    serializedName: "policyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters61: OperationParameter = {
  parameterPath: "parameters",
  mapper: WebApplicationFirewallPolicyMapper
};
