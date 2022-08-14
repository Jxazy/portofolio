import clsx from 'clsx';

const Footer = () => {
  return (
    <div
      className={clsx(
        'pt-5 pb-3 text-center',
        'bg-zinc-500 dark:bg-dark-900 bottom-0'
      )}
    >
      <p
        className={clsx(
          'text-sm font-medium',
          'text-gray-700 dark:text-gray-300'
        )}
      >
        Copyright &copy; 2002 - All Right Reserved by Reva Doni Aprilio.
      </p>
    </div>
  );
};

export default Footer;