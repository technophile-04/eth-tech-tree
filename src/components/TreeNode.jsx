import React from "react";
import styled from "styled-components";
import { useModal } from "../context/ModalContext";

const StyledNode = styled.div`
  border: 1px solid;
  padding: 20px;
  max-width: 200px;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

const TreeNode = React.forwardRef(({ data, id }, ref) => {
  const { showModal } = useModal();
  return (
    <StyledNode id={id} ref={ref} onClick={() => showModal(data)}>
      <p>{data.label}</p>
    </StyledNode>
  );
});

export default TreeNode;
