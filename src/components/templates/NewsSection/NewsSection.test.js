import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import NewsSection from './NewsSection';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

const mock = new MockAdapter(axios);

const query = `{
    allArticles {
      id
      title
      content
      image {
        url
      }
    }
  }`;

describe('News section', () => {
  afterEach(() => {
    mock.reset(); //resetowanie mock po kazdym tescie
  });

  it('Displays error when the atricle are not loaded', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500); // dla bledu bo 500
    //zeby uzyc axiosa trzeba zainstalowac npm i -D axios-mock-adapter
    renderWithProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  //   it('Displays the atricle where is data', async () => {
  //     mock
  //       .onPost('https://graphql.datocms.com/', { query })
  //       .reply(200, { data: { allArticles: [{ id: 1, title: 'Test', content: 'Test', image: null }] } }); // gdy git
  //     //zeby uzyc axiosa trzeba zainstalowac npm i -D axios-mock-adapter
  //     renderWithProviders(<NewsSection />);
  //     // await screen.findAllByText(/Test/);
  //   });
});
