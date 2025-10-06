import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function Logo({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center',
        {
          'h-[40px] w-[120px]': !size,
          'h-[30px] w-[90px]': size === 'sm'
        }
      )}
    >
      <LogoIcon
        className={clsx({
          'h-[32px] w-[110px]': !size,
          'h-[24px] w-[82px]': size === 'sm'
        })}
      />
    </div>
  );
}
