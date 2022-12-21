import axios from 'axios';
import * as rax from 'retry-axios';

rax.attach();

export default function fetch(options: any) {
  return new Promise((resolve, reject) => {
    axios({
      ...options,
      raxConfig: {
        // Retry 3 times on requests that return a response (500, etc) before giving up.  Defaults to 3.
        retry: 3,
        // HTTP methods to automatically retry.  Defaults to:
        // ['GET', 'HEAD', 'OPTIONS', 'DELETE', 'PUT']
        httpMethodsToRetry: [
          'GET',
          'HEAD',
          'OPTIONS',
          'DELETE',
          'PUT',
          'POST '
        ],
        // The response status codes to retry.  Supports a double
        // array with a list of ranges.  Defaults to:
        // [[100, 199], [429, 429], [500, 599]]
        statusCodesToRetry: [[500, 599]],
        onRetryAttempt: (err: any) => {
          const cfg = rax.getConfig(err);
          console.log(`Retry attempt #${cfg?.currentRetryAttempt}`);
        }
      }
    })
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: any) => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.'
        };

        if (typeof err.response === 'undefined') reject(defaultError);
        else if (typeof err.response.data === 'undefined') reject(defaultError);
        else reject(err.response.data);
      });
  });
}
