import { createRef, useRef } from "react";
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

  /* Refs for react-xarrows */
  const childrenRefs = useRef([]);
  const rootRef = useRef();

  // Creating refs for direct child nodes(for react-xarrows)
  childrenRefs.current = root.children.map((_, i) => childrenRefs.current[i] ?? createRef());

  return (
    <ThemeProvider theme={theme}>
      <TreeWrapper>
        <TreeNode data={root} id={root.label} ref={rootRef} />
        <TreeNodeChildren data={root.children} childrenRefs={childrenRefs} />
        {/* TODO : Need to make sure `key` is unique */}
        {root.children.map((_, i) => (
          <Xarrow start={rootRef} end={childrenRefs.current[i]} key={`${root.label}-${i}`} />
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
