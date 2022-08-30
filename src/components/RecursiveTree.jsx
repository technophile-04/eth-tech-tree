import React, { createRef, useRef } from "react";
import TreeNode from "./TreeNode";
import TreeNodeChildren from "./TreeNodeChildren";
import Xarrow from "react-xarrows";

const RecursiveTree = ({ child, childRef }) => {
  const childrenRefs = useRef([]);
  const newParentRef = useRef();

  childrenRefs.current = child.children.map((_, i) => childrenRefs.current[i] ?? createRef());

  return (
    <li ref={childRef}>
      <TreeNode data={child} nodeRef={newParentRef} id={child.label} />
      {child.children.length > 0 && <TreeNodeChildren data={child.children} childrenRefs={childrenRefs} />}
      {child.children.map((childrenOfChildName, i) => (
        <Xarrow start={child.label} end={childrenRefs.current[i]} key={`${childrenOfChildName}-${i}`} />
      ))}
    </li>
  );
};

export default RecursiveTree;
