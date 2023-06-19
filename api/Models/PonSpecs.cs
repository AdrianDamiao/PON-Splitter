using System;

namespace PonSpecsCalculator.Models
{
    public class PonSpecs
    {
        public long? TransmissionPower = 0;
        public long? AttenuationCoefficient = 0;
        public long? ReceptionPower = 0;
        public long? ConnectorAttenuation = 0;
        public long? FusionPointAttenuation = 0;
        public long? Distance = 0;
        public Splitter Splitter = Splitter.None;

        private long SplitterAttenuation { get => (int)Splitter * (-3); }
        private long? ConnectorsAttenuation { get => CalculateConnectorsAttenuation(); }

        private long? CalculateDistance()
            => (((ReceptionPower - SplitterAttenuation) - TransmissionPower) + ConnectorsAttenuation) / (AttenuationCoefficient * (-1));

        private long? CalculateTransmissionPower()
            => (ReceptionPower - SplitterAttenuation) + ((Distance * AttenuationCoefficient) + ConnectorsAttenuation);

        private long? CalculateReceptionPower()
            => (TransmissionPower - ((Distance * AttenuationCoefficient) + ConnectorsAttenuation)) - SplitterAttenuation;

        private long? CalculateCoefficient()
            => (((ReceptionPower - SplitterAttenuation) - TransmissionPower) + ConnectorsAttenuation) / (Distance * (-1));
        
        public long CalculateEmptyVariable() {
            if(Distance == null)
            {
                return CalculateDistance()!.Value;
            }
            else if(TransmissionPower == null)
            {
                return CalculateTransmissionPower()!.Value;
            }
            else if(ReceptionPower == null)
            {
                return CalculateReceptionPower()!.Value;
            } 
            else if(CalculateCoefficient == null)
            {
                return CalculateDistance()!.Value;
            }
            
            throw new InvalidOperationException("Você não pode preencher todos os campos.");
        }

        private long? CalculateConnectorsAttenuation()
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