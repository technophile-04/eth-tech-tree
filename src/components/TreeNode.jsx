const TreeNode = ({ data, id, nodeRef }) => {
  return (
    <div className="tree-node" id={id} ref={nodeRef}>
      <p>{data.label}</p>
    </div>
  );
};

export default TreeNode;
