import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    padding: 0;
    margin: ${(props) => props.margin || '0 auto'};
    width: ${(props) => props.width || '700px'};
  }
`;

export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0 20px; */
  padding: ${(props) => props.padding || '0 20px'};
  margin: ${(props) => props.margin || '0 auto'};
  width: ${(props) => props.width || '100%'};

  @media (width >= ${({ theme }) => theme.media.mediaMD.width}) {
    padding: 0 30px;
  }
  @media (width >= ${({ theme }) => theme.media.mediaLG.width}) {
    padding: 0;
    width: 1100px;
  }
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  margin: ${(props) => props.margin || '0 auto'};
  width: ${(props) => props.width || '100%'};

  @media (width >= ${({ theme }) => theme.media.mediaMD.width}) {
    padding: 0 30px;
  }
  @media (width >= ${({ theme }) => theme.media.mediaLG.width}) {
    padding: 0;
    width: 1100px;
  }
`;

export const SectionLanding = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 10px;
  border-top: 1px solid ${({ theme }) => theme.color.border};
`;

export const TitleSection = styled.h2`
  text-align: center;
  margin: 32px 0px 22px 0px;
  font-size: 26px;
  font-family: ${({ theme }) => theme.font.titleFont};

  @media (width >= ${({ theme }) => theme.media.mediaMD.width}) {
    margin: 40px 0px 26px 0px;
    font-size: 30px;
  }
  @media (width >= ${({ theme }) => theme.media.mediaLG.width}) {
    margin: 46px 0px 30px 0px;
    font-size: 32px;
  }
`;
