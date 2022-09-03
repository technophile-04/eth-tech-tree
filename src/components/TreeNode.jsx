import styled from "styled-components";
import { useModal } from "../context/ModalContext";

const StyledNode = styled.div`
  border: 1px solid;
  padding: 20px;
  max-width: 200px;
  margin: 0 auto;
`;

const TreeNode = ({ data, id, nodeRef }) => {
  const { showModal } = useModal();
  return (
    <StyledNode id={id} ref={nodeRef} onClick={() => showModal(data)}>
      <p>{data.label}</p>
    </StyledNode>
  );
};

export default TreeNode;
