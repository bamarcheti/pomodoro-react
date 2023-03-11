const Tags = () => {
  return (
    <div className="flex bg-primary h-3 w-96 m-auto p-5 gap-5 rounded-3xl items-center">
      {['Pomodoro', 'Short Break', 'Long Break'].map((tag, i) => (
        <button
          className="inherit flex flex-1 bg-secondary text-center rounded-3xl h-6 font-medium"
          key={i}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Tags;
