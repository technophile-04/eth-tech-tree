import { challengeData } from "../data/challengeData.js";
import RecursiveTree from "./RecursiveTree.jsx";

const TreeNodeChildren = ({ data, childrenRefs }) => {
  if (!data) return null;
  return (
    <div className="tree-children">
      <ul>
        {data.map((childrenId, i) => {
          const children = challengeData[childrenId];
          return <RecursiveTree child={children} childRef={childrenRefs.current[i]} key={`${children.label}-${i}`} />;
        })}
      </ul>
    </div>
  );
};

export default TreeNodeChildren;
