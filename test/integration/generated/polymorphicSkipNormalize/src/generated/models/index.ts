import * as coreClient from "@azure/core-client";

export type MethodRequestUnion =
  | MethodRequest
  | MediaGraphTopologySetRequest
  | MediaGraphTopologySetRequestBody
  | MediaGraphInstanceSetRequest
  | MediaGraphInstanceSetRequestBody
  | ItemNonSetRequestBaseUnion
  | MediaGraphTopologyListRequest
  | MediaGraphInstanceListRequest;
export type MediaGraphSourceUnion =
  | MediaGraphSource
  | MediaGraphRtspSource
  | MediaGraphIoTHubMessageSource;
export type MediaGraphProcessorUnion =
  | MediaGraphProcessor
  | MediaGraphMotionDetectionProcessor
  | MediaGraphExtensionProcessorBaseUnion
  | MediaGraphSignalGateProcessor;
export type MediaGraphSinkUnion =
  | MediaGraphSink
  | MediaGraphIoTHubMessageSink
  | MediaGraphFileSink
  | MediaGraphAssetSink;
export type MediaGraphEndpointUnion =
  | MediaGraphEndpoint
  | MediaGraphUnsecuredEndpoint
  | MediaGraphTlsEndpoint;
export type MediaGraphCredentialsUnion =
  | MediaGraphCredentials
  | MediaGraphUsernamePasswordCredentials
  | MediaGraphHttpHeaderCredentials;
export type MediaGraphCertificateSourceUnion =
  | MediaGraphCertificateSource
  | MediaGraphPemCertificateList;
export type MediaGraphImageFormatUnion =
  | MediaGraphImageFormat
  | MediaGraphImageFormatRaw
  | MediaGraphImageFormatJpeg
  | MediaGraphImageFormatBmp
  | MediaGraphImageFormatPng;
export type ItemNonSetRequestBaseUnion =
  | ItemNonSetRequestBase
  | MediaGraphTopologyGetRequest
  | MediaGraphTopologyDeleteRequest
  | MediaGraphInstanceGetRequest
  | MediaGraphInstanceActivateRequest
  | MediaGraphInstanceDeActivateRequest
  | MediaGraphInstanceDeleteRequest;
export type MediaGraphExtensionProcessorBaseUnion =
  | MediaGraphExtensionProcessorBase
  | MediaGraphCognitiveServicesVisionExtension
  | MediaGraphGrpcExtension
  | MediaGraphHttpExtension;

/** Base Class for Method Requests. */
export interface MethodRequest {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  methodName:
    | "GraphTopologySet"
    | "MediaGraphTopologySetRequestBody"
    | "GraphInstanceSet"
    | "MediaGraphInstanceSetRequestBody"
    | "ItemNonSetRequestBase"
    | "GraphTopologyList"
    | "GraphTopologyGet"
    | "GraphTopologyDelete"
    | "GraphInstanceList"
    | "GraphInstanceGet"
    | "GraphInstanceActivate"
    | "GraphInstanceDeactivate"
    | "GraphInstanceDelete";
  /** api version */
  apiVersion?: "2.0";
}

/** The definition of a media graph topology. */
export interface MediaGraphTopology {
  /** The identifier for the media graph topology. */
  name: string;
  /** The system data for a resource. This is used by both topologies and instances. */
  systemData?: MediaGraphSystemData;
  /** A description of the properties of a media graph topology. */
  properties?: MediaGraphTopologyProperties;
}

/** The system data for a resource. This is used by both topologies and instances. */
export interface MediaGraphSystemData {
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The timestamp of resource last modification (UTC). */
  lastModifiedAt?: Date;
}

/** A description of the properties of a media graph topology. */
export interface MediaGraphTopologyProperties {
  /** A description of a media graph topology. It is recommended to use this to describe the expected use of the topology. */
  description?: string;
  /** The list of parameters defined in the topology. The value for these parameters are supplied by instances of this topology. */
  parameters?: MediaGraphParameterDeclaration[];
  /** The list of source nodes in this topology. */
  sources?: MediaGraphSourceUnion[];
  /** The list of processor nodes in this topology. */
  processors?: MediaGraphProcessorUnion[];
  /** The list of sink nodes in this topology. */
  sinks?: MediaGraphSinkUnion[];
}

