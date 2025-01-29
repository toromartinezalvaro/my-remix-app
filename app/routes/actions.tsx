import { useActionData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { useState } from 'react'

export const action = async (request: Request) => {
  const formData = await request.formData();
  const name = formData.get('name');

  return json({ message: `Hola ${name}` });	
}

const StateWithAction = () => {
  const [name, setName] = useState('Alvaro');
  const actionData = useActionData<{message: string}>();

  return (
    <div>
      <form method='post'>
        <label htmlFor="">
          Name: 
          <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <button type='submit'>Send</button>
      </form>

      {actionData?.message && <p>{actionData.message}</p>}
    </div>
  )
}

export default StateWithAction