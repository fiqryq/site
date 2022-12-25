import { timeline } from '@/constant/timeline';
import clsx from 'clsx';

const Timeline = () => {
  return (
    <div className="flow-root">
      <ul className="-mb-8 px-5 lg:px-0">
        {timeline.map((items, itemsIdx) => (
          <li key={items.id}>
            <div className="relative pb-8">
              {itemsIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-center space-x-3">
                <div className="mr-3.5">
                  <span
                    className={clsx(
                      items.iconBackground,
                      'flex h-7 w-7 items-center justify-center rounded-full ring-8 ring-white'
                    )}
                  >
                    <img
                      src={items.icon}
                      className="h-7 w-7 rounded-full text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">
                        {items.content}{' '}
                        <a
                          href={items.href}
                          className="font-medium text-gray-900"
                        >
                          {items.target}
                        </a>
                      </p>
                      <div className="whitespace-nowrap text-left text-sm text-gray-700">
                        <time>{items.date}</time>
                      </div>
                    </div>
                    <ul className="prose list-disc text-justify text-sm text-zinc-500">
                      {items.jobDescription.map((item, index) => (
                        <li key={index} className="ml-8">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
