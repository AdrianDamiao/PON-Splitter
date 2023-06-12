import IPonSpecs from "../models/PonSpecs";

export const CalculateDistance = (ponSpecs: IPonSpecs) => {
  const distance = (((ponSpecs.receptionPower - Number(ponSpecs.splitter)) - ponSpecs.transmissionPower) + CalculateConnectorsAttenuation(Number(ponSpecs.splitter), ponSpecs.connectorAttenuation, ponSpecs.fusionPointAttenuation)) / (ponSpecs.attenuationCoefficient * (-1));
  return distance;
}

export const CalculateTransmissionPower = (ponSpecs: IPonSpecs) => {
  const transmissionPower = (ponSpecs.receptionPower - Number(ponSpecs.splitter)) + ((ponSpecs.distance * ponSpecs.attenuationCoefficient) + CalculateConnectorsAttenuation(Number(ponSpecs.splitter), ponSpecs.connectorAttenuation, ponSpecs.fusionPointAttenuation));
  return transmissionPower;
}

export const CalculateReception = (ponSpecs: IPonSpecs) => {
  const receptionPower = ponSpecs.transmissionPower - ((ponSpecs.distance * ponSpecs.attenuationCoefficient) + CalculateConnectorsAttenuation(Number(ponSpecs.splitter), ponSpecs.connectorAttenuation, ponSpecs.fusionPointAttenuation));
  return receptionPower - Number(ponSpecs.splitter);
}

export const CalculateCoefficient = (ponSpecs: IPonSpecs) => {
  const coefficient = (((ponSpecs.receptionPower - Number(ponSpecs.splitter)) - ponSpecs.transmissionPower) + CalculateConnectorsAttenuation(Number(ponSpecs.splitter), ponSpecs.connectorAttenuation, ponSpecs.fusionPointAttenuation)) / (ponSpecs.distance * (-1));
  return coefficient;
}

export const CalculateConnectorsAttenuation = (splitter: number, connectorAttenuation: number, fusionPointAttenuation: number) : number => {
  switch (splitter) {
    case 0: return connectorAttenuation * 2 + (fusionPointAttenuation * 2); break;
    case -3: return connectorAttenuation * 3 + (fusionPointAttenuation * 2); break;
    case -6: return connectorAttenuation * 5 + (fusionPointAttenuation * 2); break;
    case -9: return connectorAttenuation * 9 + (fusionPointAttenuation * 2); break;
    case -12: return connectorAttenuation * 17 + (fusionPointAttenuation * 2); break;
    case -15: return connectorAttenuation * 33 + (fusionPointAttenuation * 2); break;
    default: return connectorAttenuation;
  }
}
