import React, { createRef, useRef } from "react";
import TreeNode from "./TreeNode";
import TreeNodeChildren from "./TreeNodeChildren";
import Xarrow from "react-xarrows";
import styled from "styled-components";

const StyledList = styled.li`
  display: flex;
  flex-direction: ${props => (props.theme.direction === "vertical" ? "column" : "row")};
  justify-content: ${props => props.theme.direction === "horizontal" && "center"};
  align-items: ${props => props.theme.direction === "horizontal" && "center"};
`;

const RecursiveTree = React.forwardRef(({ child }, ref) => {
  const childrenRefs = useRef([]);
  const newParentRef = useRef();

  childrenRefs.current = child.children.map((_, i) => childrenRefs.current[i] ?? createRef());

  return (
    <StyledList ref={ref}>
      <TreeNode data={child} ref={newParentRef} id={child.label} />
      {child.children.length > 0 && <TreeNodeChildren data={child.children} childrenRefs={childrenRefs} />}
      {child.children.map((childrenOfChildName, i) => (
        <Xarrow start={newParentRef} end={childrenRefs.current[i]} key={`${childrenOfChildName}-${i}`} />
      ))}
    </StyledList>
  );
});

export default RecursiveTree;
