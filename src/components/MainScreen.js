import '../assets/css/MainScreen.css';

const MainScreen = ({title, children}) => {
  return (
    <div style={{width: '100%', height: '100vh', marginTop: 60}}>
      <div className="page">
        {title && (
          <>
            <h1>{title}</h1>
            <hr />
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export default MainScreen;
