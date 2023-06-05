import IPonSpecs from "../models/PonSpecs";

export const CalculateDistance = (ponSpecs: IPonSpecs) => {
  console.log(ponSpecs);
  const distance = ((ponSpecs.receptionPower - (Number(ponSpecs.splitter) * 3)) - ponSpecs.transmissionPower) / (ponSpecs.attenuationCoefficient * (-1));
  console.log(distance);
  return distance;
}

export const CalculateTransmissionPower = (ponSpecs: IPonSpecs) => {
  const transmissionPower = (ponSpecs.receptionPower - (Number(ponSpecs.splitter) * 3)) + (ponSpecs.distance * ponSpecs.attenuationCoefficient);
  return transmissionPower;
}
export const CalculateReception = (ponSpecs: IPonSpecs) => {
  console.log(ponSpecs.splitter);
  const receptionPower = ponSpecs.transmissionPower - (ponSpecs.distance * ponSpecs.attenuationCoefficient);
  return receptionPower - (Number(ponSpecs.splitter) * 3);
}
export const CalculateCoefficient = (ponSpecs: IPonSpecs) => {
  console.log(ponSpecs);
  const coefficient = ((ponSpecs.receptionPower - (Number(ponSpecs.splitter) * 3)) - ponSpecs.transmissionPower) / (ponSpecs.distance * (-1));
  console.log(coefficient);
  return coefficient;
}
