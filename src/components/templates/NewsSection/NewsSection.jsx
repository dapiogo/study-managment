import React, { useState, useEffect } from 'react';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import Button from 'components/atoms/Button/Button';
import axios from 'axios';

const NewsSection = () => {
  const [atricles, setAtricles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `{
            allArticles {
              id
              title
              content
              image {
                url
              }
            }
          }`,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        const {
          data: { data },
        } = res;

        setAtricles(data.allArticles);
      })
      .catch(() => setError('Sorry we coulndt load atricles for you'));
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>Need feed section</NewsSectionHeader>
      {atricles.length > 0 ? (
        atricles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt={title} /> : null}
            </ContentWrapper>
            <Button isBig>Click me</Button>
          </ArticleWrapper>
        ))
      ) : (
        <TitleWrapper>{error ? error : 'Loading'}</TitleWrapper>
      )}
    </Wrapper>
  );
};

export default NewsSection;
