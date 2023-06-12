export default interface IPonSpecs {
    transmissionPower: number;
    attenuationCoefficient: number;
    receptionPower: number;
    attenuationConector: number;
    attenuationFusionPoint: number;
    distance: number;
    splitter: string;
}

export default class PonSpecs implements IPonSpecs {
    public transmissionPower: number;

    public attenuationCoefficient: number;

    public receptionPower: number;

    public attenuationConector: number;

    public attenuationFusionPoint: number;

    public distance: number;

    public splitter: string;

    constructor() {
        this.transmissionPower = 0;
        this.attenuationCoefficient = 0;
        this.receptionPower = 0;
        this.distance = 0;
        this.attenuationConector = 0;
        this.attenuationFusionPoint = 0;
        this.splitter = "";
    }
}
