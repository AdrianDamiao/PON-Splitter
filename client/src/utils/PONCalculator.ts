import { Component } from "react";
import IPonSpecs from "../models/PonSpecs";

export default class PONCalculator extends Component {
  public static CalculateDistance(ponSpecs: IPonSpecs) {
    const distance = (((ponSpecs.receptionPower - Number(ponSpecs.splitter)) - ponSpecs.transmissionPower) + this.CalculateConnectorsAttenuation(Number(ponSpecs.splitter), ponSpecs.connectorAttenuation, ponSpecs.fusionPointAttenuation)) / (ponSpecs.attenuationCoefficient * (-1));
    return distance;
  }
  
  public static CalculateTransmissionPower(ponSpecs: IPonSpecs) {
    const transmissionPower = (ponSpecs.receptionPower - Number(ponSpecs.splitter)) + ((ponSpecs.distance * ponSpecs.attenuationCoefficient) + this.CalculateConnectorsAttenuation(Number(ponSpecs.splitter), ponSpecs.connectorAttenuation, ponSpecs.fusionPointAttenuation));
    return transmissionPower;
  }
  
  public static CalculateReception(ponSpecs: IPonSpecs) {
    const receptionPower = ponSpecs.transmissionPower - ((ponSpecs.distance * ponSpecs.attenuationCoefficient) + this.CalculateConnectorsAttenuation(Number(ponSpecs.splitter), ponSpecs.connectorAttenuation, ponSpecs.fusionPointAttenuation));
    return receptionPower - Number(ponSpecs.splitter);
  }
  
  public static CalculateCoefficient(ponSpecs: IPonSpecs) {
    const coefficient = (((ponSpecs.receptionPower - Number(ponSpecs.splitter)) - ponSpecs.transmissionPower) + this.CalculateConnectorsAttenuation(Number(ponSpecs.splitter), ponSpecs.connectorAttenuation, ponSpecs.fusionPointAttenuation)) / (ponSpecs.distance * (-1));
    return coefficient;
  }
  
  public static CalculateConnectorsAttenuation(splitter: number, connectorAttenuation: number, fusionPointAttenuation: number) : number {
    switch (splitter) {
      case 0: return connectorAttenuation * 2 + (fusionPointAttenuation * 2);
      case -3: return connectorAttenuation * 3 + (fusionPointAttenuation * 2);
      case -6: return connectorAttenuation * 5 + (fusionPointAttenuation * 2);
      case -9: return connectorAttenuation * 9 + (fusionPointAttenuation * 2);
      case -12: return connectorAttenuation * 17 + (fusionPointAttenuation * 2);
      case -15: return connectorAttenuation * 33 + (fusionPointAttenuation * 2);
      default: return connectorAttenuation;
    }
  }
}


