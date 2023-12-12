import CloseIcon from '@mui/icons-material/Close';
import { Alert, IconButton, Snackbar } from '@mui/material';
import React from 'react';
import { SnackbarVariant } from '../../core/enum';
import styles from './index.module.scss';

interface ISnackbarProps {
  message: string;
  open: boolean;
  variant: SnackbarVariant;
  onClose: () => void;
}

const getSnackBarVariant = (
  variant: SnackbarVariant
): 'error' | 'success' | 'info' | 'warning' => {
  return variant === SnackbarVariant.ERROR
    ? 'error'
    : variant === SnackbarVariant.WARNING
    ? 'warning'
    : variant === SnackbarVariant.INFO
    ? 'info'
    : 'success';
};

const CustomSnackbar = ({
  message,
  open,
  onClose,
  variant,
}: ISnackbarProps) => {
  const action = (
    <React.Fragment>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={onClose}
      >
        <CloseIcon fontSize='small' />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className={styles.mainLoader}>
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        sx={{ zIndex: 1000 }}
        open={open}
        onClose={onClose}
        action={action}
      >
        <Alert
          elevation={6}
          variant='filled'
          severity={getSnackBarVariant(variant)}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomSnackbar;
