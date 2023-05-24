export default interface IPonSpecs {
  transmissionPower: number;
  attenuationCoefficient: number;
  receptionPower: number;
  distance: number;
}

export default class PonSpecs implements IPonSpecs {
  public transmissionPower: number;

  public attenuationCoefficient: number;

  public receptionPower: number;

  public distance: number;

  constructor() {
    this.transmissionPower = 0;
    this.attenuationCoefficient = 0;
    this.receptionPower = 0;
    this.distance = 0;
  }
}