/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Updates an existing encryption protector.
 *
 * @summary Updates an existing encryption protector.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedInstanceEncryptionProtectorCreateOrUpdateServiceManaged.json
 */
import {
  ManagedInstanceEncryptionProtector,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function updateTheEncryptionProtectorToServiceManaged() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "sqlcrudtest-7398";
  const managedInstanceName = "sqlcrudtest-4645";
  const encryptionProtectorName = "current";
  const parameters: ManagedInstanceEncryptionProtector = {
    serverKeyName: "ServiceManaged",
    serverKeyType: "ServiceManaged"
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.managedInstanceEncryptionProtectors.beginCreateOrUpdateAndWait(
    resourceGroupName,
    managedInstanceName,
    encryptionProtectorName,
    parameters
  );
  console.log(result);
}

updateTheEncryptionProtectorToServiceManaged().catch(console.error);
