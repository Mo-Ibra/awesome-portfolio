const ToolsCard = ({ imageUrl, name, desc }) => {
  return (
    <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg justify-center sm:justify-normal">
      <img
        src={imageUrl}
        alt="React"
        className="w-12 h-12 mr-4"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{ desc }</p>
      </div>
    </div>
  );
};

export default ToolsCard;