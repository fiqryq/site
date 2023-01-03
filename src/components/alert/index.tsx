import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';

const Warning = () => {
  return (
    <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 pt-4 dark:bg-yellow-500">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon
            className="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700 dark:text-yellow-100">
            This site under development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Warning;
