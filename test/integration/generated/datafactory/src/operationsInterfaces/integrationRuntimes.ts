import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  IntegrationRuntimeResource,
  IntegrationRuntimesListByFactoryOptionalParams,
  IntegrationRuntimesCreateOrUpdateOptionalParams,
  IntegrationRuntimesCreateOrUpdateResponse,
  IntegrationRuntimesGetOptionalParams,
  IntegrationRuntimesGetResponse,
  UpdateIntegrationRuntimeRequest,
  IntegrationRuntimesUpdateOptionalParams,
  IntegrationRuntimesUpdateResponse,
  IntegrationRuntimesDeleteOptionalParams,
  IntegrationRuntimesGetStatusOptionalParams,
  IntegrationRuntimesGetStatusResponse,
  IntegrationRuntimesListOutboundNetworkDependenciesEndpointsOptionalParams,
  IntegrationRuntimesListOutboundNetworkDependenciesEndpointsResponse,
  IntegrationRuntimesGetConnectionInfoOptionalParams,
  IntegrationRuntimesGetConnectionInfoResponse,
  IntegrationRuntimeRegenerateKeyParameters,
  IntegrationRuntimesRegenerateAuthKeyOptionalParams,
  IntegrationRuntimesRegenerateAuthKeyResponse,
  IntegrationRuntimesListAuthKeysOptionalParams,
  IntegrationRuntimesListAuthKeysResponse,
  IntegrationRuntimesStartOptionalParams,
  IntegrationRuntimesStartResponse,
  IntegrationRuntimesStopOptionalParams,
  IntegrationRuntimesSyncCredentialsOptionalParams,
  IntegrationRuntimesGetMonitoringDataOptionalParams,
  IntegrationRuntimesGetMonitoringDataResponse,
  IntegrationRuntimesUpgradeOptionalParams,
  LinkedIntegrationRuntimeRequest,
  IntegrationRuntimesRemoveLinksOptionalParams,
  CreateLinkedIntegrationRuntimeRequest,
  IntegrationRuntimesCreateLinkedIntegrationRuntimeOptionalParams,
  IntegrationRuntimesCreateLinkedIntegrationRuntimeResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a IntegrationRuntimes. */
export interface IntegrationRuntimes {
  /**
   * Lists integration runtimes.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: IntegrationRuntimesListByFactoryOptionalParams
  ): PagedAsyncIterableIterator<IntegrationRuntimeResource>;
  /**
   * Creates or updates an integration runtime.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param integrationRuntime Integration runtime resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    integrationRuntime: IntegrationRuntimeResource,
    options?: IntegrationRuntimesCreateOrUpdateOptionalParams
  ): Promise<IntegrationRuntimesCreateOrUpdateResponse>;
  /**
   * Gets an integration runtime.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimesGetOptionalParams
  ): Promise<IntegrationRuntimesGetResponse>;
  /**
   * Updates an integration runtime.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param updateIntegrationRuntimeRequest The parameters for updating an integration runtime.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    updateIntegrationRuntimeRequest: UpdateIntegrationRuntimeRequest,
    options?: IntegrationRuntimesUpdateOptionalParams
  ): Promise<IntegrationRuntimesUpdateResponse>;
  /**
   * Deletes an integration runtime.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets detailed status information for an integration runtime.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  getStatus(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimesGetStatusOptionalParams
  ): Promise<IntegrationRuntimesGetStatusResponse>;
  /**
   * Gets the list of outbound network dependencies for a given Azure-SSIS integration runtime.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  listOutboundNetworkDependenciesEndpoints(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimesListOutboundNetworkDependenciesEndpointsOptionalParams
  ): Promise<
    IntegrationRuntimesListOutboundNetworkDependenciesEndpointsResponse
  >;
  /**
   * Gets the on-premises integration runtime connection information for encrypting the on-premises data
   * source credentials.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  getConnectionInfo(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimesGetConnectionInfoOptionalParams
  ): Promise<IntegrationRuntimesGetConnectionInfoResponse>;
  /**
   * Regenerates the authentication key for an integration runtime.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param regenerateKeyParameters The parameters for regenerating integration runtime authentication
   *                                key.
   * @param options The options parameters.
   */
  regenerateAuthKey(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    regenerateKeyParameters: IntegrationRuntimeRegenerateKeyParameters,
    options?: IntegrationRuntimesRegenerateAuthKeyOptionalParams
  ): Promise<IntegrationRuntimesRegenerateAuthKeyResponse>;
  /**
   * Retrieves the authentication keys for an integration runtime.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  listAuthKeys(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimesListAuthKeysOptionalParams
  ): Promise<IntegrationRuntimesListAuthKeysResponse>;
  /**
   * Starts a ManagedReserved type integration runtime.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  beginStart(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimesStartOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IntegrationRuntimesStartResponse>,
      IntegrationRuntimesStartResponse
    >
  >;
  /**
   * Starts a ManagedReserved type integration runtime.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  beginStartAndWait(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimesStartOptionalParams
  ): Promise<IntegrationRuntimesStartResponse>;
  /**
   * Stops a ManagedReserved type integration runtime.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  beginStop(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimesStopOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Stops a ManagedReserved type integration runtime.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  beginStopAndWait(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimesStopOptionalParams
  ): Promise<void>;
  /**
   * Force the integration runtime to synchronize credentials across integration runtime nodes, and this
   * will override the credentials across all worker nodes with those available on the dispatcher node.
   * If you already have the latest credential backup file, you should manually import it (preferred) on
   * any self-hosted integration runtime node than using this API directly.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  syncCredentials(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimesSyncCredentialsOptionalParams
  ): Promise<void>;
  /**
   * Get the integration runtime monitoring data, which includes the monitor data for all the nodes under
   * this integration runtime.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  getMonitoringData(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimesGetMonitoringDataOptionalParams
  ): Promise<IntegrationRuntimesGetMonitoringDataResponse>;
  /**
   * Upgrade self-hosted integration runtime to latest version if availability.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  upgrade(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimesUpgradeOptionalParams
  ): Promise<void>;
  /**
   * Remove all linked integration runtimes under specific data factory in a self-hosted integration
   * runtime.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param linkedIntegrationRuntimeRequest The data factory name for the linked integration runtime.
   * @param options The options parameters.
   */
  removeLinks(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    linkedIntegrationRuntimeRequest: LinkedIntegrationRuntimeRequest,
    options?: IntegrationRuntimesRemoveLinksOptionalParams
  ): Promise<void>;
  /**
   * Create a linked integration runtime entry in a shared integration runtime.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param createLinkedIntegrationRuntimeRequest The linked integration runtime properties.
   * @param options The options parameters.
   */
  createLinkedIntegrationRuntime(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    createLinkedIntegrationRuntimeRequest: CreateLinkedIntegrationRuntimeRequest,
    options?: IntegrationRuntimesCreateLinkedIntegrationRuntimeOptionalParams
  ): Promise<IntegrationRuntimesCreateLinkedIntegrationRuntimeResponse>;
}
