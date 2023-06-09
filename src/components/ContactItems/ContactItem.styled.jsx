import styled from "styled-components";

export const ContactLi = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
padding: 8px;
max-width: 344px;
border: 1px solid #27ae60;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`
export const ContactBtn = styled.button`
width: 60px;
  padding: 4px;
  background-color: #27ae60;
  color: #fff;
  outline-color: #27ae60;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease;

  :hover,
  :focus {
  background-color: #2ecc71;
}
`