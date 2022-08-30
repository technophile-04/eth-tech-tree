import { challengeData } from "../data/challengeData.js";
import TreeNode from "./TreeNode.jsx";
import TreeNodeChildren from "./TreeNodeChildren.jsx";

const Tree = () => {
  const root = Object.values(challengeData)[0];
  return (
    <div className="tree">
      <TreeNode data={root} />
      <TreeNodeChildren data={root.children} />
    </div>
  );
};

export default Tree;
