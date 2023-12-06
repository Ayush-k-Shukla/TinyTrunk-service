import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import styles from './index.module.scss';

const LandingInput = ({
  url,
  setUrl,
  generateShortUrl,
}: {
  url: string;
  setUrl: (e: string) => void;
  generateShortUrl: () => void;
}) => {
  return (
    <div className={styles.inputWrapper}>
      <Typography
        className={styles.bigText}
        fontSize={60}
        fontWeight={800}
        fontFamily={'Inter'}
      >
        Shorten Your Loooong Links :)
      </Typography>
      <Typography className={styles.smallText} fontFamily={'Inter'}>
        Url-shortener is an efficient and easy-to-use URL shortening service
        that streamlines your online experience.
      </Typography>

      <div className={styles.linkInput}>
        <TextField
          placeholder='Enter the link here...'
          InputProps={{
            className: styles.input,
            endAdornment: (
              <InputAdornment position='end'>
                <Button
                  color='primary'
                  variant='contained'
                  className={styles.btn}
                  onClick={generateShortUrl}
                  disabled={!url?.length}
                >
                  Short now
                </Button>
              </InputAdornment>
            ),
            startAdornment: (
              <InputAdornment position='start'>
                <InsertLinkOutlinedIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      {/* <Loader /> */}
    </div>
  );
};

export default LandingInput;
