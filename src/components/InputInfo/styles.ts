import styled from "styled-components";

export const Container = styled.div`
  width: 40.625rem;
  /* width: 650px; */
  height: 22.0625rem;

  background: var(--primary);

  border: 1px solid var(--box-border);
  border-radius: 3px;

  padding: 1.5rem 1.5rem 3rem;
  color: var(--primary-text);

  margin: 2.5rem 1.5rem;

  .image-fake {
    height: 88px;
    width: 88px;

    border: 1px solid #4b4b4b;
    border-radius: 36px;

    padding: 2rem;
    margin: 0 auto;
  }

  form {
    display: flex;
    flex-direction: column;

    margin: 1rem auto;

    > input {
      width: 100%;
      min-height: 2.5rem;

      color: #fff;

      padding: 0.75rem 1rem;

      background-color: var(--input);
      border-color: var(--input);
      border-radius: 0.5rem;

      transition: all 250ms ease-in-out;

      &::placeholder {
        font-size: 0.875rem;
        color: var(--primary-text);
      }

      &:focus {
        border: 1px solid var(--primary-text);
        outline: var(--primary-text);
      }
    }

    input + input {
      margin: 0.5rem 0 2rem 0;

      height: 5rem;

      padding-bottom: 2.5rem;
    }

    .btn-container {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      button:first-child {
        margin-right: 1.5rem;

        background-color: transparent;
        border: none;

        color: var(--primary-button);
        text-decoration: underline;
      }
    }
  }
`;

interface PostButtonProps {
  isFilled: boolean;
}

export const PostButton = styled.button<PostButtonProps>`
  padding: 0.75rem 1.5rem;

  color: var(--secondary-button);
  color: ${(props) => (props.isFilled ? "#313131" : "#fff")};
  background-color: ${(props) => (props.isFilled ? "#5f5f5f" : "#71bb00")};

  border-color: ${(props) => (props.isFilled ? "#5f5f5f" : "#71bb00")};

  border-radius: 8px;

  transition: all 350ms ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }
`;
