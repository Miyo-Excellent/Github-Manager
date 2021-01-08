import React, { useEffect } from 'react';
import {
  IconButton,
  ListItemSecondaryAction,
  ListItemText,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
} from '@material-ui/core';
import { Folder as FolderIcon, Delete as DeleteIcon } from '@material-ui/icons';

import { rangeElement } from 'utils';
import { repositories } from 'redux/actions';
import { PageContainer } from 'styled';
import { useDispatch, useSelector } from 'react-redux';

export default () => {
  const repos = useSelector(state => state?.repositories?.data || []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(repositories.getUserRepos('Miyo-Excellent'));
  }, []);

  return (
    <PageContainer component="section">
      <List dense>
        {repos.map(({ name = '', description = '' }, repoKey = 0) => (
          <ListItem key={repoKey.toString()}>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText primary={name} secondary={description} />

            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </PageContainer>
  );
};
