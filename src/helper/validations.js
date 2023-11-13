export default async function validateForm(data) {
  const FIELDS = {
    email: {
      validate: !/\S+@\S+\.\S+/.test(data?.email),
      error: "Invalid email format",
    },
    password: {
      validate: data?.password?.length < 8,
      error: "password must be at least 8 characters long",
    },
    user_name: {
      validate: data?.user_name?.length < 4,
      error: "user name must be at least 4 characters long",
    },
  };

  const errors = {};

  await Object.keys(data).forEach((field) => {
    console.log("data", data);
    if (!data[field]) {
      errors[field] = `${field} is a required field`;
    } else if (FIELDS[field].validate) errors[field] = FIELDS[field].error;
  });

  return { errors };
}
