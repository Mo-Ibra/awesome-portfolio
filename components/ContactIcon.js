const ContactIcon = ({link, icon, ariaLabel}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
    >
      { icon }
    </a>
  );
};

export default ContactIcon;