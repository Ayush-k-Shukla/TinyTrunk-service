import { GitHub } from '@mui/icons-material';
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import styles from './index.module.scss';

const Header = () => {
  return (
    <div>
      <AppBar position='sticky' color='primary'>
        <Container maxWidth='xl'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              className={styles.logoText}
              fontSize={30}
              fontFamily={'Inter'}
            >
              TinyUrl
            </Typography>

            <IconButton
              onClick={() => {}}
              target='_blank'
              href='https://github.com/Ayush-k-Shukla/URL-shortener'
            >
              <GitHub fontSize='large' />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
