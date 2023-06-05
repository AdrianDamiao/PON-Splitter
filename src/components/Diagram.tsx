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

const splitter3Nodes = [
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
        data: { label: "Splitter 1:16" },
        sourcePosition: "right",
        targetPosition: "left",
    },
    {
        id: "3",
        position: { x: 500, y: -400 },
        data: { label: "ONT 1" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "4",
        position: { x: 500, y: -350 },
        data: { label: "ONT 2" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "5",
        position: { x: 500, y: -300 },
        data: { label: "ONT 3" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "6",
        position: { x: 500, y: -250 },
        data: { label: "ONT 4" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "7",
        position: { x: 500, y: -200 },
        data: { label: "ONT 5" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "8",
        position: { x: 500, y: -150 },
        data: { label: "ONT 6" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "9",
        position: { x: 500, y: -100 },
        data: { label: "ONT 7" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "10",
        position: { x: 500, y: -50 },
        data: { label: "ONT 8" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "11",
        position: { x: 500, y: 0 },
        data: { label: "ONT 9" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "12",
        position: { x: 500, y: 50 },
        data: { label: "ONT 10" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "13",
        position: { x: 500, y: 100 },
        data: { label: "ONT 11" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "14",
        position: { x: 500, y: 150 },
        data: { label: "ONT 12" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "15",
        position: { x: 500, y: 200 },
        data: { label: "ONT 13" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "16",
        position: { x: 500, y: 250 },
        data: { label: "ONT 14" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "17",
        position: { x: 500, y: 300 },
        data: { label: "ONT 15" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "18",
        position: { x: 500, y: 350 },
        data: { label: "ONT 16" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
];

const splitter3Edges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e2-4", source: "2", target: "4" },
    { id: "e2-5", source: "2", target: "5" },
    { id: "e2-6", source: "2", target: "6" },
    { id: "e2-7", source: "2", target: "7" },
    { id: "e2-8", source: "2", target: "8" },
    { id: "e2-9", source: "2", target: "9" },
    { id: "e2-10", source: "2", target: "10" },
    { id: "e2-11", source: "2", target: "11" },
    { id: "e2-12", source: "2", target: "12" },
    { id: "e2-13", source: "2", target: "13" },
    { id: "e2-14", source: "2", target: "14" },
    { id: "e2-15", source: "2", target: "15" },
    { id: "e2-16", source: "2", target: "16" },
    { id: "e2-17", source: "2", target: "17" },
    { id: "e2-18", source: "2", target: "18" },
];

const splitter4Nodes = [
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
        data: { label: "Splitter 1:32" },
        sourcePosition: "right",
        targetPosition: "left",
    },
    {
        id: "3",
        position: { x: 500, y: -800 },
        data: { label: "ONT 1" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "4",
        position: { x: 500, y: -750 },
        data: { label: "ONT 2" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "5",
        position: { x: 500, y: -700 },
        data: { label: "ONT 3" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "6",
        position: { x: 500, y: -650 },
        data: { label: "ONT 4" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "7",
        position: { x: 500, y: -600 },
        data: { label: "ONT 5" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "8",
        position: { x: 500, y: -550 },
        data: { label: "ONT 6" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "9",
        position: { x: 500, y: -500 },
        data: { label: "ONT 7" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "10",
        position: { x: 500, y: -450 },
        data: { label: "ONT 8" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "11",
        position: { x: 500, y: -400 },
        data: { label: "ONT 9" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "12",
        position: { x: 500, y: -350 },
        data: { label: "ONT 10" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "13",
        position: { x: 500, y: -300 },
        data: { label: "ONT 11" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "14",
        position: { x: 500, y: -250 },
        data: { label: "ONT 12" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "15",
        position: { x: 500, y: -200 },
        data: { label: "ONT 13" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "16",
        position: { x: 500, y: -150 },
        data: { label: "ONT 14" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "17",
        position: { x: 500, y: -100 },
        data: { label: "ONT 15" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "18",
        position: { x: 500, y: -50 },
        data: { label: "ONT 16" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "19",
        position: { x: 500, y: 0 },
        data: { label: "ONT 17" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "20",
        position: { x: 500, y: 50 },
        data: { label: "ONT 18" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "21",
        position: { x: 500, y: 100 },
        data: { label: "ONT 19" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "22",
        position: { x: 500, y: 150 },
        data: { label: "ONT 20" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "23",
        position: { x: 500, y: 200 },
        data: { label: "ONT 21" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "24",
        position: { x: 500, y: 250 },
        data: { label: "ONT 22" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "25",
        position: { x: 500, y: 300 },
        data: { label: "ONT 23" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "26",
        position: { x: 500, y: 350 },
        data: { label: "ONT 24" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "27",
        position: { x: 500, y: 400 },
        data: { label: "ONT 25" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "28",
        position: { x: 500, y: 450 },
        data: { label: "ONT 26" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "29",
        position: { x: 500, y: 500 },
        data: { label: "ONT 27" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "30",
        position: { x: 500, y: 550 },
        data: { label: "ONT 28" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "31",
        position: { x: 500, y: 600 },
        data: { label: "ONT 29" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "32",
        position: { x: 500, y: 650 },
        data: { label: "ONT 30" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },

    {
        id: "33",
        position: { x: 500, y: 700 },
        data: { label: "ONT 31" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
    {
        id: "34",
        position: { x: 500, y: 750 },
        data: { label: "ONT 32" },
        sourcePosition: "right",
        type: "output",
        targetPosition: "left",
    },
];

const splitter4Edges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e2-4", source: "2", target: "4" },
    { id: "e2-5", source: "2", target: "5" },
    { id: "e2-6", source: "2", target: "6" },
    { id: "e2-7", source: "2", target: "7" },
    { id: "e2-8", source: "2", target: "8" },
    { id: "e2-9", source: "2", target: "9" },
    { id: "e2-10", source: "2", target: "10" },
    { id: "e2-11", source: "2", target: "11" },
    { id: "e2-12", source: "2", target: "12" },
    { id: "e2-13", source: "2", target: "13" },
    { id: "e2-14", source: "2", target: "14" },
    { id: "e2-15", source: "2", target: "15" },
    { id: "e2-16", source: "2", target: "16" },
    { id: "e2-17", source: "2", target: "17" },
    { id: "e2-18", source: "2", target: "18" },
    { id: "e2-19", source: "2", target: "19" },
    { id: "e2-20", source: "2", target: "20" },
    { id: "e2-21", source: "2", target: "21" },
    { id: "e2-22", source: "2", target: "22" },
    { id: "e2-23", source: "2", target: "23" },
    { id: "e2-24", source: "2", target: "24" },
    { id: "e2-25", source: "2", target: "25" },
    { id: "e2-26", source: "2", target: "26" },
    { id: "e2-27", source: "2", target: "27" },
    { id: "e2-28", source: "2", target: "28" },
    { id: "e2-29", source: "2", target: "29" },
    { id: "e2-30", source: "2", target: "30" },
    { id: "e2-31", source: "2", target: "31" },
    { id: "e2-32", source: "2", target: "32" },
    { id: "e2-33", source: "2", target: "33" },
    { id: "e2-34", source: "2", target: "34" },
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
    } else if (splitter == "3") {
        initialNodes = splitter3Nodes;
        initialEdges = splitter3Edges;
    } else if (splitter == "4") {
        initialNodes = splitter4Nodes;
        initialEdges = splitter4Edges;
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
