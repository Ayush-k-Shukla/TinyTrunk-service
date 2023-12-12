import { useState } from 'react';
import LandingInput from '../components/landing-input/index.landing-input';
import Loader from '../components/loader/index.loader';
import CustomSnackbar from '../components/snackbar/index.snackbar';
import LinkTable from '../components/table/index.table';
import { ApiStatus, SnackbarVariant } from '../core/enum';
import { isValidUrl } from '../core/helper';
import { IApiResponse, IShortenedUrl, ISnackBarState } from '../core/interface';
import { getShortenedUrls, saveShortenedUrl } from '../core/local-storage';
import { generateShortLink } from '../datasource/remote';
import styles from './index.module.scss';

const intialSnackBarState: ISnackBarState = {
  message: '',
  open: false,
  variant: SnackbarVariant.WARNING,
};

const MainPage = () => {
  const [url, setUrl] = useState<string>('');
  const [apiResponse, setApiResponse] = useState<IApiResponse<IShortenedUrl>>(
    {}
  );

  const [snackBarState, setSnackBarState] =
    useState<ISnackBarState>(intialSnackBarState);

  // Retrieve the list of shortened URLs later
  const retrievedShortenedUrls = getShortenedUrls();

  const checkIfSameLinkIsPresentInLocalStorage = () => {
    for (const urlObj of retrievedShortenedUrls) {
      if (urlObj.originalUrl === url) {
        return true;
      }
    }
    return false;
  };

  const generateLink = async () => {
    if (!isValidUrl(url)) {
      setSnackBarState({
        message: 'Please provide a valid URL',
        open: true,
        variant: SnackbarVariant.ERROR,
      });
      return;
    }

    if (checkIfSameLinkIsPresentInLocalStorage()) {
      setSnackBarState({
        message: 'Same link is already shortened',
        open: true,
        variant: SnackbarVariant.WARNING,
      });
      return;
    }

    setApiResponse({
      data: null,
      message: null,
      status: ApiStatus.PENDING,
    });

    try {
      const { data } = await generateShortLink(url);

      saveShortenedUrl({
        ...data,
      });
      setUrl('');

      setApiResponse({
        data: data,
        message: null,
        status: ApiStatus.FULLFILLED,
      });

      setSnackBarState({
        message: 'Url shortened successfully',
        open: true,
        variant: SnackbarVariant.SUCCESS,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setSnackBarState({
        message: 'Failed to generate short link',
        open: true,
        variant: SnackbarVariant.ERROR,
      });

      setApiResponse({
        data: null,
        message: err?.message,
        status: ApiStatus.REJECTED,
      });
    }
  };

  return (
    <>
      {apiResponse.status === ApiStatus.PENDING && <Loader />}

      {snackBarState.open && (
        <CustomSnackbar
          message={snackBarState.message}
          open={snackBarState.open}
          variant={snackBarState.variant}
          onClose={() => setSnackBarState(intialSnackBarState)}
        />
      )}

      <div className={styles.mainPageWrapper}>
        <LandingInput
          url={url}
          setUrl={setUrl}
          generateShortUrl={generateLink}
        />

        <div className={styles.linkTable}>
          <LinkTable data={retrievedShortenedUrls} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
