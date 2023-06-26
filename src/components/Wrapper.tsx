import IPonSpecs from "../models/PonSpecs";
import { z } from "zod";
import { useState } from "react";
import { Result } from "./Result";
import PONCalculator from "../utils/PONCalculator";
import { Form } from "./Form";

function validateInput(props: any) {
    const EmptyFields: number = Object.values(props).reduce(
        (total: number, x) => (Number.isNaN(x) ? total + 1 : total),
        0
    ) as number;
    console.log(EmptyFields);
    return EmptyFields > 1 ? true : false;
}

const calculateFormSchema = z
    .object({
        transmission: z
            .number({
                invalid_type_error:
                    "A potência de transmissão precisa ser um número",
            })
            .or(z.nan()),
        attenuation: z
            .number({
                invalid_type_error: "A atenuação precisa ser um número",
            })
            .or(z.nan()),
        distance: z
            .number({
                invalid_type_error: "A distância precisa ser um número",
            })
            .nonnegative({
                message: "A distância precisa ser maior ou igual a 1",
            })
            .or(z.nan()),
        reception: z
            .number({
                invalid_type_error:
                    "A Sensibilidade de recepção precisa ser um número",
            })
            .or(z.nan()),
        attenuationConector: z.number({
            invalid_type_error: "A atenuação precisa ser um número",
        }),
        attenuationFusionPoint: z.number({
            invalid_type_error: "A atenuação precisa ser um número",
        }),
        distanceUnit: z.string(),
        splitter: z.string(),
    })
    .partial();

type CalculateFormData = z.infer<typeof calculateFormSchema>;

export const Wrapper = () => {
    const [distanceResult, setDistanceResult] = useState<number>();
    const [transmissionResult, setTransmissionResult] = useState<number>();
    const [receptionResult, setReceptionResult] = useState<number>();
    const [attenuationResult, setAttenuationResult] = useState<number>();
    const [splitterResult, setSplitterResult] = useState<string>();
    const [attenuationConectorResult, setAttenuationConectorResult] =
        useState<number>(0.5);
    const [attenuationFusionPointResult, setAttenuationFusionPointResult] =
        useState<number>(0.1);

    const calculate = ({
        transmission,
        reception,
        attenuation,
        attenuationConector,
        attenuationFusionPoint,
        distance,
        distanceUnit,
        splitter,
    }: CalculateFormData) => {
        const specs: IPonSpecs = {
            transmissionPower: transmission as number,
            receptionPower: reception as number,
            attenuationCoefficient: attenuation as number,
            connectorAttenuation: attenuationConector as number,
            fusionPointAttenuation: attenuationFusionPoint as number,
            distance: (distanceUnit === "km"
                ? distance
                : distance! / 1000) as number,
            splitter: (Number(splitter) * -3).toString(),
        };

        validateInput(specs);

        if (Number.isNaN(distance)) {
            specs.distance = PONCalculator.CalculateDistance(specs);
        } else if (Number.isNaN(transmission)) {
            specs.transmissionPower =
                PONCalculator.CalculateTransmissionPower(specs);
        } else if (Number.isNaN(reception)) {
            specs.receptionPower = PONCalculator.CalculateReception(specs);
        } else if (Number.isNaN(attenuation)) {
            specs.attenuationCoefficient =
                PONCalculator.CalculateCoefficient(specs);
        }

        setSplitterResult((Number(specs.splitter) / -3).toString());
        setDistanceResult(specs.distance);
        setTransmissionResult(specs.transmissionPower);
        setReceptionResult(specs.receptionPower);
        setAttenuationResult(specs.attenuationCoefficient);
        setAttenuationConectorResult(specs.connectorAttenuation);
        setAttenuationFusionPointResult(specs.fusionPointAttenuation);
    };

    return (
        <main className="h-screen flex flex-col md:flex-row-reverse items-center justify-center">
            {distanceResult &&
                transmissionResult &&
                receptionResult &&
                attenuationResult &&
                splitterResult && (
                    <Result
                        distanceResult={distanceResult}
                        transmissionResult={transmissionResult}
                        receptionResult={receptionResult}
                        attenuationResult={attenuationResult}
                        splitterResult={splitterResult}
                        attenuationConectorResult={attenuationConectorResult}
                        attenuationFusionPointResult={
                            attenuationFusionPointResult
                        }
                    />
                )}
            <Form
                calculate={calculate}
                calculateFormSchema={calculateFormSchema}
            />
        </main>
    );
};