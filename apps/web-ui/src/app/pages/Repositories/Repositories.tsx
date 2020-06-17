import React, { useEffect, useMemo, useContext } from 'react';
import { useMyFirstRepositoriesLazyQuery } from '../../../generated/github.graphql';
import { List, ListItem, ListIcon, Box, Button } from '@chakra-ui/core';
import useToken from '../../states/auth/hooks/useToken';

/* eslint-disable-next-line */
export interface RepositoriesPageProps {}

export const Repositories = (props: RepositoriesPageProps) => {
  const { setToken } = useToken();

  const [
    getRepositories,
    { data, loading, error }
  ] = useMyFirstRepositoriesLazyQuery();

  useEffect(() => {
    console.log('get repositories');
    getRepositories();
  }, []);

  const { totalCount, repos } = useMemo(() => {
    if (!data) {
      return {
        totalCount: undefined,
        repos: []
      };
    }
    return {
      totalCount: data.user.repositories.totalCount,
      repos: data.user.repositories.edges.map(repo => ({
        ...repo
      }))
    };
  }, [data]);

  return (
    <>
      <Box
        display={'flex'}
        minH="100vh"
        flexDirection={'column'}
        alignItems="center"
        mr={'0'}
      >
        <List styleType="disc">
          {repos && repos.map(repo => <ListItem>{repo.node.name}</ListItem>)}
        </List>
        <Button
          mt={10}
          alignSelf="bottom"
          onClick={() => {
            setToken('');
          }}
          id="clear_token"
        >
          Clear Token
        </Button>
      </Box>
    </>
  );
};

export default Repositories;
