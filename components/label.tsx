import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx(
        'absolute bottom-0 left-0 flex w-full px-2 pb-2 sm:px-4 sm:pb-4 @container/label',
        {
          'lg:px-20 lg:pb-[35%]': position === 'center'
        }
      )}
    >
      <div className="flex items-center rounded-full border bg-white/70 p-1 sm:p-1.5 text-[10px] sm:text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <h3 className="mr-2 sm:mr-4 line-clamp-2 grow pl-1 sm:pl-2 leading-none tracking-tight">
          {title}
        </h3>
        <Price
          className="flex-none rounded-full bg-primary p-1 sm:p-2 text-[10px] sm:text-xs text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
