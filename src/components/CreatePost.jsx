import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPost } from '../api/posts.js'

export function CreatePost() {
  const queryClient = useQueryClient()
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  })

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    createPostMutation.mutate(
      {
        title: formData.get('title').trim(),
        author: formData.get('author').trim(),
        contents: formData.get('contents').trim(),
      },
      {
        onSuccess: () => form.reset(),
      },
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='create-title'>Title: </label>
        <input type='text' name='title' id='create-title' required />
      </div>
      <br />
      <div>
        <label htmlFor='create-author'>Author: </label>
        <input type='text' name='author' id='create-author' />
      </div>
      <br />
      <label htmlFor='create-contents'>Contents: </label>
      <textarea name='contents' id='create-contents' />
      <br />
      <br />
      <button type='submit' disabled={createPostMutation.isPending}>
        {createPostMutation.isPending ? 'Creating...' : 'Create'}
      </button>
      {createPostMutation.isError && (
        <p role='alert'>{createPostMutation.error.message}</p>
      )}
    </form>
  )
}
