import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import styles from './index.module.scss';

const Header = () => {
  return (
    <div>
      <AppBar position='sticky' color='primary'>
        <Container maxWidth='xl'>
          <Toolbar>
            <Typography
              variant='h6'
              noWrap
              component='a'
              className={styles.logoText}
            >
              LOGO
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
