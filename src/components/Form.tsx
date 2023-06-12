import { useForm } from "react-hook-form";
import IPonSpecs from "../models/PonSpecs";
import {
    CalculateCoefficient,
    CalculateDistance,
    CalculateReception,
    CalculateTransmissionPower,
} from "../utils/PONCalculator";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Diagram } from "./Diagram";

const calculateFormSchema = z.object({
    transmission: z.number({
        invalid_type_error: "A potência de transmissão precisa ser um número",
    }),
    attenuation: z.number({
        invalid_type_error: "A atenuação precisa ser um número",
    }),
    distance: z
        .number({
            invalid_type_error: "A distância precisa ser um número",
        })
        .nonnegative({ message: "A distância precisa ser maior ou igual a 1" }),
    reception: z.number({
        invalid_type_error:
            "A Sensibilidade de receptção precisa ser um número",
    }),
    attenuationConector: z.number({
        invalid_type_error: "A atenuação precisa ser um número",
    }),
    attenuationFusionPoint: z.number({
        invalid_type_error: "A atenuação precisa ser um número",
    }),
    splitter: z.string(),
});

type CalculateFormData = z.infer<typeof calculateFormSchema>;

export const Form = () => {
    const [distanceResult, setDistanceResult] = useState<number>();
    const [transmissionResult, setTransmissionResult] = useState<number>();
    const [receptionResult, setReceptionResult] = useState<number>();
    const [attenuationResult, setAttenuationResult] = useState<number>();
    const [splitterResult, setSplitterResult] = useState<string>();
    const [selectedUnity, setSelectedUnity] = useState("");
    const [attenuationConectorResult, setAttenuationConectorResult] =
        useState<number>(0.5);
    const [attenuationFusionPointResult, setAttenuationFusionPointResult] =
        useState<number>(0.1);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CalculateFormData>({
        resolver: zodResolver(calculateFormSchema),
    });

    const isEmpty = (value: string | null | undefined) => {
        return value == null || value.trim() === "";
    };

    const calculate = ({
        transmission,
        reception,
        attenuation,
        attenuationConector,
        attenuationFusionPoint,
        distance,
        splitter,
    }: CalculateFormData) => {
        const specs: IPonSpecs = {
            transmissionPower: transmission,
            receptionPower: reception,
            attenuationCoefficient: attenuation,
            attenuationConector: attenuationConector,
            attenuationFusionPoint: attenuationFusionPoint,
            distance: selectedUnity === "km" ? distance : distance * 1000,
            splitter: (Number(splitter) * -3).toString(),
        };

        if (distance == 0) {
            specs.distance = CalculateDistance(specs);
        } else if (transmission == 0) {
            specs.transmissionPower = CalculateTransmissionPower(specs);
        } else if (reception == 0) {
            specs.receptionPower = CalculateReception(specs);
        } else if (attenuation == 0) {
            specs.attenuationCoefficient = CalculateCoefficient(specs);
        }

        setSplitterResult((Number(specs.splitter) / -3).toString());
        setDistanceResult(specs.distance);
        setTransmissionResult(specs.transmissionPower);
        setReceptionResult(specs.receptionPower);
        setAttenuationResult(specs.attenuationCoefficient);
        setAttenuationConectorResult(specs.attenuationConector);
        setAttenuationFusionPointResult(specs.attenuationFusionPoint);
    };

    const handleUnityChange = (event) => {
        setSelectedUnity(event.target.value);
    };

    return (
        <main className="h-full flex flex-col md:flex-row items-center justify-center">
            <form
                onSubmit={handleSubmit(calculate)}
                className="flex flex-col gap-4 w-full max-w-2xl text-left md:pr-8"
            >
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Potência de Transmissão
                        </label>
                        <div className="mt-2">
                            <input
                                type="number"
                                step=".01"
                                placeholder="0.00"
                                className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register("transmission", {
                                    valueAsNumber: !isEmpty("transmission"),
                                })}
                            />
                        </div>
                        {errors.transmission && (
                            <span>{errors.transmission.message}</span>
                        )}
                    </div>

                    <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Atenuação
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="number"
                                step=".01"
                                placeholder="0.00"
                                className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                                {...register("attenuation", {
                                    valueAsNumber: !isEmpty("attenuation"),
                                })}
                            />
                            <div className="absolute inset-y-1/4 right-0 flex items-center">
                                <span className="h-full py-0 pl-2 pr-4 text-gray-500 sm:text-sm">
                                    dB/km
                                </span>
                            </div>
                        </div>
                        {errors.attenuation && (
                            <span>{errors.attenuation.message}</span>
                        )}
                    </div>
                    <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Distância
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="number"
                                step=".01"
                                placeholder="0.00"
                                className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register("distance", {
                                    valueAsNumber: !isEmpty("distance"),
                                })}
                            />

                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="unidade" className="sr-only">
                                    Unidade
                                </label>
                                <select
                                    id="unidade"
                                    name="unidade"
                                    className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-4 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm"
                                    onChange={handleUnityChange}
                                    value={selectedUnity}
                                >
                                    <option value="km">km</option>
                                    <option value="m">m</option>
                                </select>
                            </div>
                        </div>
                        {errors.distance && (
                            <span>{errors.distance.message}</span>
                        )}
                    </div>
                    <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Sensibilidade do Receptor
                        </label>
                        <div className="mt-2">
                            <input
                                type="number"
                                step=".01"
                                placeholder="0.00"
                                className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                                {...register("reception", {
                                    valueAsNumber: !isEmpty("reception"),
                                })}
                            />
                        </div>
                        {errors.reception && (
                            <span>{errors.reception.message}</span>
                        )}
                    </div>
                    <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Atenuação do Conector
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="number"
                                step=".01"
                                placeholder="0.00"
                                value={attenuationConectorResult}
                                className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                                {...register("attenuationConector", {
                                    valueAsNumber: !isEmpty(
                                        "attenuationConector"
                                    ),
                                })}
                            />
                            <div className="absolute inset-y-1/4 right-0 flex items-center">
                                <span className="h-full py-0 pl-2 pr-4 text-gray-500 sm:text-sm">
                                    dB
                                </span>
                            </div>
                        </div>
                        {errors.attenuation && (
                            <span>{errors.attenuation.message}</span>
                        )}
                    </div>
                    <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Atenuação do ponto de fusão
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="number"
                                step=".01"
                                placeholder="0.00"
                                value={attenuationFusionPointResult}
                                className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                                {...register("attenuationFusionPoint", {
                                    valueAsNumber: !isEmpty(
                                        "attenuationFusionPoint"
                                    ),
                                })}
                            />
                            <div className="absolute inset-y-1/4 right-0 flex items-center">
                                <span className="h-full py-0 pl-2 pr-4 text-gray-500 sm:text-sm">
                                    dB
                                </span>
                            </div>
                        </div>
                        {errors.attenuation && (
                            <span>{errors.attenuation.message}</span>
                        )}
                    </div>
                    <div className="sm:col-span-6 mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Splitter
                        </label>
                        <select
                            className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                            {...register("splitter")}
                        >
                            <option value="" disabled>
                                Selecione um splitter
                            </option>
                            <option value="0">Sem Splitter</option>
                            <option value="1">1:2</option>
                            <option value="2">1:4</option>
                            <option value="3">1:8</option>
                            <option value="4">1:16</option>
                            <option value="5">1:32</option>
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full text-white bg-violet-500 hover:bg-violet-600 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                >
                    Calcular
                </button>
            </form>
            {distanceResult &&
                transmissionResult &&
                receptionResult &&
                attenuationResult &&
                splitterResult && (
                    <div className="mt-10 w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="text-left mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                            Resultado da Rede PON
                        </h5>
                        <p className="text-left text-sm font-normal text-gray-500 dark:text-gray-400">
                            Configurações da rede PON.
                        </p>
                        <div className="mt-6 w-full">
                            <Diagram splitter={splitterResult} />
                        </div>
                        <div className="mt-6 relative overflow-x-auto rounded-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <tbody>
                                    <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td
                                            scope="row"
                                            className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            Distância
                                        </td>
                                        <td className="border px-6 py-4">
                                            {Number(
                                                distanceResult.toFixed(2)
                                            ) >= 0
                                                ? `${distanceResult.toFixed(
                                                      2
                                                  )} km`
                                                : "0 km"}
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th
                                            scope="row"
                                            className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            Potência de Transmissão
                                        </th>
                                        <td className="border px-6 py-4">
                                            {transmissionResult.toFixed(2)} dBm
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th
                                            scope="row"
                                            className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            Sensibilidade de Recepção
                                        </th>
                                        <td className="border px-6 py-4">
                                            {receptionResult.toFixed(2)} dBm
                                        </td>
                                    </tr>
                                    <tr className="bg-white border dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th
                                            scope="row"
                                            className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            Atenuação
                                        </th>
                                        <td className="px-6 py-4">
                                            {Number(
                                                attenuationResult.toFixed(2)
                                            ) >= 0
                                                ? `${attenuationResult.toFixed(
                                                      2
                                                  )} dB/km`
                                                : "0 dB/km"}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th
                                            scope="row"
                                            className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            Atenuação do Conector
                                        </th>
                                        <td className="px-6 py-4">
                                            {attenuationConectorResult.toFixed(
                                                2
                                            )}{" "}
                                            dB
                                        </td>
                                    </tr>
                                    <tr className="bg-white border dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th
                                            scope="row"
                                            className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            Atenuação do ponto de fusão
                                        </th>
                                        <td className="px-6 py-4">
                                            {attenuationFusionPointResult.toFixed(
                                                2
                                            )}{" "}
                                            dB
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
        </main>
    );
};
