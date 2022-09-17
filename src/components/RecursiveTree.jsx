import React, { createRef, useRef, useState } from "react";
import TreeNode from "./TreeNode";
import TreeNodeChildren from "./TreeNodeChildren";
import Xarrow from "react-xarrows";
import styled, { useTheme } from "styled-components";

const StyledList = styled.li`
  display: flex;
  flex-direction: ${props => (props.theme.direction === "vertical" ? "column" : "row")};
  justify-content: ${props => props.theme.direction === "horizontal" && "center"};
  align-items: ${props => props.theme.direction === "horizontal" && "center"};
`;

const RecursiveTree = React.forwardRef(({ child, challengeData }, ref) => {
  const childrenRefs = useRef([]);
  const newParentRef = useRef();

  const [showChildren, setShowChildren] = useState(false);

  const theme = useTheme();

  childrenRefs.current = child.children.map((_, i) => childrenRefs.current[i] ?? createRef());

  return (
    <StyledList ref={ref}>
      <TreeNode data={child} ref={newParentRef} id={child.label} setShowChildren={setShowChildren} />
      {child.children.length > 0 && (
        <TreeNodeChildren data={child.children} childrenRefs={childrenRefs} challengeData={challengeData} />
      )}
      {child.children.map((childrenOfChildName, i) => (
        <Xarrow
          start={newParentRef}
          end={childrenRefs.current[i]}
          key={`${childrenOfChildName}-${i}`}
          showHead={false}
          startAnchor={theme.direction === "horizontal" ? "right" : "bottom"}
          endAnchor={theme.direction === "horizontal" ? "left" : "top"}
          color="#EBEBE4"
        />
      ))}
      {showChildren &&
        child.children.map((childrenOfChildName, i) => (
          <Xarrow
            start={newParentRef}
            end={childrenRefs.current[i]}
            key={`${childrenOfChildName}-${i}`}
            showHead={false}
            startAnchor={theme.direction === "horizontal" ? "right" : "bottom"}
            endAnchor={theme.direction === "horizontal" ? "left" : "top"}
            color="green"
            animateDrawing={true}
          />
        ))}
    </StyledList>
  );
});

export default RecursiveTree;
