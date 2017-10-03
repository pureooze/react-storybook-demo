import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import App from '../App';
import Comments from '../Comments/Comments';

var comments = [
  {title: 'My Title', comment: 'This is a comment'},
  {title: 'My Second Title', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  {title: 'My Final Title', comment: 'This is the final comment'}
]

storiesOf('App', module)
  .add('No comments', () => <App />)
  .add('Some comments', () => <App comments={comments}/>);

storiesOf('Comments', module)
  .add('No comments', () => <Comments/>)
  .add('Some comments', () => <Comments comments={comments}/>);