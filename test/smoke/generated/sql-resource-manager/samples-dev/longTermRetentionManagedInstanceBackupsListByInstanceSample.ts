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
 * This sample demonstrates how to Lists the long term retention backups for a given managed instance.
 *
 * @summary Lists the long term retention backups for a given managed instance.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-05-01-preview/examples/ManagedInstanceLongTermRetentionBackupListByInstance.json
 */
async function getAllLongTermRetentionBackupsUnderTheManagedInstance() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const locationName = "japaneast";
  const managedInstanceName = "testInstance";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.longTermRetentionManagedInstanceBackups.listByInstance(
    locationName,
    managedInstanceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getAllLongTermRetentionBackupsUnderTheManagedInstance().catch(console.error);
