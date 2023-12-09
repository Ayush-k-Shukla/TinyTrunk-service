import { useState } from 'react';
import LandingInput from '../components/landing-input/index.landing-input';
import Loader from '../components/loader/index.loader';
import LinkTable from '../components/table/index.table';
import { ApiStatus } from '../core/enum';
import { IApiResponse, IShortenedUrl } from '../core/interface';
import { getShortenedUrls, saveShortenedUrl } from '../core/local-storage';
import { generateShortLink } from '../datasource/remote';
import styles from './index.module.scss';

const MainPage = () => {
  const [url, setUrl] = useState<string>('');
  const [apiResponse, setApiResponse] = useState<IApiResponse<IShortenedUrl>>(
    {}
  );

  console.log(url);

  const generateLink = async () => {
    const shortUrl = url + 'short';

    setApiResponse({
      data: null,
      message: null,
      status: ApiStatus.PENDING,
    });

    try {
      const { data } = await generateShortLink(shortUrl);

      saveShortenedUrl({
        ...data,
      });
      setUrl('');

      console.log({ data: data });
      setApiResponse({
        data: data,
        message: null,
        status: ApiStatus.FULLFILLED,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log({ err });
      setApiResponse({
        data: null,
        message: err?.message,
        status: ApiStatus.REJECTED,
      });
    }
  };

  // Retrieve the list of shortened URLs later
  const retrievedShortenedUrls = getShortenedUrls();

  return (
    <>
      {apiResponse.status === ApiStatus.PENDING && <Loader />}

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