/** The declaration of a parameter in the media graph topology. A media graph topology can be authored with parameters. Then, during graph instance creation, the value for those parameters can be specified. This allows the same graph topology to be used as a blueprint for multiple graph instances with different values for the parameters. */
export interface MediaGraphParameterDeclaration {
  /** The name of the parameter. */
  name: string;
  /** The type of the parameter. */
  type: MediaGraphParameterType;
  /** Description of the parameter. */
  description?: string;
  /** The default value for the parameter to be used if the media graph instance does not specify a value. */
  default?: string;
}

/** A source node in a media graph. */
export interface MediaGraphSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type":
    | "#Microsoft.Media.MediaGraphRtspSource"
    | "#Microsoft.Media.MediaGraphIoTHubMessageSource";
  /** The name to be used for this source node. */
  name: string;
}

/** A node that represents the desired processing of media in a graph. Takes media and/or events as inputs, and emits media and/or event as output. */
export interface MediaGraphProcessor {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type":
    | "#Microsoft.Media.MediaGraphMotionDetectionProcessor"
    | "#Microsoft.Media.MediaGraphExtensionProcessorBase"
    | "#Microsoft.Media.MediaGraphCognitiveServicesVisionExtension"
    | "#Microsoft.Media.MediaGraphGrpcExtension"
    | "#Microsoft.Media.MediaGraphHttpExtension"
    | "#Microsoft.Media.MediaGraphSignalGateProcessor";
  /** The name for this processor node. */
  name: string;
  /** An array of the names of the other nodes in the media graph, the outputs of which are used as input for this processor node. */
  inputs: MediaGraphNodeInput[];
}

/** Represents the input to any node in a media graph. */
export interface MediaGraphNodeInput {
  /** The name of another node in the media graph, the output of which is used as input to this node. */
  nodeName: string;
  /** Allows for the selection of particular streams from another node. */
  outputSelectors?: MediaGraphOutputSelector[];
}

/** Allows for the selection of particular streams from another node. */
export interface MediaGraphOutputSelector {
  /** The stream property to compare with. */
  property?: MediaGraphOutputSelectorProperty;
  /** The operator to compare streams by. */
  operator?: MediaGraphOutputSelectorOperator;
  /** Value to compare against. */
  value?: string;
}

/** Enables a media graph to write media data to a destination outside of the Live Video Analytics IoT Edge module. */
export interface MediaGraphSink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type":
    | "#Microsoft.Media.MediaGraphIoTHubMessageSink"
    | "#Microsoft.Media.MediaGraphFileSink"
    | "#Microsoft.Media.MediaGraphAssetSink";
  /** The name to be used for the media graph sink. */
  name: string;
  /** An array of the names of the other nodes in the media graph, the outputs of which are used as input for this sink node. */
  inputs: MediaGraphNodeInput[];
}

/** Represents an instance of a media graph. */
export interface MediaGraphInstance {
  /** The identifier for the media graph instance. */
  name: string;
  /** The system data for a resource. This is used by both topologies and instances. */
  systemData?: MediaGraphSystemData;
  /** Properties of a media graph instance. */
  properties?: MediaGraphInstanceProperties;
}

/** Properties of a media graph instance. */
export interface MediaGraphInstanceProperties {
  /** An optional description for the instance. */
  description?: string;
  /** The name of the media graph topology that this instance will run. A topology with this name should already have been set in the Edge module. */
  topologyName?: string;
  /** List of one or more graph instance parameters. */
  parameters?: MediaGraphParameterDefinition[];
  /** Allowed states for a graph instance. */
  state?: MediaGraphInstanceState;
}

