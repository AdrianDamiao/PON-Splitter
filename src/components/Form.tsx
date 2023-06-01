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

const calculateFormSchema = z.object({
    transmission: z.number(),
    attenuation: z.number(),
    distance: z.number(),
    reception: z.number(),
});

type CalculateFormData = z.infer<typeof calculateFormSchema>;

export function Form() {
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
            setDistanceResult(CalculateWithoutDistance(specs));
        } else if (transmission == 0) {
            setTransmissionResult(CalculateWithoutTransmissionPower(specs));
        } else if (reception == 0) {
            setReceptionResult(CalculateWithoutReception(specs));
        } else if (attenuation == 0) {
            setAttenuationResult(CalculateWithoutCoefficient(specs));
        }
    };

    return (
        <main className="h-screen flex flex-col gap-10 items-center justify-center">
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
                            Transmissão
                        </label>
                        <div className="mt-2">
                            <input
                                type="number"
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
                    <div className="sm:col-span-3 mb-4">
                        <label
                            htmlFor=""
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Recepção
                        </label>
                        <div className="mt-2">
                            <input
                                type="number"
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
                </div>
                <button
                    type="submit"
                    className="w-full text-white bg-violet-500 hover:bg-violet-600 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                >
                    Calcular
                </button>
            </form>
            <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="text-left mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                    Connect wallet
                </h5>
                <p className="text-left text-sm font-normal text-gray-500 dark:text-gray-400">
                    Connect with one of our available wallet providers or create
                    a new one.
                </p>
                <ul className="my-4 space-y-3">
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                        >
                            <span className="flex-1 ml-3 whitespace-nowrap">
                                {distanceResult}
                            </span>
                            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                                Popular
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                        >
                            <span className="flex-1 ml-3 whitespace-nowrap">
                                {transmissionResult}
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                        >
                            <span className="flex-1 ml-3 whitespace-nowrap">
                                Opera Wallet
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                        >
                            <span className="flex-1 ml-3 whitespace-nowrap">
                                WalletConnect
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    );
}
