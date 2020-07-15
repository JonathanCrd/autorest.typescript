/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export type DeploymentScriptUnion =
  | DeploymentScript
  | AzurePowerShellScript
  | AzureCliScript;

/**
 * Managed identity generic object.
 */
export interface ManagedServiceIdentity {
  /**
   * Type of the managed identity.
   */
  type?: ManagedServiceIdentityType;
  /**
   * The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity.
   */
  userAssignedIdentities?: { [propertyName: string]: UserAssignedIdentity };
}

/**
 * User-assigned managed identity.
 */
export interface UserAssignedIdentity {
  /**
   * Azure Active Directory principal ID associated with this identity.
   */
  principalId?: string;
  /**
   * Client App Id associated with this identity.
   */
  clientId?: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemData {
  /**
   * The identity that created the resource.
   */
  createdBy?: string;
  /**
   * The type of identity that created the resource.
   */
  createdByType?: CreatedByType;
  /**
   * The timestamp of resource creation (UTC).
   */
  createdAt?: Date;
  /**
   * The identity that last modified the resource.
   */
  lastModifiedBy?: string;
  /**
   * The type of identity that last modified the resource.
   */
  lastModifiedByType?: CreatedByType;
  /**
   * The type of identity that last modified the resource.
   */
  lastModifiedAt?: Date;
}

/**
 * Common properties for all Azure resources.
 */
export interface AzureResourceBase {
  /**
   * String Id used to locate any resource on Azure.
   */
  readonly id?: string;
  /**
   * Name of this resource.
   */
  readonly name?: string;
  /**
   * Type of this resource.
   */
  readonly type?: string;
}

/**
 * Deployment scripts error response.
 */
export interface DeploymentScriptsError {
  /**
   * The resource management error response.
   */
  error?: ErrorResponse;
}

/**
 * The resource management error response.
 */
export interface ErrorResponse {
  /**
   * The error code.
   */
  readonly code?: string;
  /**
   * The error message.
   */
  readonly message?: string;
  /**
   * The error target.
   */
  readonly target?: string;
  /**
   * The error details.
   */
  readonly details?: ErrorResponse[];
  /**
   * The error additional info.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/**
 * The resource management error additional info.
 */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   */
  readonly type?: string;
  /**
   * The additional info.
   */
  readonly info?: any;
}

/**
 * List of deployment scripts.
 */
export interface DeploymentScriptListResult {
  /**
   * An array of deployment scripts.
   */
  value?: DeploymentScriptUnion[];
  /**
   * The URL to use for getting the next set of results.
   */
  readonly nextLink?: string;
}

/**
 * Deployment script execution logs.
 */
export interface ScriptLogsList {
  /**
   * Deployment scripts logs.
   */
  value?: ScriptLog[];
}

/**
 * Common properties for the deployment script.
 */
export interface DeploymentScriptPropertiesBase {
  /**
   * Container settings.
   */
  containerSettings?: ContainerConfiguration;
  /**
   * Storage Account settings.
   */
  storageAccountSettings?: StorageAccountConfiguration;
  /**
   * The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'.
   */
  cleanupPreference?: CleanupOptions;
  /**
   * State of the script execution. This only appears in the response.
   */
  readonly provisioningState?: ScriptProvisioningState;
  /**
   * Contains the results of script execution.
   */
  readonly status?: ScriptStatus;
  /**
   * List of script outputs.
   */
  readonly outputs?: { [propertyName: string]: any };
}

/**
 * Settings to customize ACI container instance.
 */
export interface ContainerConfiguration {
  /**
   * Container group name, if not specified then the name will get auto-generated. Not specifying a 'containerGroupName' indicates the system to generate a unique name which might end up flagging an Azure Policy as non-compliant. Use 'containerGroupName' when you have an Azure Policy that expects a specific naming convention or when you want to fully control the name. 'containerGroupName' property must be between 1 and 63 characters long, must contain only lowercase letters, numbers, and dashes and it cannot start or end with a dash and consecutive dashes are not allowed. To specify a 'containerGroupName', add the following object to properties: { "containerSettings": { "containerGroupName": "contoso-container" } }. If you do not want to specify a 'containerGroupName' then do not add 'containerSettings' property.
   */
  containerGroupName?: string;
}

/**
 * Settings to use an existing storage account. Valid storage account kinds are: Storage, StorageV2 and FileStorage
 */
export interface StorageAccountConfiguration {
  /**
   * The storage account name.
   */
  storageAccountName?: string;
  /**
   * The storage account access key.
   */
  storageAccountKey?: string;
}

/**
 * Generic object modeling results of script execution.
 */
export interface ScriptStatus {
  /**
   * ACI resource Id.
   */
  readonly containerInstanceId?: string;
  /**
   * Storage account resource Id.
   */
  readonly storageAccountId?: string;
  /**
   * Start time of the script execution.
   */
  readonly startTime?: Date;
  /**
   * End time of the script execution.
   */
  readonly endTime?: Date;
  /**
   * Time the deployment script resource will expire.
   */
  readonly expirationTime?: Date;
  /**
   * Error that is relayed from the script execution.
   */
  error?: ErrorResponse;
}

/**
 * Common configuration settings for both Azure PowerShell and Azure CLI scripts.
 */
export interface ScriptConfigurationBase {
  /**
   * Uri for the script. This is the entry point for the external script.
   */
  primaryScriptUri?: string;
  /**
   * Supporting files for the external script.
   */
  supportingScriptUris?: string[];
  /**
   * Script body.
   */
  scriptContent?: string;
  /**
   * Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2'
   */
  arguments?: string;
  /**
   * The environment variables to pass over to the script.
   */
  environmentVariables?: EnvironmentVariable[];
  /**
   * Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID.
   */
  forceUpdateTag?: string;
  /**
   * Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P7D means one week).
   */
  retentionInterval: string;
  /**
   * Maximum allowed script execution time specified in ISO 8601 format. Default value is PT1H
   */
  timeout?: string;
}

/**
 * The environment variable to pass to the script in the container instance.
 */
export interface EnvironmentVariable {
  /**
   * The name of the environment variable.
   */
  name: string;
  /**
   * The value of the environment variable.
   */
  value?: string;
  /**
   * The value of the secure environment variable.
   */
  secureValue?: string;
}

/**
 * Deployment script object.
 */
export type DeploymentScript = AzureResourceBase & {
  /**
   * Managed identity to be used for this deployment script. Currently, only user-assigned MSI is supported.
   */
  identity: ManagedServiceIdentity;
  /**
   * The location of the ACI and the storage account for the deployment script.
   */
  location: string;
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
  /**
   * Type of the script.
   */
  kind: ScriptType;
  /**
   * The system metadata related to this resource.
   */
  readonly systemData?: SystemData;
};

/**
 * Deployment script parameters to be updated.
 */
export type DeploymentScriptUpdateParameter = AzureResourceBase & {
  /**
   * Resource tags to be updated.
   */
  tags?: { [propertyName: string]: string };
};

/**
 * Script execution log object.
 */
export type ScriptLog = AzureResourceBase & {
  /**
   * Script execution logs in text format.
   */
  readonly log?: string;
};

/**
 * Properties of the Azure PowerShell script object.
 */
export type AzurePowerShellScriptProperties = DeploymentScriptPropertiesBase &
  ScriptConfigurationBase & {
    /**
     * Azure PowerShell module version to be used.
     */
    azPowerShellVersion: string;
  };

/**
 * Properties of the Azure CLI script object.
 */
export type AzureCliScriptProperties = DeploymentScriptPropertiesBase &
  ScriptConfigurationBase & {
    /**
     * Azure CLI module version to be used.
     */
    azCliVersion: string;
  };

/**
 * Object model for the Azure PowerShell script.
 */
export type AzurePowerShellScript = DeploymentScript & {
  /**
   * Container settings.
   */
  containerSettings?: ContainerConfiguration;
  /**
   * Storage Account settings.
   */
  storageAccountSettings?: StorageAccountConfiguration;
  /**
   * The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'.
   */
  cleanupPreference?: CleanupOptions;
  /**
   * State of the script execution. This only appears in the response.
   */
  readonly provisioningState?: ScriptProvisioningState;
  /**
   * Contains the results of script execution.
   */
  readonly status?: ScriptStatus;
  /**
   * List of script outputs.
   */
  readonly outputs?: { [propertyName: string]: any };
  /**
   * Uri for the script. This is the entry point for the external script.
   */
  primaryScriptUri?: string;
  /**
   * Supporting files for the external script.
   */
  supportingScriptUris?: string[];
  /**
   * Script body.
   */
  scriptContent?: string;
  /**
   * Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2'
   */
  arguments?: string;
  /**
   * The environment variables to pass over to the script.
   */
  environmentVariables?: EnvironmentVariable[];
  /**
   * Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID.
   */
  forceUpdateTag?: string;
  /**
   * Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P7D means one week).
   */
  retentionInterval: string;
  /**
   * Maximum allowed script execution time specified in ISO 8601 format. Default value is PT1H
   */
  timeout?: string;
  /**
   * Azure PowerShell module version to be used.
   */
  azPowerShellVersion: string;
};

/**
 * Object model for the Azure CLI script.
 */
export type AzureCliScript = DeploymentScript & {
  /**
   * Container settings.
   */
  containerSettings?: ContainerConfiguration;
  /**
   * Storage Account settings.
   */
  storageAccountSettings?: StorageAccountConfiguration;
  /**
   * The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'.
   */
  cleanupPreference?: CleanupOptions;
  /**
   * State of the script execution. This only appears in the response.
   */
  readonly provisioningState?: ScriptProvisioningState;
  /**
   * Contains the results of script execution.
   */
  readonly status?: ScriptStatus;
  /**
   * List of script outputs.
   */
  readonly outputs?: { [propertyName: string]: any };
  /**
   * Uri for the script. This is the entry point for the external script.
   */
  primaryScriptUri?: string;
  /**
   * Supporting files for the external script.
   */
  supportingScriptUris?: string[];
  /**
   * Script body.
   */
  scriptContent?: string;
  /**
   * Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2'
   */
  arguments?: string;
  /**
   * The environment variables to pass over to the script.
   */
  environmentVariables?: EnvironmentVariable[];
  /**
   * Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID.
   */
  forceUpdateTag?: string;
  /**
   * Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P7D means one week).
   */
  retentionInterval: string;
  /**
   * Maximum allowed script execution time specified in ISO 8601 format. Default value is PT1H
   */
  timeout?: string;
  /**
   * Azure CLI module version to be used.
   */
  azCliVersion: string;
};
/**
 * Defines values for ManagedServiceIdentityType.
 */
export type ManagedServiceIdentityType = "UserAssigned";
/**
 * Defines values for ScriptType.
 */
export type ScriptType = "AzurePowerShell" | "AzureCLI";
/**
 * Defines values for CreatedByType.
 */
export type CreatedByType = "User" | "Application" | "ManagedIdentity" | "Key";
/**
 * Defines values for CleanupOptions.
 */
export type CleanupOptions = "Always" | "OnSuccess" | "OnExpiration";
/**
 * Defines values for ScriptProvisioningState.
 */
export type ScriptProvisioningState =
  | "Creating"
  | "ProvisioningResources"
  | "Running"
  | "Succeeded"
  | "Failed"
  | "Canceled";

/**
 * Contains response data for the create operation.
 */
export type DeploymentScriptsCreateResponse = DeploymentScriptUnion & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DeploymentScriptUnion;
  };
};

