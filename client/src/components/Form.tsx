import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const Form = ({ calculate, calculateFormSchema }: any) => {
    type CalculateFormData = z.infer<typeof calculateFormSchema>;

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

    console.log(errors);
    return (
        <div className="px-6">
            <form
                onSubmit={handleSubmit(calculate)}
                className="flex flex-col w-full max-w-2xl text-left px-12 my-8 rounded-2xl border-0 py-3 shadow-sm ring-1 ring-inset ring-gray-200 bg-white"
            >
                <h5 className="text-left my-6 text-xl font-semibold text-gray-900 md:text-2xl leading-7">
                    Cálculo da Rede PON
                </h5>
                {errors.fieldNumber && (
                    <span className="text-red-600">
                        {errors.fieldNumber.message?.toString()}
                    </span>
                )}
                <div className="my-4 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Potência de Transmissão
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="number"
                                step=".01"
                                placeholder="0.00"
                                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 outline-none"
                                {...register("transmission", {
                                    valueAsNumber: !isEmpty("transmission"),
                                })}
                            />
                            <div className="absolute inset-y-1/4 right-0 flex items-center">
                                <span className="h-full py-0 pl-2 pr-4 text-gray-500 sm:text-sm">
                                    dB/km
                                </span>
                            </div>
                        </div>
                        {errors.transmission && (
                            <span className="text-red-600">
                                {errors.transmission.message?.toString()}
                            </span>
                        )}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Atenuação
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="number"
                                step=".01"
                                placeholder="0.00"
                                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 outline-none"
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
                            <span className="text-red-600">
                                {errors.attenuation.message?.toString()}
                            </span>
                        )}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Distância
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="number"
                                step=".001"
                                placeholder="0.00"
                                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 outline-none"
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
                                    className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-4 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm"
                                    {...register("distanceUnit")}
                                >
                                    <option value="km">km</option>
                                    <option value="m">m</option>
                                </select>
                            </div>
                        </div>
                        {errors.distance && (
                            <span className="text-red-600">
                                {errors.distance.message?.toString()}
                            </span>
                        )}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Sensibilidade do Receptor
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="number"
                                step=".01"
                                placeholder="0.00"
                                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 outline-none"
                                {...register("reception", {
                                    valueAsNumber: !isEmpty("reception"),
                                })}
                            />
                            <div className="absolute inset-y-1/4 right-0 flex items-center">
                                <span className="h-full py-0 pl-2 pr-4 text-gray-500 sm:text-sm">
                                    dBm
                                </span>
                            </div>
                        </div>
                        {errors.reception && (
                            <span className="text-red-600">
                                {errors.reception.message?.toString()}
                            </span>
                        )}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Atenuação do Conector
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="number"
                                step=".01"
                                placeholder="0.00"
                                defaultValue={0.5}
                                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 outline-none"
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
                        {errors.attenuationConector && (
                            <span className="text-red-600">
                                {errors.attenuationConector.message?.toString()}
                            </span>
                        )}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Atenuação do Ponto de Fusão
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="number"
                                step=".01"
                                placeholder="0.00"
                                defaultValue={0.1}
                                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 outline-none"
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
                        {errors.attenuationFusionPoint && (
                            <span className="text-red-600">
                                {errors.attenuationFusionPoint.message?.toString()}
                            </span>
                        )}
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Splitter
                        </label>
                        <select
                            className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 outline-none"
                            // {...register("splitter")}
                            {...register("splitter", {
                                valueAsNumber: !isEmpty(
                                    "splitter"
                                ),
                            })}
                        >
                            <option value="" disabled>
                                Selecione um splitter
                            </option>
                            <option value={0}>Sem Splitter</option>
                            <option value={1}>1:2</option>
                            <option value={2}>1:4</option>
                            <option value={3}>1:8</option>
                            <option value={4}>1:16</option>
                            <option value={5}>1:32</option>
                        </select>
                    </div>
                    <div className="col-span-6 mb-4">
                        <button
                            type="submit"
                            className="w-full text-white bg-violet-500 hover:bg-violet-600 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                        >
                            Calcular
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
