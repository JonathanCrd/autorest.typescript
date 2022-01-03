import { DpsCertificate } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DeviceProvisioningClient } from "../deviceProvisioningClient";
import {
  DpsCertificateGetOptionalParams,
  DpsCertificateGetResponse,
  CertificateBodyDescription,
  DpsCertificateCreateOrUpdateOptionalParams,
  DpsCertificateCreateOrUpdateResponse,
  DpsCertificateDeleteOptionalParams,
  DpsCertificateListOptionalParams,
  DpsCertificateListResponse,
  DpsCertificateGenerateVerificationCodeOptionalParams,
  DpsCertificateGenerateVerificationCodeResponse,
  VerificationCodeRequest,
  DpsCertificateVerifyCertificateOptionalParams,
  DpsCertificateVerifyCertificateResponse
} from "../models";

/** Class containing DpsCertificate operations. */
export class DpsCertificateImpl implements DpsCertificate {
  private readonly client: DeviceProvisioningClient;

  /**
   * Initialize a new instance of the class DpsCertificate class.
   * @param client Reference to the service client
   */
  constructor(client: DeviceProvisioningClient) {
    this.client = client;
  }

  /**
   * Get the certificate from the provisioning service.
   * @param certificateName Name of the certificate to retrieve.
   * @param resourceGroupName Resource group identifier.
   * @param provisioningServiceName Name of the provisioning service the certificate is associated with.
   * @param options The options parameters.
   */
  get(
    certificateName: string,
    resourceGroupName: string,
    provisioningServiceName: string,
    options?: DpsCertificateGetOptionalParams
  ): Promise<DpsCertificateGetResponse> {
    return this.client.sendOperationRequest(
      { certificateName, resourceGroupName, provisioningServiceName, options },
      getOperationSpec
    );
  }

  /**
   * Add new certificate or update an existing certificate.
   * @param resourceGroupName Resource group identifier.
   * @param provisioningServiceName The name of the provisioning service.
   * @param certificateName The name of the certificate create or update.
   * @param certificateDescription The certificate body.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    provisioningServiceName: string,
    certificateName: string,
    certificateDescription: CertificateBodyDescription,
    options?: DpsCertificateCreateOrUpdateOptionalParams
  ): Promise<DpsCertificateCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        provisioningServiceName,
        certificateName,
        certificateDescription,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes the specified certificate associated with the Provisioning Service
   * @param resourceGroupName Resource group identifier.
   * @param ifMatch ETag of the certificate
   * @param provisioningServiceName The name of the provisioning service.
   * @param certificateName This is a mandatory field, and is the logical name of the certificate that
   *                        the provisioning service will access by.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    ifMatch: string,
    provisioningServiceName: string,
    certificateName: string,
    options?: DpsCertificateDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ifMatch,
        provisioningServiceName,
        certificateName,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * Get all the certificates tied to the provisioning service.
   * @param resourceGroupName Name of resource group.
   * @param provisioningServiceName Name of provisioning service to retrieve certificates for.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    provisioningServiceName: string,
    options?: DpsCertificateListOptionalParams
  ): Promise<DpsCertificateListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, provisioningServiceName, options },
      listOperationSpec
    );
  }

  /**
   * Generate verification code for Proof of Possession.
   * @param certificateName The mandatory logical name of the certificate, that the provisioning service
   *                        uses to access.
   * @param ifMatch ETag of the certificate. This is required to update an existing certificate, and
   *                ignored while creating a brand new certificate.
   * @param resourceGroupName name of resource group.
   * @param provisioningServiceName Name of provisioning service.
   * @param options The options parameters.
   */
  generateVerificationCode(
    certificateName: string,
    ifMatch: string,
    resourceGroupName: string,
    provisioningServiceName: string,
    options?: DpsCertificateGenerateVerificationCodeOptionalParams
  ): Promise<DpsCertificateGenerateVerificationCodeResponse> {
    return this.client.sendOperationRequest(
      {
        certificateName,
        ifMatch,
        resourceGroupName,
        provisioningServiceName,
        options
      },
      generateVerificationCodeOperationSpec
    );
  }

  /**
   * Verifies the certificate's private key possession by providing the leaf cert issued by the verifying
   * pre uploaded certificate.
   * @param certificateName The mandatory logical name of the certificate, that the provisioning service
   *                        uses to access.
   * @param ifMatch ETag of the certificate.
   * @param resourceGroupName Resource group name.
   * @param provisioningServiceName Provisioning service name.
   * @param request The name of the certificate
   * @param options The options parameters.
   */
  verifyCertificate(
    certificateName: string,
    ifMatch: string,
    resourceGroupName: string,
    provisioningServiceName: string,
    request: VerificationCodeRequest,
    options?: DpsCertificateVerifyCertificateOptionalParams
  ): Promise<DpsCertificateVerifyCertificateResponse> {
    return this.client.sendOperationRequest(
      {
        certificateName,
        ifMatch,
        resourceGroupName,
        provisioningServiceName,
        request,
        options
      },
      verifyCertificateOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates/{certificateName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateResponse
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.certificateName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisioningServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates/{certificateName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateResponse
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.certificateDescription,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisioningServiceName,
    Parameters.certificateName1
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.ifMatch,
    Parameters.contentType
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates/{certificateName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.certificateName11,
    Parameters.certificateRawBytes,
    Parameters.certificateIsVerified,
    Parameters.certificatePurpose,
    Parameters.certificateCreated,
    Parameters.certificateLastUpdated,
    Parameters.certificateHasPrivateKey,
    Parameters.certificateNonce
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.certificateName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisioningServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateListDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisioningServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const generateVerificationCodeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates/{certificateName}/generateVerificationCode",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.VerificationCodeResponse
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.certificateName11,
    Parameters.certificateRawBytes,
    Parameters.certificateIsVerified,
    Parameters.certificatePurpose,
    Parameters.certificateCreated,
    Parameters.certificateLastUpdated,
    Parameters.certificateHasPrivateKey,
    Parameters.certificateNonce
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.certificateName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisioningServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer
};
const verifyCertificateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates/{certificateName}/verify",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateResponse
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.request,
  queryParameters: [
    Parameters.apiVersion,
    Parameters.certificateName11,
    Parameters.certificateRawBytes,
    Parameters.certificateIsVerified,
    Parameters.certificatePurpose,
    Parameters.certificateCreated,
    Parameters.certificateLastUpdated,
    Parameters.certificateHasPrivateKey,
    Parameters.certificateNonce
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.certificateName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisioningServiceName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch1
  ],
  mediaType: "json",
  serializer
};
