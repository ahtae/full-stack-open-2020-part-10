import React from 'react';
import RepositoryList from '../../components/RepositoryListContainer';
import { roundValue } from '../../components/RepositoryStatistic';
import { render } from '@testing-library/react-native';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { debug, getAllByTestId } = render(
        <RepositoryList repositories={repositories} />
      );
      const fullNames = getAllByTestId('fullName');
      const descriptions = getAllByTestId('description');
      const languages = getAllByTestId('language');
      const forksCounts = getAllByTestId('forksCount');
      const stargazersCounts = getAllByTestId('stargazersCount');
      const ratingAverages = getAllByTestId('ratingAverage');
      const reviewCounts = getAllByTestId('reviewCount');
      const ownerAvatarUrls = getAllByTestId('ownerAvatarUrl');

      debug();

      expect(fullNames[0]).toHaveTextContent('jaredpalmer/formik');
      expect(fullNames[1]).toHaveTextContent('async-library/react-async');

      expect(descriptions[0]).toHaveTextContent(
        'Build forms in React, without the tears'
      );
      expect(descriptions[1]).toHaveTextContent(
        'Flexible promise-based React data loader'
      );

      expect(languages[0]).toHaveTextContent('TypeScript');
      expect(languages[1]).toHaveTextContent('JavaScript');

      expect(forksCounts[0]).toHaveTextContent(roundValue('1619'));
      expect(forksCounts[1]).toHaveTextContent(roundValue('69'));

      expect(stargazersCounts[0]).toHaveTextContent(roundValue('21856'));
      expect(stargazersCounts[1]).toHaveTextContent(roundValue('1760'));

      expect(ratingAverages[0]).toHaveTextContent('88');
      expect(ratingAverages[1]).toHaveTextContent('72');

      expect(reviewCounts[0]).toHaveTextContent('3');
      expect(reviewCounts[1]).toHaveTextContent('3');

      expect(ownerAvatarUrls[0]._fiber.stateNode.props.source.uri).toBe(
        'https://avatars2.githubusercontent.com/u/4060187?v=4'
      );
      expect(ownerAvatarUrls[1]._fiber.stateNode.props.source.uri).toBe(
        'https://avatars1.githubusercontent.com/u/54310907?v=4'
      );
    });
  });
});
