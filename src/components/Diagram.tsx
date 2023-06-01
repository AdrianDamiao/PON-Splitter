import ReactFlow from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
    {
        id: "1",
        position: { x: 0, y: 0 },
        data: { label: "1" },
        style: { width: 18, height: 10 },
    },
    {
        id: "2",
        position: { x: 100, y: 0 },
        data: { label: "2" },
        style: { width: 18, height: 10 },
    },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
type splitterProps = {
    splitter: string;
};

export const Diagram = ({ splitter }: splitterProps) => {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <ReactFlow nodes={initialNodes} edges={initialEdges} />
        </div>
    );
};
