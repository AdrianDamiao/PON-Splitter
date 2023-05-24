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
            setAnswer(CalculateWithoutDistance(specs));
        } else if (transmission == 0) {
            setAnswer(CalculateWithoutTransmissionPower(specs));
        } else if (reception == 0) {
            setAnswer(CalculateWithoutReception(specs));
        } else if (attenuation == 0) {
            setAnswer(CalculateWithoutCoefficient(specs));
        }
    };

    return (
        <main className="h-screen flex flex-col gap-10 items-center justify-center">
            <form
                onSubmit={handleSubmit(calculate)}
                className="flex flex-col gap-4 w-full max-w-xs"
            >
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Transmissão</label>
                    <input
                        type="number"
                        className="border border-zinc-800 shadow-sm rounded h-10 px-3"
                        {...register("transmission", {
                            valueAsNumber: !isEmpty("transmission"),
                        })}
                    />
                    {errors.transmission && (
                        <span>{errors.transmission.message}</span>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="">Atenuação</label>
                    <input
                        type="number"
                        className="border border-zinc-800 shadow-sm rounded h-10 px-3"
                        {...register("attenuation", {
                            valueAsNumber: !isEmpty("attenuation"),
                        })}
                    />
                    {errors.attenuation && (
                        <span>{errors.attenuation.message}</span>
                    )}
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Distância</label>
                    <input
                        type="number"
                        className="border border-zinc-800 shadow-sm rounded h-10 px-3"
                        {...register("distance", {
                            valueAsNumber: !isEmpty("distance"),
                        })}
                    />
                    {errors.distance && <span>{errors.distance.message}</span>}
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Recepção</label>
                    <input
                        type="number"
                        className="border border-zinc-800 shadow-sm rounded h-10 px-3"
                        {...register("reception", {
                            valueAsNumber: !isEmpty("reception"),
                        })}
                    />
                    {errors.reception && (
                        <span>{errors.reception.message}</span>
                    )}
                </div>
                <button
                    type="submit"
                    className="px-4 bg-violet-500 rounded font-semibold text-white h-10 hover:bg-violet-800"
                >
                    Calcular
                </button>
            </form>

            <pre>{answer}</pre>
        </main>
    );
}
