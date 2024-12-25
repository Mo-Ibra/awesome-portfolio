const ContactIcon = ({link, icon}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
    >
      { icon }
    </a>
  );
};

export default ContactIcon;