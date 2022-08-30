import { challengeData } from "../data/challengeData.js";
import TreeNode from "./TreeNode.jsx";
import TreeChildren from "./TreeChildren.jsx";

const Tree = () => {
  const root = Object.values(challengeData)[0];
  return (
    <div className="tree">
      <TreeNode data={root} />
      <TreeChildren data={root.children} />
    </div>
  );
};

export default Tree;
