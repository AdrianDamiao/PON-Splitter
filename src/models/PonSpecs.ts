export default interface IPonSpecs {
    transmissionPower: number;
    attenuationCoefficient: number;
    receptionPower: number;
    distance: number;
    splitter: string;
}

export default class PonSpecs implements IPonSpecs {
    public transmissionPower: number;

    public attenuationCoefficient: number;

    public receptionPower: number;

    public distance: number;

    public splitter: string;

    constructor() {
        this.transmissionPower = 0;
        this.attenuationCoefficient = 0;
        this.receptionPower = 0;
        this.distance = 0;
        this.splitter = "";
    }
}