/** A key-value pair. A media graph topology allows certain values to be parameterized. When an instance is created, the parameters are supplied with arguments specific to that instance. This allows the same graph topology to be used as a blueprint for multiple graph instances with different values for the parameters. */
export interface MediaGraphParameterDefinition {
  /** The name of the parameter defined in the media graph topology. */
  name: string;
  /** The value to supply for the named parameter defined in the media graph topology. */
  value: string;
}

/** Base class for endpoints. */
export interface MediaGraphEndpoint {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type":
    | "#Microsoft.Media.MediaGraphUnsecuredEndpoint"
    | "#Microsoft.Media.MediaGraphTlsEndpoint";
  /** Polymorphic credentials to be presented to the endpoint. */
  credentials?: MediaGraphCredentialsUnion;
  /** Url for the endpoint. */
  url: string;
}

/** Credentials to present during authentication. */
export interface MediaGraphCredentials {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type":
    | "#Microsoft.Media.MediaGraphUsernamePasswordCredentials"
    | "#Microsoft.Media.MediaGraphHttpHeaderCredentials";
}

/** Base class for certificate sources. */
export interface MediaGraphCertificateSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphPemCertificateList";
}

/** Options for controlling the authentication of TLS endpoints. */
export interface MediaGraphTlsValidationOptions {
  /** Boolean value ignoring the host name (common name) during validation. */
  ignoreHostname?: string;
  /** Boolean value ignoring the integrity of the certificate chain at the current time. */
  ignoreSignature?: string;
}

/** Describes the properties of an image frame. */
export interface MediaGraphImage {
  /** The scaling mode for the image. */
  scale?: MediaGraphImageScale;
  /** Encoding settings for an image. */
  format?: MediaGraphImageFormatUnion;
}

/** The scaling mode for the image. */
export interface MediaGraphImageScale {
  /** Describes the modes for scaling an input video frame into an image, before it is sent to an inference engine. */
  mode?: MediaGraphImageScaleMode;
  /** The desired output width of the image. */
  width?: string;
  /** The desired output height of the image. */
  height?: string;
}

/** Encoding settings for an image. */
export interface MediaGraphImageFormat {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type":
    | "#Microsoft.Media.MediaGraphImageFormatRaw"
    | "#Microsoft.Media.MediaGraphImageFormatJpeg"
    | "#Microsoft.Media.MediaGraphImageFormatBmp"
    | "#Microsoft.Media.MediaGraphImageFormatPng";
}

/** Describes the properties of a sample. */
export interface MediaGraphSamplingOptions {
  /** If true, limits the samples submitted to the extension to only samples which have associated inference(s) */
  skipSamplesWithoutAnnotation?: string;
  /** Maximum rate of samples submitted to the extension */
  maximumSamplesPerSecond?: string;
}

/** Describes how media should be transferred to the inference engine. */
export interface MediaGraphGrpcExtensionDataTransfer {
  /** The size of the buffer for all in-flight frames in mebibytes if mode is SharedMemory. Should not be specified otherwise. */
  sharedMemorySizeMiB?: string;
  /** How frame data should be transmitted to the inference engine. */
  mode: MediaGraphGrpcExtensionDataTransferMode;
}

/** Represents the MediaGraphTopologySetRequest. */
export type MediaGraphTopologySetRequest = MethodRequest & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  methodName: "GraphTopologySet";
  /** The definition of a media graph topology. */
  graph: MediaGraphTopology;
};

/** Represents the MediaGraphTopologySetRequest body. */
export type MediaGraphTopologySetRequestBody = MethodRequest &
  MediaGraphTopology & {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    methodName: "MediaGraphTopologySetRequestBody";
  };

/** Represents the MediaGraphInstanceSetRequest. */
export type MediaGraphInstanceSetRequest = MethodRequest & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  methodName: "GraphInstanceSet";
  /** Represents an instance of a media graph. */
  instance: MediaGraphInstance;
};

/** Represents the MediaGraphInstanceSetRequest body. */
export type MediaGraphInstanceSetRequestBody = MethodRequest &
  MediaGraphInstance & {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    methodName: "MediaGraphInstanceSetRequestBody";
  };

