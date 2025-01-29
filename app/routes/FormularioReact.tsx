import { ActionFunction, json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  // const email = formData.get("email");
  // const address = formData.get("address");

  // in this step... enviamos la información al back-end
  if (!firstName || !lastName || firstName.length < 3 || lastName.length < 3) {
    return json({ error: { message: "first name is required and must contain 3 characters" } }, { status: 400 });
  }

  if (!lastName || lastName.length < 3) {
    return json({ error: { message: "las name is required and must contain at least 3 characters" } }, { status: 400 });
  }

  return json({ message: `Hola ${name}` });
};

interface ActionData {
  message?: string;
  error?: {
    message: string;
  };
}

export default function BasicForm() {
  const actionData = useActionData<ActionData>();

  return (
    <div>
      <h1>Basic Form</h1>
      <form method="post">
        <label htmlFor="">
          First Name:
          <input type="text" name="firstName" />
        </label>
        <label htmlFor="">
          Last Name:
          <input type="text" name="lastName" />
        </label>
        {/* <label htmlFor="">
          Email:
          <input type="text" name="email" />
        </label>
        <label htmlFor="">
          Address:
          <input type="text" name="address" />
        </label> */}
        <button type="submit">Send</button>
      </form>
      {actionData?.message && <p>{actionData.message}</p>}
      {actionData?.error && (
        <p style={{ color: "red" }}>{actionData.error.message}</p>
      )}
    </div>
  );
}
