import { Diagram } from "./Diagram";

type ResultProps = {
    distanceResult: number;
    transmissionResult: number;
    receptionResult: number;
    attenuationResult: number;
    splitterResult: string;
    attenuationConectorResult: number;
    attenuationFusionPointResult: number;
};

export const Result = (props: ResultProps) => {
    const {
        distanceResult,
        transmissionResult,
        receptionResult,
        attenuationResult,
        splitterResult,
        attenuationConectorResult,
        attenuationFusionPointResult,
    } = props;

    return (
        <div className="my-4 w-full max-w-2xl px-8">
            <div className="mt-3 w-full">
                <Diagram splitter={splitterResult} />
            </div>
            <div className="mt-6 relative border overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <tbody>
                        <tr className="bg-white hover:bg-gray-50 border-b">
                            <td
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                Distância
                            </td>
                            <td className="px-6 py-4 border-l">
                                {Number(distanceResult.toFixed(2)) >= 0
                                    ? `${distanceResult.toFixed(2)} km`
                                    : "0 km"}
                            </td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-50 border-b">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                Potência de Transmissão
                            </th>
                            <td className="px-6 py-4 border-l">
                                {transmissionResult.toFixed(2)} dBm
                            </td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-50 border-b">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                Sensibilidade de Recepção
                            </th>
                            <td className="px-6 py-4 border-l">
                                {receptionResult.toFixed(2)} dBm
                            </td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-50 border-b">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                Atenuação
                            </th>
                            <td className="px-6 py-4 border-l">
                                {Number(attenuationResult.toFixed(2)) >= 0
                                    ? `${attenuationResult.toFixed(2)} dB/km`
                                    : "0 dB/km"}
                            </td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-50 border-b">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                Atenuação do Conector
                            </th>
                            <td className="px-6 py-4 border-l">
                                {attenuationConectorResult.toFixed(2)} dB
                            </td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-50 border-b">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                Atenuação do Ponto de Fusão
                            </th>
                            <td className="px-6 py-4 border-l">
                                {attenuationFusionPointResult.toFixed(2)} dB
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