export type ItemNonSetRequestBase = MethodRequest & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  methodName:
    | "ItemNonSetRequestBase"
    | "GraphTopologyGet"
    | "GraphTopologyDelete"
    | "GraphInstanceGet"
    | "GraphInstanceActivate"
    | "GraphInstanceDeactivate"
    | "GraphInstanceDelete";
  /** method name */
  name: string;
};

/** Represents the MediaGraphTopologyListRequest. */
export type MediaGraphTopologyListRequest = MethodRequest & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  methodName: "GraphTopologyList";
};

/** Represents the MediaGraphInstanceListRequest. */
export type MediaGraphInstanceListRequest = MethodRequest & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  methodName: "GraphInstanceList";
};

/** Enables a media graph to capture media from a RTSP server. */
export type MediaGraphRtspSource = MediaGraphSource & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphRtspSource";
  /** Underlying RTSP transport. This is used to enable or disable HTTP tunneling. */
  transport?: MediaGraphRtspTransport;
  /** RTSP endpoint of the stream that is being connected to. */
  endpoint: MediaGraphEndpointUnion;
};

/** Enables a media graph to receive messages via routes declared in the IoT Edge deployment manifest. */
export type MediaGraphIoTHubMessageSource = MediaGraphSource & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphIoTHubMessageSource";
  /** Name of the input path where messages can be routed to (via routes declared in the IoT Edge deployment manifest). */
  hubInputName?: string;
};

/** A node that accepts raw video as input, and detects if there are moving objects present. If so, then it emits an event, and allows frames where motion was detected to pass through. Other frames are blocked/dropped. */
export type MediaGraphMotionDetectionProcessor = MediaGraphProcessor & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphMotionDetectionProcessor";
  /** Enumeration that specifies the sensitivity of the motion detection processor. */
  sensitivity?: MediaGraphMotionDetectionSensitivity;
  /** Indicates whether the processor should detect and output the regions, within the video frame, where motion was detected. Default is true. */
  outputMotionRegion?: boolean;
  /** Event aggregation window duration, or 0 for no aggregation. */
  eventAggregationWindow?: string;
};

/** Processor that allows for extensions outside of the Live Video Analytics Edge module to be integrated into the graph. It is the base class for various different kinds of extension processor types. */
export type MediaGraphExtensionProcessorBase = MediaGraphProcessor & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type":
    | "#Microsoft.Media.MediaGraphExtensionProcessorBase"
    | "#Microsoft.Media.MediaGraphCognitiveServicesVisionExtension"
    | "#Microsoft.Media.MediaGraphGrpcExtension"
    | "#Microsoft.Media.MediaGraphHttpExtension";
  /** Endpoint to which this processor should connect. */
  endpoint: MediaGraphEndpointUnion;
  /** Describes the parameters of the image that is sent as input to the endpoint. */
  image: MediaGraphImage;
  /** Describes the sampling options to be applied when forwarding samples to the extension. */
  samplingOptions?: MediaGraphSamplingOptions;
};

/** A signal gate determines when to block (gate) incoming media, and when to allow it through. It gathers input events over the activationEvaluationWindow, and determines whether to open or close the gate. */
export type MediaGraphSignalGateProcessor = MediaGraphProcessor & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphSignalGateProcessor";
  /** The period of time over which the gate gathers input events before evaluating them. */
  activationEvaluationWindow?: string;
  /** Signal offset once the gate is activated (can be negative). It is an offset between the time the event is received, and the timestamp of the first media sample (eg. video frame) that is allowed through by the gate. */
  activationSignalOffset?: string;
  /** The minimum period for which the gate remains open in the absence of subsequent triggers (events). */
  minimumActivationTime?: string;
  /** The maximum period for which the gate remains open in the presence of subsequent events. */
  maximumActivationTime?: string;
};

