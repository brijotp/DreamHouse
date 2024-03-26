import { IProperty } from "./iproperty";

export class Property implements IProperty {
  Id!: number;
  Purpose!: number;
  Name!: string;
  PType!: string;
  BHK!: number;
  FType!: string;
  Price!: number;
  BuildArea!: number;
  CarpetArea?: number;
  Address!: string;
  Address2?: string;
  City!: string;
  FloorNo?: string;
  TotalFloor?: string;
  RTM!: number;
  AOP?: string;
  MainEntrance?: string;
  Security?: number;
  Gated?: number;
  Maintenance?: number;
  Possession?: string;
  Image?: string;
  Description?: string;
  PostedOn!: string;
  PostedBy!: number;
}