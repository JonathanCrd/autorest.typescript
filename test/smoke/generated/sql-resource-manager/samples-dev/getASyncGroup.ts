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
 * This sample demonstrates how to Gets a sync group.
 *
 * @summary Gets a sync group.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/SyncGroupGet.json
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function getASyncGroup() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "syncgroupcrud-65440";
  const serverName = "syncgroupcrud-8475";
  const databaseName = "syncgroupcrud-4328";
  const syncGroupName = "syncgroupcrud-3187";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.syncGroups.get(
    resourceGroupName,
    serverName,
    databaseName,
    syncGroupName
  );
  console.log(result);
}

getASyncGroup().catch(console.error);
