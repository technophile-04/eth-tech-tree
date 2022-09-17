import styled from "styled-components";
import RecursiveTree from "./RecursiveTree.jsx";

const ChildrenWrapper = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-direction: ${props => (props.theme.direction === "vertical" ? "row" : "column")};
    justify-content: ${props => props.theme.direction === "horizontal" && "center"};
    align-items: ${props => props.theme.direction === "horizontal" && "baseline"};
    gap: 2rem;
    margin: 0;
    padding: 0;
  }
`;

const TreeNodeChildren = ({ data, childrenRefs, challengeData }) => {
  if (!data) return null;
  return (
    <ChildrenWrapper>
      <ul>
        {data.map((childrenId, i) => {
          const children = challengeData[childrenId];
          return (
            <RecursiveTree
              child={children}
              ref={childrenRefs.current[i]}
              key={`${children.label}-${i}`}
              challengeData={challengeData}
            />
          );
        })}
      </ul>
    </ChildrenWrapper>
  );
};

export default TreeNodeChildren;
