import { Backdrop } from '@mui/material';
import styles from './index.module.scss';

const Loader = () => {
  return (
    <div className={styles.mainLoader}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <div className={styles.loader}></div>
      </Backdrop>
    </div>
  );
};

export default Loader;
