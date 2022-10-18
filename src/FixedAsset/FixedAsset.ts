export enum FixedAssetsType {
  EXHAUSTIBLE,
  DEPRECIABLE,
  NON_DEPRECIABLE,
}

export class FixedAsset {
  code: string;
  name: string;
  price: number;
  description?: string;
  usefulLife?: number;
  depreciationRate?: number;
  ingressDate?: Date;
  manufactureDate?: Date;
  FixedAssetsType?: FixedAssetsType;
}
