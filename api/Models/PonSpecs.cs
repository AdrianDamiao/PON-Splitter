using PonSpecsCalculator.Enums;

namespace PonSpecsCalculator.Models
{
    public class PonSpecs
    {
        public double? TransmissionPower { get; private set; } // Getters and Setters C# Version
        public double? AttenuationCoefficient { get; private set; }
        public double? ReceptionPower { get; private set; }
        public double? ConnectorAttenuation { get; private set; }
        public double? FusionPointAttenuation { get; private set; }
        public double? Distance { get; private set; }
        public Splitter Splitter { get; private set; }

        public PonSpecs()
        {
        }

        private double SplitterAttenuation { get => (int)Splitter * (-3); }
        private double? ConnectorsAttenuation { get => CalculateConnectorsAttenuation(); }

        /// <summary>
        /// Calculates distance.
        /// </summary>
        public double? CalculateDistance()
            => (((ReceptionPower - SplitterAttenuation) - TransmissionPower) + ConnectorsAttenuation) / (AttenuationCoefficient * (-1));

        /// <summary>
        /// Calculates transmission power.
        /// </summary>
        public double? CalculateTransmissionPower()
            => (ReceptionPower - SplitterAttenuation) + ((Distance * AttenuationCoefficient) + ConnectorsAttenuation);

        /// <summary>
        /// Calculates reception power.
        /// </summary>
        public double? CalculateReceptionPower()
            => (TransmissionPower - ((Distance * AttenuationCoefficient) + ConnectorsAttenuation)) - SplitterAttenuation;

        /// <summary>
        /// Calculates coefficient.
        /// </summary>
        public double? CalculateCoefficient()
            => (((ReceptionPower - SplitterAttenuation) - TransmissionPower) + ConnectorsAttenuation) / (Distance * (-1));

        /// <summary>
        /// Calculates connectors attenuation.
        /// </summary>
        private double? CalculateConnectorsAttenuation()
            => Splitter switch
            {
                Splitter.None => ConnectorAttenuation * 2 + (FusionPointAttenuation * 2),
                Splitter.OneForTwo => ConnectorAttenuation * 4 + (FusionPointAttenuation * 2),
                Splitter.OneForFour => ConnectorAttenuation * 4 + (FusionPointAttenuation * 2),
                Splitter.OneForEight => ConnectorAttenuation * 4 + (FusionPointAttenuation * 2),
                Splitter.OneForSixteen => ConnectorAttenuation * 4 + (FusionPointAttenuation * 2),
                Splitter.OneForThirtyTwo => ConnectorAttenuation * 4 + (FusionPointAttenuation * 2),
                _ => ConnectorAttenuation
            };
    }
}