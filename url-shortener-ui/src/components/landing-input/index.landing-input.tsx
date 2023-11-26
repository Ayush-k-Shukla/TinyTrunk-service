import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const LandingInput = () => {
  return (
    <div>
      <AppBar position='sticky' color='primary'>
        <Container maxWidth='xl'>
          <Toolbar>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='#app-bar-with-responsive-menu'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                background:
                  'radial-gradient(12441.24% 97.1% at 5.56% 79.01%, #EB568E 0%, #144EE3 100%)',
              }}
            >
              LOGO
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default LandingInput;
