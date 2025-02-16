import * as coreClient from "@azure/core-client";

/** The properties of a service instance. */
export interface ServicesProperties {
  /**
   * The provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** The access policies of the service instance. */
  accessPolicies?: ServiceAccessPolicyEntry[];
  /** The settings for the Cosmos DB database backing the service. */
  cosmosDbConfiguration?: ServiceCosmosDbConfigurationInfo;
  /** The authentication configuration for the service instance. */
  authenticationConfiguration?: ServiceAuthenticationConfigurationInfo;
  /** The settings for the CORS configuration of the service instance. */
  corsConfiguration?: ServiceCorsConfigurationInfo;
  /** The settings for the export operation of the service instance. */
  exportConfiguration?: ServiceExportConfigurationInfo;
  /** The list of private endpoint connections that are set up for this resource. */
  privateEndpointConnections?: PrivateEndpointConnection[];
  /** Control permission for data plane traffic coming from public networks while private endpoint is enabled. */
  publicNetworkAccess?: PublicNetworkAccess;
  /** The azure container registry settings used for convert data operation of the service instance. */
  acrConfiguration?: ServiceAcrConfigurationInfo;
}

/** An access policy entry. */
export interface ServiceAccessPolicyEntry {
  /** An Azure AD object ID (User or Apps) that is allowed access to the FHIR service. */
  objectId: string;
}

/** The settings for the Cosmos DB database backing the service. */
export interface ServiceCosmosDbConfigurationInfo {
  /** The provisioned throughput for the backing database. */
  offerThroughput?: number;
  /** The URI of the customer-managed key for the backing database. */
  keyVaultKeyUri?: string;
}

/** Authentication configuration information */
export interface ServiceAuthenticationConfigurationInfo {
  /** The authority url for the service */
  authority?: string;
  /** The audience url for the service */
  audience?: string;
  /** If the SMART on FHIR proxy is enabled */
  smartProxyEnabled?: boolean;
}

/** The settings for the CORS configuration of the service instance. */
export interface ServiceCorsConfigurationInfo {
  /** The origins to be allowed via CORS. */
  origins?: string[];
  /** The headers to be allowed via CORS. */
  headers?: string[];
  /** The methods to be allowed via CORS. */
  methods?: string[];
  /** The max age to be allowed via CORS. */
  maxAge?: number;
  /** If credentials are allowed via CORS. */
  allowCredentials?: boolean;
}

/** Export operation configuration information */
export interface ServiceExportConfigurationInfo {
  /** The name of the default export storage account. */
  storageAccountName?: string;
}

