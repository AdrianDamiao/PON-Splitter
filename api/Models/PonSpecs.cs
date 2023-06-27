using PonSpecsCalculator.Enums;

namespace PonSpecsCalculator.Models
{
    public class PonSpecs
    {
        public double? TransmissionPower { get; set; }
        public double? AttenuationCoefficient { get; set; }
        public double? ReceptionPower { get; set; }
        public double? ConnectorAttenuation { get; set; }
        public double? FusionPointAttenuation { get; set; }
        public double? Distance { get; set; }
        public Splitter Splitter { get; set; }

        public PonSpecs()
        {
        }

        private double SplitterAttenuation { get => (int)Splitter * (-3); }
        private double? ConnectorsAttenuation { get => CalculateConnectorsAttenuation(); }

        public double? CalculateDistance()
            => (((ReceptionPower - SplitterAttenuation) - TransmissionPower) + ConnectorsAttenuation) / (AttenuationCoefficient * (-1));

        public double? CalculateTransmissionPower()
            => (ReceptionPower - SplitterAttenuation) + ((Distance * AttenuationCoefficient) + ConnectorsAttenuation);

        public double? CalculateReceptionPower()
            => (TransmissionPower - ((Distance * AttenuationCoefficient) + ConnectorsAttenuation)) - SplitterAttenuation;

        public double? CalculateCoefficient()
            => (((ReceptionPower - SplitterAttenuation) - TransmissionPower) + ConnectorsAttenuation) / (Distance * (-1));

        private double? CalculateConnectorsAttenuation()
            => Splitter switch {
                Splitter.None => ConnectorAttenuation * 2 + (FusionPointAttenuation * 2),
                Splitter.OneForTwo => ConnectorAttenuation * 3 + (FusionPointAttenuation * 2),
                Splitter.OneForFour => ConnectorAttenuation * 5 + (FusionPointAttenuation * 2),
                Splitter.OneForEight => ConnectorAttenuation * 9 + (FusionPointAttenuation * 2),
                Splitter.OneForSixteen => ConnectorAttenuation * 17 + (FusionPointAttenuation * 2),
                Splitter.OneForThirtyTwo => ConnectorAttenuation * 33 + (FusionPointAttenuation * 2),
                _ => ConnectorAttenuation
            };
    }
}