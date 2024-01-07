export default async function validateForm(dataFields, data) {
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
    firstName: {
      validate: data?.firstName?.length < 2,
      error: "Invalid name",
    },
    lastName: {
      validate: data?.lastName?.length < 2,
      error: "Invalid name",
    },
    phone: {
      validate: !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(
        data?.phone
      ),
      error: "phone number must have 10 digits",
    },
  };

  const errors = {};

  await dataFields.forEach((field) => {
    if (!data[field]) {
      errors[field] = `${field} is a required field`;
    } else if (FIELDS[field]?.validate) errors[field] = FIELDS[field].error;
  });

  return await { errors };
}