/**
 * Optional parameters.
 */
export interface DeploymentScriptsUpdateOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Deployment script resource with the tags to be updated.
   */
  deploymentScript?: DeploymentScriptUpdateParameter;
}

/**
 * Contains response data for the update operation.
 */
export type DeploymentScriptsUpdateResponse = DeploymentScriptUnion & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DeploymentScriptUnion;
  };
};

/**
 * Contains response data for the get operation.
 */
export type DeploymentScriptsGetResponse = DeploymentScriptUnion & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DeploymentScriptUnion;
  };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type DeploymentScriptsListBySubscriptionResponse = DeploymentScriptListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DeploymentScriptListResult;
  };
};

/**
 * Contains response data for the getLogs operation.
 */
export type DeploymentScriptsGetLogsResponse = ScriptLogsList & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ScriptLogsList;
  };
};

/**
 * Optional parameters.
 */
export interface DeploymentScriptsGetLogsDefaultOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * The number of lines to show from the tail of the deployment script log. Valid value is a positive number up to 1000. If 'tail' is not provided, all available logs are shown up to container instance log capacity of 4mb.
   */
  tail?: number;
}

/**
 * Contains response data for the getLogsDefault operation.
 */
export type DeploymentScriptsGetLogsDefaultResponse = ScriptLog & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ScriptLog;
  };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type DeploymentScriptsListByResourceGroupResponse = DeploymentScriptListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DeploymentScriptListResult;
  };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type DeploymentScriptsListBySubscriptionNextResponse = DeploymentScriptListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DeploymentScriptListResult;
  };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type DeploymentScriptsListByResourceGroupNextResponse = DeploymentScriptListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DeploymentScriptListResult;
  };
};

/**
 * Optional parameters.
 */
export interface DeploymentScriptsClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * server parameter
   */
  $host?: string;
  /**
   * Api Version
   */
  apiVersion?: string;
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}
