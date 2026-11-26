import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate, Link } from 'react-router-dom'
import { login } from '../api/users.js'

export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const loginMutation = useMutation({
    mutationFn: () => login({ username, password }),
    onSuccess: () => navigate('/'),
    onError: () => alert('failed to login!'),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    loginMutation.mutate()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Link to="/">Back to main page</Link>
      <div>
        <label htmlFor="login-username">Username: </label>
        <input
          type="text"
          name="login-username"
          id="login-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor="login-password">Password: </label>
        <input
          type="password"
          name="login-password"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <input
        type="submit"
        value={loginMutation.isPending ? 'Logging in...' : 'Log In'}
        disabled={!username || !password || loginMutation.isPending}
      />
      <br />
      <br />
      <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
    </form>
  )
}
