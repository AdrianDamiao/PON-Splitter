export default interface IPonSpecs {
    transmissionPower: number;
    attenuationCoefficient: number;
    receptionPower: number;
    connectorAttenuation: number;
    fusionPointAttenuation: number;
    distance: number;
    splitter: number;
}

export default class PonSpecs implements IPonSpecs {
    public transmissionPower: number;

    public attenuationCoefficient: number;

    public receptionPower: number;

    public connectorAttenuation: number;

    public fusionPointAttenuation: number;

    public distance: number;

    public splitter: number;

    constructor() {
        this.transmissionPower = 0;
        this.attenuationCoefficient = 0;
        this.receptionPower = 0;
        this.distance = 0;
        this.connectorAttenuation = 0;
        this.fusionPointAttenuation = 0;
        this.splitter = 0;
    }
}
