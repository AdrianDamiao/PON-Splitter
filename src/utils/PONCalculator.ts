import IPonSpecs from "../models/PonSpecs";

export const CalculateDistance = (ponSpecs: IPonSpecs) => {
  console.log(ponSpecs);
  const distance = (ponSpecs.receptionPower - ponSpecs.transmissionPower) / (ponSpecs.attenuationCoefficient * (-1));
  console.log(distance);
  return distance;
}

export const CalculateTransmissionPower = (ponSpecs: IPonSpecs) => {
  const transmissionPower = ponSpecs.receptionPower + (ponSpecs.distance * ponSpecs.attenuationCoefficient);
  return transmissionPower;
}
export const CalculateReception = (ponSpecs: IPonSpecs) => {
  console.log(ponSpecs);
  const receptionPower = ponSpecs.transmissionPower - (ponSpecs.distance * ponSpecs.attenuationCoefficient);
  console.log(receptionPower);
  return receptionPower;
}
export const CalculateCoefficient = (ponSpecs: IPonSpecs) => {
  console.log(ponSpecs);
  const coefficient = (ponSpecs.receptionPower - ponSpecs.transmissionPower) / (ponSpecs.distance * (-1));
  console.log(coefficient);
  return coefficient;
}
