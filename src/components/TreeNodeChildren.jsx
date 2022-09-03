import styled from "styled-components";
import { challengeData } from "../data/challengeData.js";
import RecursiveTree from "./RecursiveTree.jsx";

const ChildrenWrapper = styled.div`
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }
`;

const TreeNodeChildren = ({ data, childrenRefs }) => {
  if (!data) return null;
  return (
    <ChildrenWrapper>
      <ul>
        {data.map((childrenId, i) => {
          const children = challengeData[childrenId];
          return <RecursiveTree child={children} ref={childrenRefs.current[i]} key={`${children.label}-${i}`} />;
        })}
      </ul>
    </ChildrenWrapper>
  );
};

export default TreeNodeChildren;