/** The Private Endpoint resource. */
export interface PrivateEndpoint {
  /**
   * The ARM identifier for Private Endpoint
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionState {
  /** Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. */
  status?: PrivateEndpointServiceConnectionStatus;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** Azure container registry configuration information */
export interface ServiceAcrConfigurationInfo {
  /** The list of the ACR login servers. */
  loginServers?: string[];
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** The common properties of a service. */
export interface ServicesResource {
  /**
   * The resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** The kind of the service. */
  kind: Kind;
  /** The resource location. */
  location: string;
  /** The resource tags. */
  tags?: { [propertyName: string]: string };
  /** An etag associated with the resource, used for optimistic concurrency when editing it. */
  etag?: string;
  /** Setting indicating whether the service has a managed identity associated with it. */
  identity?: ServicesResourceIdentity;
}

/** Setting indicating whether the service has a managed identity associated with it. */
export interface ServicesResourceIdentity {
  /**
   * The principal ID of the resource identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant ID of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** Type of identity being specified, currently SystemAssigned and None are allowed. */
  type?: ManagedServiceIdentityType;
}

/** Error details. */
export interface ErrorDetails {
  /** Error details */
  error?: ErrorDetailsInternal;
}

/** Error details. */
export interface ErrorDetailsInternal {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The target of the particular error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
}

/** The description of the service. */
export interface ServicesPatchDescription {
  /** Instance tags */
  tags?: { [propertyName: string]: string };
  /** Control permission for data plane traffic coming from public networks while private endpoint is enabled. */
  publicNetworkAccess?: PublicNetworkAccess;
}

/** A list of service description objects with a next link. */
export interface ServicesDescriptionListResult {
  /** The link used to get the next page of service description objects. */
  nextLink?: string;
  /** A list of service description objects. */
  value?: ServicesDescription[];
}

/** Input values. */
export interface CheckNameAvailabilityParameters {
  /** The name of the service instance to check. */
  name: string;
  /** The fully qualified resource type which includes provider namespace. */
  type: string;
}

/** The properties indicating whether a given service name is available. */
export interface ServicesNameAvailabilityInfo {
  /**
   * The value which indicates whether the provided name is available.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nameAvailable?: boolean;
  /**
   * The reason for unavailability.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly reason?: ServiceNameUnavailabilityReason;
  /** The detailed reason message. */
  message?: string;
}

/** List of private endpoint connection associated with the specified storage account */
export interface PrivateEndpointConnectionListResultDescription {
  /** Array of private endpoint connections */
  value?: PrivateEndpointConnectionDescription[];
}

/** A list of private link resources */
export interface PrivateLinkResourceListResultDescription {
  /** Array of private link resources */
  value?: PrivateLinkResourceDescription[];
}

/** Collection of workspace object with a next link */
export interface WorkspaceList {
  /** The link used to get the next page. */
  nextLink?: string;
  /** Collection of resources. */
  value?: Workspace[];
}

/** Workspaces resource specific properties. */
export interface WorkspaceProperties {
  /** The provisioning state. */
  provisioningState?: ProvisioningState;
}

/** List of key value pairs that describe the resource. This will overwrite the existing tags. */
export interface ResourceTags {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
}

/** The common properties for any resource, tracked or proxy. */
export interface ResourceCore {
  /**
   * The resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** An etag associated with the resource, used for optimistic concurrency when editing it. */
  etag?: string;
}

/** Error details. */
export interface ErrorModel {
  /** Error details */
  error?: ErrorDetailsInternal;
}

/** The collection of Dicom Services. */
export interface DicomServiceCollection {
  /** The link used to get the next page of Dicom Services. */
  nextLink?: string;
  /** The list of Dicom Services. */
  value?: DicomService[];
}

/** Authentication configuration information */
export interface DicomServiceAuthenticationConfiguration {
  /**
   * The authority url for the service
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly authority?: string;
  /**
   * The audiences for the service
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly audiences?: string[];
}

/** A collection of IoT Connectors. */
export interface IotConnectorCollection {
  /** The link used to get the next page of IoT Connectors. */
  nextLink?: string;
  /** The list of IoT Connectors. */
  value?: IotConnector[];
}

/** Event Hub ingestion endpoint configuration */
export interface IotEventHubIngestionEndpointConfiguration {
  /** Event Hub name to connect to. */
  eventHubName?: string;
  /** Consumer group of the event hub to connected to. */
  consumerGroup?: string;
  /** Fully qualified namespace of the Event Hub to connect to. */
  fullyQualifiedEventHubNamespace?: string;
}

/** The mapping content. */
export interface IotMappingProperties {
  /** The mapping. */
  content?: Record<string, unknown>;
}

/** The managed identity of a service. */
export interface ServiceManagedIdentity {
  /** Setting indicating whether the service has a managed identity associated with it. */
  identity?: ServiceManagedIdentityIdentity;
}

/** Setting indicating whether the service has a managed identity associated with it. */
export interface ServiceManagedIdentityIdentity {
  /** Type of identity being specified, currently SystemAssigned and None are allowed. */
  type?: ManagedServiceIdentityType;
}

/** A collection of IoT Connector FHIR destinations. */
export interface IotFhirDestinationCollection {
  /** The link used to get the next page of IoT FHIR destinations. */
  nextLink?: string;
  /** The list of IoT Connector FHIR destinations. */
  value?: IotFhirDestination[];
}

/** Common IoT Connector destination properties. */
export interface IotDestinationProperties {
  /** The provisioning state. */
  provisioningState?: ProvisioningState;
}

/** A collection of Fhir services. */
export interface FhirServiceCollection {
  /** The link used to get the next page of Fhir Services. */
  nextLink?: string;
  /** The list of Fhir Services. */
  value?: FhirService[];
}

/** An access policy entry. */
export interface FhirServiceAccessPolicyEntry {
  /** An Azure AD object ID (User or Apps) that is allowed access to the FHIR service. */
  objectId: string;
}

/** Azure container registry configuration information */
export interface FhirServiceAcrConfiguration {
  /** The list of the Azure container registry login servers. */
  loginServers?: string[];
}

/** Authentication configuration information */
export interface FhirServiceAuthenticationConfiguration {
  /** The authority url for the service */
  authority?: string;
  /** The audience url for the service */
  audience?: string;
  /** If the SMART on FHIR proxy is enabled */
  smartProxyEnabled?: boolean;
}

/** The settings for the CORS configuration of the service instance. */
export interface FhirServiceCorsConfiguration {
  /** The origins to be allowed via CORS. */
  origins?: string[];
  /** The headers to be allowed via CORS. */
  headers?: string[];
  /** The methods to be allowed via CORS. */
  methods?: string[];
  /** The max age to be allowed via CORS. */
  maxAge?: number;
  /** If credentials are allowed via CORS. */
  allowCredentials?: boolean;
}

/** Export operation configuration information */
export interface FhirServiceExportConfiguration {
  /** The name of the default export storage account. */
  storageAccountName?: string;
}

/** Available operations of the service */
export interface ListOperations {
  /**
   * Collection of available operation details
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: OperationDetail[];
  /**
   * URL client should use to fetch the next page (per server side paging).
   * It's null for now, added for future use.
   */
  nextLink?: string;
}

/** Service REST API operation. */
export interface OperationDetail {
  /**
   * Name of the operation
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for ARM/control-plane operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /** Display of the operation */
  display?: OperationDisplay;
  /**
   * Default value is 'user,system'.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: string;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionType?: ActionType;
}

/** The object that represents the operation. */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft.HealthcareApis
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * Resource Type: Services
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * Name of the operation
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * Friendly description for the operation,
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** The properties indicating the operation result of an operation on a service. */
export interface OperationResultsDescription {
  /**
   * The ID of the operation returned.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the operation result.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The status of the operation being performed.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: OperationResultStatus;
  /**
   * The time that the operation was started.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly startTime?: string;
  /** Additional properties of the operation result. */
  properties?: Record<string, unknown>;
}

/** The Private Endpoint Connection resource. */
export type PrivateEndpointConnection = Resource & {
  /** The resource of private end point. */
  privateEndpoint?: PrivateEndpoint;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
  /**
   * The provisioning state of the private endpoint connection resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: PrivateEndpointConnectionProvisioningState;
};

/** A private link resource */
export type PrivateLinkResource = Resource & {
  /**
   * The private link resource group id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly groupId?: string;
  /**
   * The private link resource required member names.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requiredMembers?: string[];
  /** The private link resource Private link DNS zone name. */
  requiredZoneNames?: string[];
};

/** The description of the service. */
export type ServicesDescription = ServicesResource & {
  /** The common properties of a service. */
  properties?: ServicesProperties;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
};

/** The common properties of tracked resources in the service. */
export type TaggedResource = ResourceTags & LocationBasedResource;

/** Workspace patch properties */
export type WorkspacePatchResource = ResourceTags;

/** Dicom Service patch properties */
export type DicomServicePatchResource = ResourceTags;

/** Iot Connector patch properties */
export type IotConnectorPatchResource = ResourceTags & ServiceManagedIdentity;

/** FhirService patch properties */
export type FhirServicePatchResource = ResourceTags & ServiceManagedIdentity;

/** The common properties for any location based resource, tracked or proxy. */
export type LocationBasedResource = ResourceCore & {
  /** The resource location. */
  location?: string;
};

/** IoT Connector definition. */
export type IotConnector = TaggedResource &
  ServiceManagedIdentity & {
    /**
     * Metadata pertaining to creation and last modification of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly systemData?: SystemData;
    /** The provisioning state. */
    provisioningState?: ProvisioningState;
    /** Source configuration. */
    ingestionEndpointConfiguration?: IotEventHubIngestionEndpointConfiguration;
    /** Device Mappings. */
    deviceMapping?: IotMappingProperties;
  };

/** The description of Fhir Service */
export type FhirService = TaggedResource &
  ServiceManagedIdentity & {
    /** The kind of the service. */
    kind?: FhirServiceKind;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly systemData?: SystemData;
    /** The provisioning state. */
    provisioningState?: ProvisioningState;
    /** Fhir Service access policies. */
    accessPolicies?: FhirServiceAccessPolicyEntry[];
    /** Fhir Service Azure container registry configuration. */
    acrConfiguration?: FhirServiceAcrConfiguration;
    /** Fhir Service authentication configuration. */
    authenticationConfiguration?: FhirServiceAuthenticationConfiguration;
    /** Fhir Service Cors configuration. */
    corsConfiguration?: FhirServiceCorsConfiguration;
    /** Fhir Service export configuration. */
    exportConfiguration?: FhirServiceExportConfiguration;
  };

/** IoT Connector destination properties for an Azure FHIR service. */
export type IotFhirDestinationProperties = IotDestinationProperties & {
  /** Determines how resource identity is resolved on the destination. */
  resourceIdentityResolutionType: IotIdentityResolutionType;
  /** Fully qualified resource id of the FHIR service to connect to. */
  fhirServiceResourceId: string;
  /** FHIR Mappings */
  fhirMapping: IotMappingProperties;
};

/** The Private Endpoint Connection resource. */
export type PrivateEndpointConnectionDescription = PrivateEndpointConnection & {
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
};

/** The Private Endpoint Connection resource. */
export type PrivateLinkResourceDescription = PrivateLinkResource & {
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
};

/** Workspace resource. */
export type Workspace = TaggedResource & {
  /** Workspaces resource specific properties. */
  properties?: WorkspaceProperties;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
};

/** The description of Dicom Service */
export type DicomService = TaggedResource & {
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The provisioning state. */
  provisioningState?: ProvisioningState;
  /** Dicom Service authentication configuration. */
  authenticationConfiguration?: DicomServiceAuthenticationConfiguration;
  /**
   * The url of the Dicom Services.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly serviceUrl?: string;
};

/** IoT Connector FHIR destination definition. */
export type IotFhirDestination = LocationBasedResource & {
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The provisioning state. */
  provisioningState?: ProvisioningState;
  /** Determines how resource identity is resolved on the destination. */
  resourceIdentityResolutionType: IotIdentityResolutionType;
  /** Fully qualified resource id of the FHIR service to connect to. */
  fhirServiceResourceId: string;
  /** FHIR Mappings */
  fhirMapping: IotMappingProperties;
};

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  Deleting = "Deleting",
  Succeeded = "Succeeded",
  Creating = "Creating",
  Accepted = "Accepted",
  Verifying = "Verifying",
  Updating = "Updating",
  Failed = "Failed",
  Canceled = "Canceled",
  Deprovisioned = "Deprovisioned",
  Moving = "Moving",
  Suspended = "Suspended",
  Warned = "Warned",
  SystemMaintenance = "SystemMaintenance"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Deleting** \
 * **Succeeded** \
 * **Creating** \
 * **Accepted** \
 * **Verifying** \
 * **Updating** \
 * **Failed** \
 * **Canceled** \
 * **Deprovisioned** \
 * **Moving** \
 * **Suspended** \
 * **Warned** \
 * **SystemMaintenance**
 */
export type ProvisioningState = string;

/** Known values of {@link PrivateEndpointServiceConnectionStatus} that the service accepts. */
export enum KnownPrivateEndpointServiceConnectionStatus {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected"
}

/**
 * Defines values for PrivateEndpointServiceConnectionStatus. \
 * {@link KnownPrivateEndpointServiceConnectionStatus} can be used interchangeably with PrivateEndpointServiceConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Approved** \
 * **Rejected**
 */
export type PrivateEndpointServiceConnectionStatus = string;

/** Known values of {@link PrivateEndpointConnectionProvisioningState} that the service accepts. */
export enum KnownPrivateEndpointConnectionProvisioningState {
  Succeeded = "Succeeded",
  Creating = "Creating",
  Deleting = "Deleting",
  Failed = "Failed"
}

/**
 * Defines values for PrivateEndpointConnectionProvisioningState. \
 * {@link KnownPrivateEndpointConnectionProvisioningState} can be used interchangeably with PrivateEndpointConnectionProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Creating** \
 * **Deleting** \
 * **Failed**
 */
export type PrivateEndpointConnectionProvisioningState = string;

/** Known values of {@link PublicNetworkAccess} that the service accepts. */
export enum KnownPublicNetworkAccess {
  Enabled = "Enabled",
  Disabled = "Disabled"
}

/**
 * Defines values for PublicNetworkAccess. \
 * {@link KnownPublicNetworkAccess} can be used interchangeably with PublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type PublicNetworkAccess = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  User = "User",
  Application = "Application",
  ManagedIdentity = "ManagedIdentity",
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link ManagedServiceIdentityType} that the service accepts. */
export enum KnownManagedServiceIdentityType {
  SystemAssigned = "SystemAssigned",
  None = "None"
}

/**
 * Defines values for ManagedServiceIdentityType. \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SystemAssigned** \
 * **None**
 */
export type ManagedServiceIdentityType = string;

/** Known values of {@link IotIdentityResolutionType} that the service accepts. */
export enum KnownIotIdentityResolutionType {
  Create = "Create",
  Lookup = "Lookup"
}

/**
 * Defines values for IotIdentityResolutionType. \
 * {@link KnownIotIdentityResolutionType} can be used interchangeably with IotIdentityResolutionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Create** \
 * **Lookup**
 */
export type IotIdentityResolutionType = string;

/** Known values of {@link FhirServiceKind} that the service accepts. */
export enum KnownFhirServiceKind {
  FhirStu3 = "fhir-Stu3",
  FhirR4 = "fhir-R4"
}

/**
 * Defines values for FhirServiceKind. \
 * {@link KnownFhirServiceKind} can be used interchangeably with FhirServiceKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **fhir-Stu3** \
 * **fhir-R4**
 */
export type FhirServiceKind = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  Internal = "Internal"
}

/**
 * Defines values for ActionType. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;

/** Known values of {@link OperationResultStatus} that the service accepts. */
export enum KnownOperationResultStatus {
  Canceled = "Canceled",
  Succeeded = "Succeeded",
  Failed = "Failed",
  Requested = "Requested",
  Running = "Running"
}

/**
 * Defines values for OperationResultStatus. \
 * {@link KnownOperationResultStatus} can be used interchangeably with OperationResultStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Canceled** \
 * **Succeeded** \
 * **Failed** \
 * **Requested** \
 * **Running**
 */
export type OperationResultStatus = string;
/** Defines values for Kind. */
export type Kind = "fhir" | "fhir-Stu3" | "fhir-R4";
/** Defines values for ServiceNameUnavailabilityReason. */
export type ServiceNameUnavailabilityReason = "Invalid" | "AlreadyExists";

/** Optional parameters. */
export interface ServicesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ServicesGetResponse = ServicesDescription;

/** Optional parameters. */
export interface ServicesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type ServicesCreateOrUpdateResponse = ServicesDescription;

/** Optional parameters. */
export interface ServicesUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type ServicesUpdateResponse = ServicesDescription;

/** Optional parameters. */
export interface ServicesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ServicesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type ServicesListResponse = ServicesDescriptionListResult;

/** Optional parameters. */
export interface ServicesListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type ServicesListByResourceGroupResponse = ServicesDescriptionListResult;

/** Optional parameters. */
export interface ServicesCheckNameAvailabilityOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkNameAvailability operation. */
export type ServicesCheckNameAvailabilityResponse = ServicesNameAvailabilityInfo;

/** Optional parameters. */
export interface ServicesListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type ServicesListNextResponse = ServicesDescriptionListResult;

/** Optional parameters. */
export interface ServicesListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type ServicesListByResourceGroupNextResponse = ServicesDescriptionListResult;

/** Optional parameters. */
export interface PrivateEndpointConnectionsListByServiceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByService operation. */
export type PrivateEndpointConnectionsListByServiceResponse = PrivateEndpointConnectionListResultDescription;

/** Optional parameters. */
export interface PrivateEndpointConnectionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnectionDescription;

/** Optional parameters. */
export interface PrivateEndpointConnectionsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type PrivateEndpointConnectionsCreateOrUpdateResponse = PrivateEndpointConnectionDescription;

/** Optional parameters. */
export interface PrivateEndpointConnectionsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface PrivateLinkResourcesListByServiceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByService operation. */
export type PrivateLinkResourcesListByServiceResponse = PrivateLinkResourceListResultDescription;

/** Optional parameters. */
export interface PrivateLinkResourcesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PrivateLinkResourcesGetResponse = PrivateLinkResourceDescription;

/** Optional parameters. */
export interface WorkspacesListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type WorkspacesListBySubscriptionResponse = WorkspaceList;

/** Optional parameters. */
export interface WorkspacesListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type WorkspacesListByResourceGroupResponse = WorkspaceList;

/** Optional parameters. */
export interface WorkspacesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type WorkspacesGetResponse = Workspace;

/** Optional parameters. */
export interface WorkspacesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type WorkspacesCreateOrUpdateResponse = Workspace;

/** Optional parameters. */
export interface WorkspacesUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type WorkspacesUpdateResponse = Workspace;

/** Optional parameters. */
export interface WorkspacesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface WorkspacesListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type WorkspacesListBySubscriptionNextResponse = WorkspaceList;

/** Optional parameters. */
export interface WorkspacesListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type WorkspacesListByResourceGroupNextResponse = WorkspaceList;

/** Optional parameters. */
export interface DicomServicesListByWorkspaceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByWorkspace operation. */
export type DicomServicesListByWorkspaceResponse = DicomServiceCollection;

/** Optional parameters. */
export interface DicomServicesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type DicomServicesGetResponse = DicomService;

/** Optional parameters. */
export interface DicomServicesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type DicomServicesCreateOrUpdateResponse = DicomService;

/** Optional parameters. */
export interface DicomServicesUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type DicomServicesUpdateResponse = DicomService;

/** Optional parameters. */
export interface DicomServicesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface DicomServicesListByWorkspaceNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByWorkspaceNext operation. */
export type DicomServicesListByWorkspaceNextResponse = DicomServiceCollection;

/** Optional parameters. */
export interface IotConnectorsListByWorkspaceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByWorkspace operation. */
export type IotConnectorsListByWorkspaceResponse = IotConnectorCollection;

/** Optional parameters. */
export interface IotConnectorsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type IotConnectorsGetResponse = IotConnector;

/** Optional parameters. */
export interface IotConnectorsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type IotConnectorsCreateOrUpdateResponse = IotConnector;

/** Optional parameters. */
export interface IotConnectorsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type IotConnectorsUpdateResponse = IotConnector;

/** Optional parameters. */
export interface IotConnectorsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface IotConnectorsListByWorkspaceNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByWorkspaceNext operation. */
export type IotConnectorsListByWorkspaceNextResponse = IotConnectorCollection;

/** Optional parameters. */
export interface FhirDestinationsListByIotConnectorOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByIotConnector operation. */
export type FhirDestinationsListByIotConnectorResponse = IotFhirDestinationCollection;

/** Optional parameters. */
export interface FhirDestinationsListByIotConnectorNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByIotConnectorNext operation. */
export type FhirDestinationsListByIotConnectorNextResponse = IotFhirDestinationCollection;

/** Optional parameters. */
export interface IotConnectorFhirDestinationGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type IotConnectorFhirDestinationGetResponse = IotFhirDestination;

/** Optional parameters. */
export interface IotConnectorFhirDestinationCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type IotConnectorFhirDestinationCreateOrUpdateResponse = IotFhirDestination;

/** Optional parameters. */
export interface IotConnectorFhirDestinationDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface FhirServicesListByWorkspaceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByWorkspace operation. */
export type FhirServicesListByWorkspaceResponse = FhirServiceCollection;

/** Optional parameters. */
export interface FhirServicesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type FhirServicesGetResponse = FhirService;

/** Optional parameters. */
export interface FhirServicesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type FhirServicesCreateOrUpdateResponse = FhirService;

/** Optional parameters. */
export interface FhirServicesUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type FhirServicesUpdateResponse = FhirService;

/** Optional parameters. */
export interface FhirServicesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface FhirServicesListByWorkspaceNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByWorkspaceNext operation. */
export type FhirServicesListByWorkspaceNextResponse = FhirServiceCollection;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = ListOperations;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = ListOperations;

/** Optional parameters. */
export interface OperationResultsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type OperationResultsGetResponse = OperationResultsDescription;

/** Optional parameters. */
export interface HealthCareApisClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