/** Enables a media graph to publish messages that can be delivered via routes declared in the IoT Edge deployment manifest. */
export type MediaGraphIoTHubMessageSink = MediaGraphSink & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphIoTHubMessageSink";
  /** Name of the output path to which the media graph will publish message. These messages can then be delivered to desired destinations by declaring routes referencing the output path in the IoT Edge deployment manifest. */
  hubOutputName: string;
};

/** Enables a media graph to write/store media (video and audio) to a file on the Edge device. */
export type MediaGraphFileSink = MediaGraphSink & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphFileSink";
  /** Absolute directory for all outputs to the Edge device from this sink. */
  baseDirectoryPath: string;
  /** File name pattern for creating new files on the Edge device. The pattern must include at least one system variable. See the documentation for available variables and additional examples. */
  fileNamePattern: string;
  /** Maximum amount of disk space that can be used for storing files from this sink. */
  maximumSizeMiB: string;
};

/** Enables a media graph to record media to an Azure Media Services asset for subsequent playback. */
export type MediaGraphAssetSink = MediaGraphSink & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphAssetSink";
  /** A name pattern when creating new assets. The pattern must include at least one system variable. See the documentation for available variables and additional examples. */
  assetNamePattern: string;
  /** When writing media to an asset, wait until at least this duration of media has been accumulated on the Edge. Expressed in increments of 30 seconds, with a minimum of 30 seconds and a recommended maximum of 5 minutes. */
  segmentLength?: string;
  /** Path to a local file system directory for temporary caching of media before writing to an Asset. Used when the Edge device is temporarily disconnected from Azure. */
  localMediaCachePath: string;
  /** Maximum amount of disk space that can be used for temporary caching of media. */
  localMediaCacheMaximumSizeMiB: string;
};

/** An endpoint that the media graph can connect to, with no encryption in transit. */
export type MediaGraphUnsecuredEndpoint = MediaGraphEndpoint & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphUnsecuredEndpoint";
};

/** A TLS endpoint for media graph external connections. */
export type MediaGraphTlsEndpoint = MediaGraphEndpoint & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphTlsEndpoint";
  /** Trusted certificates when authenticating a TLS connection. Null designates that Azure Media Service's source of trust should be used. */
  trustedCertificates?: MediaGraphCertificateSourceUnion;
  /** Validation options to use when authenticating a TLS connection. By default, strict validation is used. */
  validationOptions?: MediaGraphTlsValidationOptions;
};

/** Username/password credential pair. */
export type MediaGraphUsernamePasswordCredentials = MediaGraphCredentials & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphUsernamePasswordCredentials";
  /** Username for a username/password pair. */
  username: string;
  /** Password for a username/password pair. Please use a parameter so that the actual value is not returned on PUT or GET requests. */
  password: string;
};

/** Http header service credentials. */
export type MediaGraphHttpHeaderCredentials = MediaGraphCredentials & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphHttpHeaderCredentials";
  /** HTTP header name. */
  headerName: string;
  /** HTTP header value. Please use a parameter so that the actual value is not returned on PUT or GET requests. */
  headerValue: string;
};

/** A list of PEM formatted certificates. */
export type MediaGraphPemCertificateList = MediaGraphCertificateSource & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphPemCertificateList";
  /** PEM formatted public certificates one per entry. */
  certificates: string[];
};

/** Encoding settings for raw images. */
export type MediaGraphImageFormatRaw = MediaGraphImageFormat & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphImageFormatRaw";
  /** The pixel format that will be used to encode images. */
  pixelFormat: MediaGraphImageFormatRawPixelFormat;
};

/** Encoding settings for Jpeg images. */
export type MediaGraphImageFormatJpeg = MediaGraphImageFormat & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphImageFormatJpeg";
  /** The image quality. Value must be between 0 to 100 (best quality). */
  quality?: string;
};

/** Encoding settings for Bmp images. */
export type MediaGraphImageFormatBmp = MediaGraphImageFormat & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphImageFormatBmp";
};

/** Encoding settings for Png images. */
export type MediaGraphImageFormatPng = MediaGraphImageFormat & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphImageFormatPng";
};

