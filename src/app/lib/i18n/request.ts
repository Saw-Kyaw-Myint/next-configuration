import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  // Static for now — can be dynamic later
  const locale = 'ja';

  return {
    locale,
    messages: (await import(`./locale/${locale}.json`)).default
  };
});
