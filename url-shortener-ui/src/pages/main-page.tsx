import { useState } from 'react';
import LandingInput from '../components/landing-input/index.landing-input';
import LinkTable from '../components/table/index.table';
import { getShortenedUrls, saveShortenedUrl } from '../core/local-storage';
import styles from './index.module.scss';

const MainPage = () => {
  const [url, setUrl] = useState<string>('');

  console.log(url);

  const generateLink = () => {
    const shortUrl = url + 'short';

    saveShortenedUrl({
      shortenedUrl: shortUrl,
      originalUrl: url,
      clicks: 5,
      createdAt: '2023-10-20T09:04:00.000+00:00',
    });
    setUrl('');
  };

  // Retrieve the list of shortened URLs later
  const retrievedShortenedUrls = getShortenedUrls();

  return (
    <div className={styles.mainPageWrapper}>
      <LandingInput url={url} setUrl={setUrl} generateShortUrl={generateLink} />

      <div className={styles.linkTable}>
        <LinkTable data={retrievedShortenedUrls} />
      </div>
    </div>
  );
};

export default MainPage;
