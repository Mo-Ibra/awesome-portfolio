const SectionHeader = ({ title, desc }) => {
  return (
    <>
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-gray-200">
        {title}
      </h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{desc}</p>
    </>
  );
};

export default SectionHeader;
