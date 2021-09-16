/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ServerAzureADAdministrator,
  ServerAzureADAdministratorsListByServerOptionalParams,
  AdministratorName,
  ServerAzureADAdministratorsGetOptionalParams,
  ServerAzureADAdministratorsGetResponse,
  ServerAzureADAdministratorsCreateOrUpdateOptionalParams,
  ServerAzureADAdministratorsCreateOrUpdateResponse,
  ServerAzureADAdministratorsDeleteOptionalParams,
  ServerAzureADAdministratorsDisableAzureADOnlyAuthenticationOptionalParams,
  ServerAzureADAdministratorsDisableAzureADOnlyAuthenticationResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServerAzureADAdministrators. */
export interface ServerAzureADAdministrators {
  /**
   * Gets a list of Azure Active Directory administrators in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerAzureADAdministratorsListByServerOptionalParams
  ): PagedAsyncIterableIterator<ServerAzureADAdministrator>;
  /**
   * Gets a Azure Active Directory administrator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param administratorName The name of server active directory administrator.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    administratorName: AdministratorName,
    options?: ServerAzureADAdministratorsGetOptionalParams
  ): Promise<ServerAzureADAdministratorsGetResponse>;
  /**
   * Creates or updates an existing Azure Active Directory administrator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param administratorName
   * @param parameters The required parameters for creating or updating an Active Directory
   *                   Administrator.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    administratorName: AdministratorName,
    parameters: ServerAzureADAdministrator,
    options?: ServerAzureADAdministratorsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServerAzureADAdministratorsCreateOrUpdateResponse>,
      ServerAzureADAdministratorsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an existing Azure Active Directory administrator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param administratorName
   * @param parameters The required parameters for creating or updating an Active Directory
   *                   Administrator.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    administratorName: AdministratorName,
    parameters: ServerAzureADAdministrator,
    options?: ServerAzureADAdministratorsCreateOrUpdateOptionalParams
  ): Promise<ServerAzureADAdministratorsCreateOrUpdateResponse>;
  /**
   * Deletes the Azure Active Directory administrator with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param administratorName The name of server active directory administrator.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serverName: string,
    administratorName: AdministratorName,
    options?: ServerAzureADAdministratorsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the Azure Active Directory administrator with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param administratorName The name of server active directory administrator.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    administratorName: AdministratorName,
    options?: ServerAzureADAdministratorsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Disables Azure Active Directory only authentication on logical Server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  beginDisableAzureADOnlyAuthentication(
    resourceGroupName: string,
    serverName: string,
    options?: ServerAzureADAdministratorsDisableAzureADOnlyAuthenticationOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        ServerAzureADAdministratorsDisableAzureADOnlyAuthenticationResponse
      >,
      ServerAzureADAdministratorsDisableAzureADOnlyAuthenticationResponse
    >
  >;
  /**
   * Disables Azure Active Directory only authentication on logical Server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  beginDisableAzureADOnlyAuthenticationAndWait(
    resourceGroupName: string,
    serverName: string,
    options?: ServerAzureADAdministratorsDisableAzureADOnlyAuthenticationOptionalParams
  ): Promise<
    ServerAzureADAdministratorsDisableAzureADOnlyAuthenticationResponse
  >;
}
