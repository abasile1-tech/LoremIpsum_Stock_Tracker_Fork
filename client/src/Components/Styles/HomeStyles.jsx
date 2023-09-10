import styled from 'styled-components';

export const NewsWrapper = styled.div`
    /* border: 1px solid white; */
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    gap: 2rem;
    margin-top: 5rem;
`;

export const NewsArticle = styled.li`
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.4);
    width: 25%;
    padding-bottom: 20px;
    border-radius: 0 0 25px 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: solid 1px #92cd86;
    background-color: #474747;
`;

export const ArticleWrapper = styled.div`
    display: Flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.5rem;
    background-color: #474747;
    * {
        background-color: #474747;
    }
`;

export const ArticleImage = styled.img`
    width: 100%;
    height: 200px;
    border-bottom: solid 1px #92cd86;
`;

export const DateStyle = styled.div`
    /* border: 1px solid white; */
    display: flex;
    justify-content: flex-end;
    border-radius: 25px;
    padding-right: 1rem;
    background-color: #474747;
`;

export const MoreInfoButton = styled.a`
    padding: 5px 10px;
    width: 30%;
    align-self: center;
    background-color: #c4c4c4;
    border-radius: 25px;
    font-weight: bold;
    text-decoration: none;
    color: #193214;
    &:hover {
        color: whitesmoke;
        background-color: #264b1f;
    }
`;

export const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    margin-bottom: 2.5rem;
    @media all and (max-width: 1400px) and (min-width: 700px) {
        padding: 0;
        margin-bottom: 2.5rem;
    }
`;

export const HeroImg = styled.img`
    width: 500px;
    margin-right: 2rem;
`;

export const HeroRight = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 5px solid #92cd86;
    padding-left: 2rem;
`;

export const HeroTitle = styled.h1`
    font-size: 5rem;
`;
export const HeroTitleSpan = styled.span`
    font-weight: 100;
`;

export const HeroParaSpan = styled.span`
    text-decoration: underline;
`;

export const ArticleSummary = styled.p`
    max-height: 175px;
    font-weight: 200;
    overflow-y: hidden;
    margin: 1rem 0;
`;

export const ArticleTitle = styled.h3`
    max-height: 150px;
    padding-bottom: 1rem;
    border-bottom: 1px solid whitesmoke;
    display: flex;
    align-self: center;
`;
