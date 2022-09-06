import React from "react";
import styled from "styled-components";
import { useModal } from "../context/ModalContext";

const StyledNode = styled.div`
  border: 1px solid;
  padding: 20px;
  max-width: 200px;
  margin: ${props => (props.theme.direction === "vertical" ? "0 auto 5rem auto" : "0 5rem 0 0")};
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
