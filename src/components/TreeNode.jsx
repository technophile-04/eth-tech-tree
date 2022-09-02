import { useModal } from "../context/ModalContext";

const TreeNode = ({ data, id, nodeRef }) => {
  const { showModal } = useModal();
  return (
    <div className="tree-node" id={id} ref={nodeRef} onClick={() => showModal(data)}>
      <p>{data.label}</p>
    </div>
  );
};

export default TreeNode;
