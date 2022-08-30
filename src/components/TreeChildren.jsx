import { challengeData } from "../data/challengeData.js";
import TreeNode from "./TreeNode.jsx";

const TreeChildren = ({ data }) => {
  if (!data) return null;
  return (
    <div className="tree-children">
      <ul>
        {data.map(childrenId => {
          const children = challengeData[childrenId];
          return (
            <li>
              <TreeNode data={children} />
              {children.children.length > 0 && <TreeChildren data={children.children} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TreeChildren;
