/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists the long term retention backups for a given server.
 *
 * @summary Lists the long term retention backups for a given server.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-05-01-preview/examples/ResourceGroupBasedLongTermRetentionBackupListByServer.json
 */
async function getAllLongTermRetentionBackupsUnderTheServer() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testResourceGroup";
  const locationName = "japaneast";
  const longTermRetentionServerName = "testserver";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.longTermRetentionBackups.listByResourceGroupServer(
    resourceGroupName,
    locationName,
    longTermRetentionServerName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getAllLongTermRetentionBackupsUnderTheServer().catch(console.error);
