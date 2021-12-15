import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Components/AppRouter/AppRouter';
import { useEffect, useState } from 'react';
import { AuthContext } from './Components/AuthContext/AuthContext';




function App() {


  const [isAuth, setIsAuth] = useState(false);

  //Хук проверяет наличие значения авторизации в localStorage,
  //для того чтобы авторизация не слетала при переходах и обновлениях 
  useEffect (() => { 
    if (localStorage.getItem('isAuth')) {
      setIsAuth(true)
    }
  }, [])

  //Функция логина записывает значение в localStorage
  function login() { 
    setIsAuth(true)
    localStorage.setItem('isAuth', 'true');
  }

  //Функция логаута удаляет значение из localStorage
  function logout() {
    setIsAuth(false)
    localStorage.removeItem('isAuth')
  }
  
  //В контексте хранятся функции для доступа к ним из других элементов реакта
  const context = {isAuth, setIsAuth, login, logout}

  return (
    <BrowserRouter>
      <AuthContext.Provider value={context}>
        <Header/>
        <div className="app">
          <AppRouter/>
        </div>
        <Footer/>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
