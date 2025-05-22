import reactLogo from './assets/react.svg?inline'
import viteLogo from './assets/vite.svg'
import djangoLogo from './assets/django.svg'
import { Link } from 'react-router'

function App() {

  return (
    <main className='h-screen flex flex-col justify-center items-center bg-gray-100'>
      <div className='flex gap-3 justify-center items-center p-8'>
        <a href="https://www.djangoproject.com" target="_blank">
          <img src={djangoLogo} className="w-22 h-22 object-cover" alt="React logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-18 h-18" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-20 h-20 animate-spin animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className='text-3xl font-bold text-center'>Django + Vite + React</h1>
      <div>
        <Link to={"/about"}>About</Link>
      </div>
    </main>
  )
}

export default App
