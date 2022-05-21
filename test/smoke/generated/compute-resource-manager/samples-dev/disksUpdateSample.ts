/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  DiskUpdate,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates (patches) a disk.
 *
 * @summary Updates (patches) a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/CreateOrUpdateABurstingEnabledManagedDisk.json
 */
async function createOrUpdateABurstingEnabledManagedDisk() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const diskName = "myDisk";
  const disk: DiskUpdate = { burstingEnabled: true, diskSizeGB: 1024 };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

createOrUpdateABurstingEnabledManagedDisk().catch(console.error);

/**
 * This sample demonstrates how to Updates (patches) a disk.
 *
 * @summary Updates (patches) a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/UpdateAManagedDiskToAddAcceleratedNetworking.json
 */
async function updateAManagedDiskToAddAcceleratedNetworking() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const diskName = "myDisk";
  const disk: DiskUpdate = {
    supportedCapabilities: { acceleratedNetwork: false }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

updateAManagedDiskToAddAcceleratedNetworking().catch(console.error);

/**
 * This sample demonstrates how to Updates (patches) a disk.
 *
 * @summary Updates (patches) a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/UpdateAManagedDiskToAddPurchasePlan.json
 */
async function updateAManagedDiskToAddPurchasePlan() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const diskName = "myDisk";
  const disk: DiskUpdate = {
    purchasePlan: {
      name: "myPurchasePlanName",
      product: "myPurchasePlanProduct",
      promotionCode: "myPurchasePlanPromotionCode",
      publisher: "myPurchasePlanPublisher"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

updateAManagedDiskToAddPurchasePlan().catch(console.error);

/**
 * This sample demonstrates how to Updates (patches) a disk.
 *
 * @summary Updates (patches) a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/UpdateAManagedDiskToAddSupportsHibernation.json
 */
async function updateAManagedDiskToAddSupportsHibernation() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const diskName = "myDisk";
  const disk: DiskUpdate = { supportsHibernation: true };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

updateAManagedDiskToAddSupportsHibernation().catch(console.error);

/**
 * This sample demonstrates how to Updates (patches) a disk.
 *
 * @summary Updates (patches) a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/UpdateAManagedDiskToChangeTier.json
 */
async function updateAManagedDiskToChangeTier() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const diskName = "myDisk";
  const disk: DiskUpdate = { tier: "P30" };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

updateAManagedDiskToChangeTier().catch(console.error);

/**
 * This sample demonstrates how to Updates (patches) a disk.
 *
 * @summary Updates (patches) a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/UpdateAManagedDiskToDisableBursting.json
 */
async function updateAManagedDiskToDisableBursting() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const diskName = "myDisk";
  const disk: DiskUpdate = { burstingEnabled: false };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

updateAManagedDiskToDisableBursting().catch(console.error);

/**
 * This sample demonstrates how to Updates (patches) a disk.
 *
 * @summary Updates (patches) a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/UpdateAManagedDiskToRemoveDiskAccess.json
 */
async function updateManagedDiskToRemoveDiskAccessResourceAssociation() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const diskName = "myDisk";
  const disk: DiskUpdate = { networkAccessPolicy: "AllowAll" };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

updateManagedDiskToRemoveDiskAccessResourceAssociation().catch(console.error);
