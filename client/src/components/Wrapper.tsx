import IPonSpecs from "../models/PonSpecs";
import { z } from "zod";
import { useState } from "react";
import { Result } from "./Result";
import axios, { AxiosResponse } from "axios";
import CalculatedResource from "../utils/CalculatedResource";
const api = axios.create({ baseURL: "http://localhost:5181/api/" });
import { Form } from "./Form";

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
        splitter: z.number(),
    })
    .partial()
    .superRefine((val, ctx) => {
        const EmptyFields: number = Object.values(val).reduce(
            (total: number, x) => (Number.isNaN(x) ? total + 1 : total),
            0
        ) as number;

        if (EmptyFields > 1) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: `Apenas um campo pode ficar em branco`,
                path: ["fieldNumber"],
            });
        } else if (EmptyFields == 0) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: `Para o cálculo um campo precisa ficar em branco`,
                path: ["fieldNumber"],
            });
        }
    });

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
            splitter: splitter!,
        };

        api.post("calcs/calculate", specs).then(
            (response: AxiosResponse<{ resource: number; result: number }>) => {
                switch (response.data.resource) {
                    case CalculatedResource.AttenuationCoefficient:
                        specs.attenuationCoefficient = response.data.result;
                        break;
                    case CalculatedResource.Distance:
                        specs.distance = response.data.result;
                        break;
                    case CalculatedResource.ReceptionPower:
                        specs.receptionPower = response.data.result;
                        break;
                    case CalculatedResource.TransmissionPower:
                        specs.transmissionPower = response.data.result;
                        break;
                }

                setSplitterResult(specs.splitter.toString());
                setDistanceResult(specs.distance);
                setTransmissionResult(specs.transmissionPower);
                setReceptionResult(specs.receptionPower);
                setAttenuationResult(specs.attenuationCoefficient);
                setAttenuationConectorResult(specs.connectorAttenuation);
                setAttenuationFusionPointResult(specs.fusionPointAttenuation);
            }
        );
    };

    return (
        <main className="h-full md:h-screen flex flex-col md:flex-row-reverse items-center justify-center">
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
