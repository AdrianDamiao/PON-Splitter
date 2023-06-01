import { useForm } from "react-hook-form";
import IPonSpecs from "../models/PonSpecs";
import {
    CalculateWithoutCoefficient,
    CalculateWithoutDistance,
    CalculateWithoutReception,
    CalculateWithoutTransmissionPower,
} from "../utils/PONCalculator";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Diagram } from "./Diagram";

const calculateFormSchema = z.object({
    transmission: z.number(),
    attenuation: z.number(),
    distance: z.number(),
    reception: z.number(),
    splitter: z.string(),
});

type CalculateFormData = z.infer<typeof calculateFormSchema>;

export const Form = () => {
    const [answer, setAnswer] = useState<number>();
    const [distanceResult, setDistanceResult] = useState<number>();
    const [transmissionResult, setTransmissionResult] = useState<number>();
    const [receptionResult, setReceptionResult] = useState<number>();
    const [attenuationResult, setAttenuationResult] = useState<number>();

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
        distance,
    }: CalculateFormData) => {
        const specs: IPonSpecs = {
            transmissionPower: transmission,
            receptionPower: reception,
            attenuationCoefficient: attenuation,
            distance: distance,
        };

        if (distance == 0) {
            specs.distance = CalculateWithoutDistance(specs);
        } else if (transmission == 0) {
            specs.transmissionPower = CalculateWithoutTransmissionPower(specs);
        } else if (reception == 0) {
            specs.receptionPower = CalculateWithoutReception(specs);
        } else if (attenuation == 0) {
            specs.attenuationCoefficient = CalculateWithoutCoefficient(specs);
        }

        setDistanceResult(specs.distance);
        setTransmissionResult(specs.transmissionPower);
        setReceptionResult(specs.receptionPower);
        setAttenuationResult(specs.attenuationCoefficient);
    };

    return (
        <main className="h-full flex flex-col items-center justify-center">
            <form
                onSubmit={handleSubmit(calculate)}
                className="flex flex-col gap-4 w-full max-w-lg text-left"
            >
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label
                            htmlFor=""
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
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
                        <label
                            htmlFor=""
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Atenuação
                        </label>
                        <div className="mt-2">
                            <input
                                type="number"
                                step=".01"
                                placeholder="0.00"
                                className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                                {...register("attenuation", {
                                    valueAsNumber: !isEmpty("attenuation"),
                                })}
                            />
                        </div>
                        {errors.attenuation && (
                            <span>{errors.attenuation.message}</span>
                        )}
                    </div>
                    <div className="sm:col-span-3">
                        <label
                            htmlFor=""
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
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
                                >
                                    <option>km</option>
                                    <option>m</option>
                                </select>
                            </div>
                        </div>
                        {errors.distance && (
                            <span>{errors.distance.message}</span>
                        )}
                    </div>
                    <div className="sm:col-span-3">
                        <label
                            htmlFor=""
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
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
                    <div className="sm:col-span-6 mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Splitter
                        </label>
                        <select
                            className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                            {...register("splitter")}
                        >
                            <option selected>Selecione um splitter</option>
                            <option value="splitter1">1:4</option>
                            <option value="splitter2">1:8</option>
                            <option value="splitter3">1:16</option>
                            <option value="splitter4">1:32</option>
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
                attenuationResult && (
                    <div className="mt-10 w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="text-left mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                            Resultado
                        </h5>
                        <p className="text-left text-sm font-normal text-gray-500 dark:text-gray-400">
                            Configurações da rede PON.
                        </p>
                        <div className="mt-6 w-full max-w-md max-h-md">
                            <Diagram splitter={"modelo4"} />
                        </div>
                        <div className="mt-6 relative overflow-x-auto rounded-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td
                                        scope="row"
                                        className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Distância
                                    </td>
                                    <td className="border px-6 py-4">
                                        {distanceResult} km
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
                                        {transmissionResult} dBm
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
                                        {receptionResult} dBm
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
                                        {attenuationResult} dB/km
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                )}
        </main>
    );
};