/** Represents the MediaGraphTopologyGetRequest. */
export type MediaGraphTopologyGetRequest = ItemNonSetRequestBase & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  methodName: "GraphTopologyGet";
};

/** Represents the MediaGraphTopologyDeleteRequest. */
export type MediaGraphTopologyDeleteRequest = ItemNonSetRequestBase & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  methodName: "GraphTopologyDelete";
};

/** Represents the MediaGraphInstanceGetRequest. */
export type MediaGraphInstanceGetRequest = ItemNonSetRequestBase & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  methodName: "GraphInstanceGet";
};

/** Represents the MediaGraphInstanceActivateRequest. */
export type MediaGraphInstanceActivateRequest = ItemNonSetRequestBase & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  methodName: "GraphInstanceActivate";
};

/** Represents the MediaGraphInstanceDeactivateRequest. */
export type MediaGraphInstanceDeActivateRequest = ItemNonSetRequestBase & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  methodName: "GraphInstanceDeactivate";
};

/** Represents the MediaGraphInstanceDeleteRequest. */
export type MediaGraphInstanceDeleteRequest = ItemNonSetRequestBase & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  methodName: "GraphInstanceDelete";
};

/** A processor that allows the media graph to send video frames to a Cognitive Services Vision extension. Inference results are relayed to downstream nodes. */
export type MediaGraphCognitiveServicesVisionExtension = MediaGraphExtensionProcessorBase & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphCognitiveServicesVisionExtension";
};

/** A processor that allows the media graph to send video frames to an external inference container over a gRPC connection. This can be done using shared memory (for high frame rates), or over the network. Inference results are relayed to downstream nodes. */
export type MediaGraphGrpcExtension = MediaGraphExtensionProcessorBase & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphGrpcExtension";
  /** How media should be transferred to the inference engine. */
  dataTransfer: MediaGraphGrpcExtensionDataTransfer;
  /** Optional configuration to pass to the gRPC extension. */
  extensionConfiguration?: string;
};

/** A processor that allows the media graph to send video frames (mostly at low frame rates e.g. <5 fps) to an external inference container over an HTTP-based RESTful API. Inference results are relayed to downstream nodes. */
export type MediaGraphHttpExtension = MediaGraphExtensionProcessorBase & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  "@type": "#Microsoft.Media.MediaGraphHttpExtension";
};

/** Known values of {@link MediaGraphParameterType} that the service accepts. */
export enum KnownMediaGraphParameterType {
  /** A string parameter value. */
  String = "String",
  /** A string to hold sensitive information as parameter value. */
  SecretString = "SecretString",
  /** A 32-bit signed integer as parameter value. */
  Int = "Int",
  /** A 64-bit double-precision floating point type as parameter value. */
  Double = "Double",
  /** A boolean value that is either true or false. */
  Bool = "Bool"
}

/**
 * Defines values for MediaGraphParameterType. \
 * {@link KnownMediaGraphParameterType} can be used interchangeably with MediaGraphParameterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **String**: A string parameter value. \
 * **SecretString**: A string to hold sensitive information as parameter value. \
 * **Int**: A 32-bit signed integer as parameter value. \
 * **Double**: A 64-bit double-precision floating point type as parameter value. \
 * **Bool**: A boolean value that is either true or false.
 */
export type MediaGraphParameterType = string;

/** Known values of {@link MediaGraphOutputSelectorProperty} that the service accepts. */
export enum KnownMediaGraphOutputSelectorProperty {
  /** The stream's MIME type or subtype. */
  MediaType = "mediaType"
}

/**
 * Defines values for MediaGraphOutputSelectorProperty. \
 * {@link KnownMediaGraphOutputSelectorProperty} can be used interchangeably with MediaGraphOutputSelectorProperty,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **mediaType**: The stream's MIME type or subtype.
 */
export type MediaGraphOutputSelectorProperty = string;

/** Known values of {@link MediaGraphOutputSelectorOperator} that the service accepts. */
export enum KnownMediaGraphOutputSelectorOperator {
  /** A media type is the same type or a subtype. */
  Is = "is",
  /** A media type is not the same type or a subtype. */
  IsNot = "isNot"
}

