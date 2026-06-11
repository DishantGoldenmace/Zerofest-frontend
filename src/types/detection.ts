export interface Detection {
  _id: string;
  classification: string;
  weight: number;
  weightDelta?: number;
  deviceId?: string;
  sensorIds?: number[];
  deviceTimestamp?: number;
  decisionConfidence?: number;
  localConfidence?: number;
  confidenceThreshold?: number;
  networkCongested?: boolean;
  localDecision?: boolean;
  cloudInference?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DistributionEntry {
  classification: string;
  count: number;
  totalWeight: number;
  percentage: number;
}

export interface ZeroFestApiResponse {
  latestDetection: Detection | null;
  detections: Detection[];
  totalCount: number;
  totalWeight: number;
  distribution: DistributionEntry[];
}
