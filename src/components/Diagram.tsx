import ReactFlow, { Controls } from "reactflow";

import "reactflow/dist/style.css";

const splitter1Nodes = [
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

const splitter1Edges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e2-4", source: "2", target: "4" },
    { id: "e2-5", source: "2", target: "5" },
    { id: "e2-6", source: "2", target: "6" },
];

const splitter2Nodes = [
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
        data: { label: "Splitter 1:8" },
        sourcePosition: "right",
        targetPosition: "left",
    },
    {
        id: "3",
        position: { x: 500, y: -200 },
        data: { label: "ONT 1" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "4",
        position: { x: 500, y: -150 },
        data: { label: "ONT 2" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "5",
        position: { x: 500, y: -100 },
        data: { label: "ONT 3" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "6",
        position: { x: 500, y: -50 },
        data: { label: "ONT 4" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "7",
        position: { x: 500, y: 0 },
        data: { label: "ONT 5" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "8",
        position: { x: 500, y: 50 },
        data: { label: "ONT 6" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "9",
        position: { x: 500, y: 100 },
        data: { label: "ONT 7" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "10",
        position: { x: 500, y: 150 },
        data: { label: "ONT 8" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
];

const splitter2Edges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e2-4", source: "2", target: "4" },
    { id: "e2-5", source: "2", target: "5" },
    { id: "e2-6", source: "2", target: "6" },
    { id: "e2-7", source: "2", target: "7" },
    { id: "e2-8", source: "2", target: "8" },
    { id: "e2-9", source: "2", target: "9" },
    { id: "e2-10", source: "2", target: "10" },
];

type splitterProps = {
    splitter: string;
};

export const Diagram = ({ splitter }: splitterProps) => {
    let initialNodes;
    let initialEdges;

    console.log(splitter);

    if (splitter == "1") {
        initialNodes = splitter1Nodes;
        initialEdges = splitter1Edges;
    } else if (splitter == "2") {
        initialNodes = splitter2Nodes;
        initialEdges = splitter2Edges;
    }

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