/**
 * Defines values for MediaGraphOutputSelectorOperator. \
 * {@link KnownMediaGraphOutputSelectorOperator} can be used interchangeably with MediaGraphOutputSelectorOperator,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **is**: A media type is the same type or a subtype. \
 * **isNot**: A media type is not the same type or a subtype.
 */
export type MediaGraphOutputSelectorOperator = string;

/** Known values of {@link MediaGraphInstanceState} that the service accepts. */
export enum KnownMediaGraphInstanceState {
  /** The media graph instance is idle and not processing media. */
  Inactive = "Inactive",
  /** The media graph instance is transitioning into the active state. */
  Activating = "Activating",
  /** The media graph instance is active and processing media. */
  Active = "Active",
  /** The media graph instance is transitioning into the inactive state. */
  Deactivating = "Deactivating"
}

/**
 * Defines values for MediaGraphInstanceState. \
 * {@link KnownMediaGraphInstanceState} can be used interchangeably with MediaGraphInstanceState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Inactive**: The media graph instance is idle and not processing media. \
 * **Activating**: The media graph instance is transitioning into the active state. \
 * **Active**: The media graph instance is active and processing media. \
 * **Deactivating**: The media graph instance is transitioning into the inactive state.
 */
export type MediaGraphInstanceState = string;

/** Known values of {@link MediaGraphRtspTransport} that the service accepts. */
export enum KnownMediaGraphRtspTransport {
  /** HTTP/HTTPS transport. This should be used when HTTP tunneling is desired. */
  Http = "Http",
  /** TCP transport. This should be used when HTTP tunneling is NOT desired. */
  Tcp = "Tcp"
}

/**
 * Defines values for MediaGraphRtspTransport. \
 * {@link KnownMediaGraphRtspTransport} can be used interchangeably with MediaGraphRtspTransport,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Http**: HTTP\/HTTPS transport. This should be used when HTTP tunneling is desired. \
 * **Tcp**: TCP transport. This should be used when HTTP tunneling is NOT desired.
 */
export type MediaGraphRtspTransport = string;

/** Known values of {@link MediaGraphMotionDetectionSensitivity} that the service accepts. */
export enum KnownMediaGraphMotionDetectionSensitivity {
  /** Low Sensitivity. */
  Low = "Low",
  /** Medium Sensitivity. */
  Medium = "Medium",
  /** High Sensitivity. */
  High = "High"
}

/**
 * Defines values for MediaGraphMotionDetectionSensitivity. \
 * {@link KnownMediaGraphMotionDetectionSensitivity} can be used interchangeably with MediaGraphMotionDetectionSensitivity,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Low**: Low Sensitivity. \
 * **Medium**: Medium Sensitivity. \
 * **High**: High Sensitivity.
 */
export type MediaGraphMotionDetectionSensitivity = string;

/** Known values of {@link MediaGraphImageScaleMode} that the service accepts. */
export enum KnownMediaGraphImageScaleMode {
  /** Use the same aspect ratio as the input frame. */
  PreserveAspectRatio = "PreserveAspectRatio",
  /** Center pad the input frame to match the given dimensions. */
  Pad = "Pad",
  /** Stretch input frame to match given dimensions. */
  Stretch = "Stretch"
}

/**
 * Defines values for MediaGraphImageScaleMode. \
 * {@link KnownMediaGraphImageScaleMode} can be used interchangeably with MediaGraphImageScaleMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **PreserveAspectRatio**: Use the same aspect ratio as the input frame. \
 * **Pad**: Center pad the input frame to match the given dimensions. \
 * **Stretch**: Stretch input frame to match given dimensions.
 */
export type MediaGraphImageScaleMode = string;

/** Known values of {@link MediaGraphGrpcExtensionDataTransferMode} that the service accepts. */
export enum KnownMediaGraphGrpcExtensionDataTransferMode {
  /** Frames are transferred embedded into the gRPC messages. */
  Embedded = "Embedded",
  /** Frames are transferred through shared memory. */
  SharedMemory = "SharedMemory"
}

