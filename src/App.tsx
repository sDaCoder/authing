import { useAuth0 } from "@auth0/auth0-react"

function App() {

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0()
  console.log(user);


  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold underline text-center">Hello {user ? user.nickname : "World"}</h1>

        { user?.picture ? (
          <img src={user?.picture} alt="" className="w-32 h-32 rounded-full mx-auto" />
        ) : null }

        {isAuthenticated ? (
          <button onClick={() => logout()} className="bg-pink-500 p-4 py-2 rounded-md text-white font-bold min-w-[90vw] mx-auto">Log Out</button>
        ) :
          (<button onClick={() => loginWithRedirect()} className="bg-pink-500 p-4 py-2 rounded-md text-white font-bold min-w-[90vw] mx-auto">Log In</button>
        )}
      </div>
    </>
  )
}

export default App
