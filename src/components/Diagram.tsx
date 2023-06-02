import ReactFlow, { Controls, MiniMap } from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
    {
        id: "1",
        position: { x: 0, y: 0 },
        data: { label: "OLT" },
        sourcePosition: "right",
        type: "input",
    },
    {
        id: "2",
        position: { x: 200, y: 0 },
        data: { label: "Splitter 1:4" },
        sourcePosition: "right",
        targetPosition: "left",
    },
    {
        id: "3",
        position: { x: 500, y: -150 },
        data: { label: "ONT 1" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "4",
        position: { x: 500, y: -50 },
        data: { label: "ONT 2" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "5",
        position: { x: 500, y: 50 },
        data: { label: "ONT 3" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "6",
        position: { x: 500, y: 150 },
        data: { label: "ONT 4" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
];
const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e2-4", source: "2", target: "4" },
    { id: "e2-5", source: "2", target: "5" },
    { id: "e2-6", source: "2", target: "6" },
];
type splitterProps = {
    splitter: string;
};

export const Diagram = ({ splitter }: splitterProps) => {
    return (
        <div
            className="border w-fit rounded-md"
            style={{ width: "100%", height: "40vh" }}
        >
            <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
                <Controls />
            </ReactFlow>
        </div>
    );
};