/**
 * Defines values for MediaGraphGrpcExtensionDataTransferMode. \
 * {@link KnownMediaGraphGrpcExtensionDataTransferMode} can be used interchangeably with MediaGraphGrpcExtensionDataTransferMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Embedded**: Frames are transferred embedded into the gRPC messages. \
 * **SharedMemory**: Frames are transferred through shared memory.
 */
export type MediaGraphGrpcExtensionDataTransferMode = string;

/** Known values of {@link MediaGraphImageFormatRawPixelFormat} that the service accepts. */
export enum KnownMediaGraphImageFormatRawPixelFormat {
  /** Planar YUV 4:2:0, 12bpp, (1 Cr and Cb sample per 2x2 Y samples). */
  Yuv420P = "Yuv420p",
  /** Packed RGB 5:6:5, 16bpp, (msb)   5R 6G 5B(lsb), big-endian. */
  Rgb565Be = "Rgb565be",
  /** Packed RGB 5:6:5, 16bpp, (msb)   5R 6G 5B(lsb), little-endian. */
  Rgb565Le = "Rgb565le",
  /** Packed RGB 5:5:5, 16bpp, (msb)1X 5R 5G 5B(lsb), big-endian , X=unused/undefined. */
  Rgb555Be = "Rgb555be",
  /** Packed RGB 5:5:5, 16bpp, (msb)1X 5R 5G 5B(lsb), little-endian, X=unused/undefined. */
  Rgb555Le = "Rgb555le",
  /** Packed RGB 8:8:8, 24bpp, RGBRGB. */
  Rgb24 = "Rgb24",
  /** Packed RGB 8:8:8, 24bpp, BGRBGR. */
  Bgr24 = "Bgr24",
  /** Packed ARGB 8:8:8:8, 32bpp, ARGBARGB. */
  Argb = "Argb",
  /** Packed RGBA 8:8:8:8, 32bpp, RGBARGBA. */
  Rgba = "Rgba",
  /** Packed ABGR 8:8:8:8, 32bpp, ABGRABGR. */
  Abgr = "Abgr",
  /** Packed BGRA 8:8:8:8, 32bpp, BGRABGRA. */
  Bgra = "Bgra"
}

/**
 * Defines values for MediaGraphImageFormatRawPixelFormat. \
 * {@link KnownMediaGraphImageFormatRawPixelFormat} can be used interchangeably with MediaGraphImageFormatRawPixelFormat,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Yuv420p**: Planar YUV 4:2:0, 12bpp, (1 Cr and Cb sample per 2x2 Y samples). \
 * **Rgb565be**: Packed RGB 5:6:5, 16bpp, (msb)   5R 6G 5B(lsb), big-endian. \
 * **Rgb565le**: Packed RGB 5:6:5, 16bpp, (msb)   5R 6G 5B(lsb), little-endian. \
 * **Rgb555be**: Packed RGB 5:5:5, 16bpp, (msb)1X 5R 5G 5B(lsb), big-endian , X=unused\/undefined. \
 * **Rgb555le**: Packed RGB 5:5:5, 16bpp, (msb)1X 5R 5G 5B(lsb), little-endian, X=unused\/undefined. \
 * **Rgb24**: Packed RGB 8:8:8, 24bpp, RGBRGB. \
 * **Bgr24**: Packed RGB 8:8:8, 24bpp, BGRBGR. \
 * **Argb**: Packed ARGB 8:8:8:8, 32bpp, ARGBARGB. \
 * **Rgba**: Packed RGBA 8:8:8:8, 32bpp, RGBARGBA. \
 * **Abgr**: Packed ABGR 8:8:8:8, 32bpp, ABGRABGR. \
 * **Bgra**: Packed BGRA 8:8:8:8, 32bpp, BGRABGRA.
 */
export type MediaGraphImageFormatRawPixelFormat = string;

/** Optional parameters. */
export interface MediaServicesClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
