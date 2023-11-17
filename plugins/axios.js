export default function ({$axios, app}) {
  $axios.onError(error => {
    return Promise.reject(error);
  });

  $axios.onRequest(config => {
    config.headers.common['Accept-Language'] = app.i18n.locale;
  });
}
