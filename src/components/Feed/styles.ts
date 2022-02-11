import styled from "styled-components";

export const Title = styled.span`
  width: 40.625rem;

  color: var(--feed-color);

  margin-bottom: 0.5rem;
`;

export const Container = styled.div`
  width: 40.625rem;
  /* width: 650px; */
  height: auto;

  display: flex;
  flex-direction: column;

  border: 1px solid var(--box-border);
  background: var(--primary);

  border-radius: 3px;

  padding: 0 1.25rem 2.5rem;
  color: var(--primary-text);

  margin-bottom: 1rem;

  .close-button-container {
    display: flex;
    justify-content: flex-end;

    width: 100%;

    margin: 1rem 0 2rem 0;

    > svg {
      color: #cb5522;
      height: 1.5625rem;
      width: 1.5625rem;

      cursor: pointer;
    }
  }

  .content-wrapper {
    display: flex;

    .image-container {
      height: 88px;
      width: 88px;

      border: 1px solid #4b4b4b;
      border-radius: 36px;

      padding: 2rem;
      margin-right: 2rem;
      margin-left: 0.75rem;
    }

    .text-section {
      font-size: 1rem;
      text-align: left;

      line-height: 1.25;

      padding-right: 2rem;

      > p {
        margin-bottom: 1.5rem;
      }

      .send-by {
        display: flex;
        flex-direction: column;

        span:first-child {
          font-size: 0.75rem;
          font-weight: 500;

          margin-bottom: 0.25rem;

          color: var(--primary-button);
        }

        span:last-child {
          color: var(--feed-color);
        }
      }
    }
  }
`;
