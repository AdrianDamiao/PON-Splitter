import ReactFlow, { Controls, Panel } from "reactflow";

import "reactflow/dist/style.css";

import { splitterNodes, splitterEdges } from "../utils/SplitterConst";

type splitterProps = {
    splitter: string;
};

export const Diagram = ({ splitter }: splitterProps) => {
    let initialNodes;
    let initialEdges;

    if (splitter == "0") {
        initialNodes = splitterNodes[0];
        initialEdges = splitterEdges[0];
    } else if (splitter == "1") {
        initialNodes = splitterNodes[1];
        initialEdges = splitterEdges[1];
    } else if (splitter == "2") {
        initialNodes = splitterNodes[2];
        initialEdges = splitterEdges[2];
    } else if (splitter == "3") {
        initialNodes = splitterNodes[3];
        initialEdges = splitterEdges[3];
    } else if (splitter == "4") {
        initialNodes = splitterNodes[4];
        initialEdges = splitterEdges[4];
    } else if (splitter == "5") {
        initialNodes = splitterNodes[5];
        initialEdges = splitterEdges[5];
    }

    return (
        <div
            className="border w-fit rounded-xl"
            style={{ width: "100%", height: "40vh" }}
        >
            <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
                <Controls />
                <Panel position="top-left">
                    <h5 className="text-left mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                        Topologia PON
                    </h5>
                </Panel>
            </ReactFlow>
        </div>
    );
};
