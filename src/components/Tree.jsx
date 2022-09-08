import { createRef, useRef, useState } from "react";
import { challengeData } from "../data/challengeData.js";
import TreeNode from "./TreeNode.jsx";
import TreeNodeChildren from "./TreeNodeChildren.jsx";
import Xarrow from "react-xarrows";
import styled, { ThemeProvider } from "styled-components";

const TreeWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.theme.direction === "vertical" ? "column" : "row")};
  justify-content: ${props => props.theme.direction === "horizontal" && "center"};
  align-items: ${props => props.theme.direction === "horizontal" && "center"};
`;

const Tree = ({ theme }) => {
  const root = Object.values(challengeData)[0];

  const [showChildren, setShowChildren] = useState(false);

  /* Refs for react-xarrows */
  const childrenRefs = useRef([]);
  const rootRef = useRef();

  // Creating refs for direct child nodes(for react-xarrows)
  childrenRefs.current = root.children.map((_, i) => childrenRefs.current[i] ?? createRef());

  return (
    <ThemeProvider theme={theme}>
      <TreeWrapper>
        <TreeNode data={root} id={root.label} ref={rootRef} setShowChildren={setShowChildren} />
        <TreeNodeChildren data={root.children} childrenRefs={childrenRefs} />
        {/* TODO : Need to make sure `key` is unique Xarrow component */}
        {root.children.map((_, i) => (
          <Xarrow
            start={rootRef}
            end={childrenRefs.current[i]}
            key={`${root.label}-${i}`}
            showHead={false}
            startAnchor={theme.direction === "horizontal" ? "right" : "bottom"}
            endAnchor={theme.direction === "horizontal" ? "left" : "top"}
            color={"#EBEBE4"}
            animateDrawing={false}
          />
        ))}
        {/* Rendering this on top of previous to show the path-filling animation can't figure out other way to do it */}
        {showChildren &&
          root.children.map((_, i) => (
            <Xarrow
              start={rootRef}
              end={childrenRefs.current[i]}
              key={`${root.label}-${i}`}
              showHead={false}
              startAnchor={theme.direction === "horizontal" ? "right" : "bottom"}
              endAnchor={theme.direction === "horizontal" ? "left" : "top"}
              color={"green"}
              animateDrawing={true}
            />
          ))}
      </TreeWrapper>
    </ThemeProvider>
  );
};

Tree.defaultProps = {
  theme: {
    direction: "vertical",
  },
};

export default Tree;
