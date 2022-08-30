import { createRef, useRef } from "react";
import { challengeData } from "../data/challengeData.js";
import TreeNode from "./TreeNode.jsx";
import TreeNodeChildren from "./TreeNodeChildren.jsx";
import Xarrow from "react-xarrows";

const Tree = () => {
  const root = Object.values(challengeData)[0];

  const childrenRefs = useRef([]);

  const rootRef = useRef();

  // Creating refs for direct child nodes(for react-xarrows)
  childrenRefs.current = root.children.map((_, i) => childrenRefs.current[i] ?? createRef());

  return (
    <div className="tree">
      <TreeNode data={root} id={root.label} nodeRef={rootRef} />
      <TreeNodeChildren data={root.children} childrenRefs={childrenRefs} />
      {/* TODO : Need to make sure `key` is unique */}
      {root.children.map((_, i) => (
        <Xarrow start={root.label} end={childrenRefs.current[i]} key={`${root.label}-${i}`} />
      ))}
    </div>
  );
};

export default Tree;
