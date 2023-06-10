import { exit } from 'process';
import { publish } from 'gh-pages';

publish('dist', (err) => {
  if (err) {
    exit(1);
  } else {
    exit(0);
  }
});
