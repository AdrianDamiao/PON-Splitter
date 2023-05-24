import IPonSpecs from "../models/PonSpecs";

export const CalculateWithoutDistance = (ponSpecs: IPonSpecs) => {
  console.log(ponSpecs);
  const distance = (ponSpecs.receptionPower - ponSpecs.transmissionPower) / (ponSpecs.attenuationCoefficient * (-1));
  console.log(distance);
  return distance;
}

export const CalculateWithoutTransmissionPower = (ponSpecs: IPonSpecs) => {
  console.log(ponSpecs);
  const transmissionPower = ponSpecs.receptionPower + (ponSpecs.distance * ponSpecs.attenuationCoefficient);
  console.log(transmissionPower);
  return transmissionPower;
}
export const CalculateWithoutReception = (ponSpecs: IPonSpecs) => {
  console.log(ponSpecs);
  const receptionPower = ponSpecs.transmissionPower - (ponSpecs.distance * ponSpecs.attenuationCoefficient);
  console.log(receptionPower);
  return receptionPower;
}
export const CalculateWithoutCoefficient = (ponSpecs: IPonSpecs) => {
  console.log(ponSpecs);
  const coefficient = (ponSpecs.receptionPower - ponSpecs.transmissionPower) / (ponSpecs.distance * (-1));
  console.log(coefficient);
  return coefficient;
}
