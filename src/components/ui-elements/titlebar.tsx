const TitleBar = () => {
  return (
    <div className="sticky top-0 z-50  flex h-12 items-center overscroll-contain bg-purple-400 pl-6 text-justify text-white shadow xl:h-16">
      <a href="/">
        <div className="my-2 transform rounded-full px-1 transition-transform duration-300 hover:scale-105 hover:bg-sky-400">
          KikiTalk
        </div>
      </a>
    </div>
  );
};
export default TitleBar;
