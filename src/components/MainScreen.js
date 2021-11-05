import '../assets/css/MainScreen.css';

const MainScreen = ({title, children}) => {
  return (
    <div className="row-span-1">
      <div className="page">
        {title && (
          <>
            <h1 className="heading">{title}</h1>
            <hr />
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export default MainScreen;
