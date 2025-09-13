import styled from "styled-components";

export const MyNotesStyle = styled.div`
  .accordion{
  margin: 5px;
  }
  .accordion-header{
    border-bottom: 1px solid rgb(222, 226, 230);
  }
  .accordion-button:not(.collapsed) {
    color: var(--bs-accordion-active-color);
    background-color:#fff; 
    box-shadow: none;
    }
  }
    .accordion-button:focus {
        box-shadow: none;
    }
`;
