import strings from "../../helper/hebrew-translation";

const newPageFormObject = [
  {
    isRequired: true,
    fieldName: "school_name",
    label: strings.page["school_name"],
    type: "text",
  },
  {
    isRequired: true,
    fieldName: "class_name",
    label: strings.page["class_name"],
    defaultValue: "ה-5",
    type: "text",
  },
  {
    isRequired: true,
    fieldName: "address",
    label: strings.page["address"],
    type: "text",
  },
  {
    isRequired: true,
    fieldName: "phone",
    label: strings.page["phone"],
    defaultValue: "0x-xxxxxxx או 05x-xxxxxxx",
    type: "text",
  },
  {
    isRequired: true,
    fieldName: "principal_name",
    label: strings.page["principal_name"],
    type: "text",
  },
  {
    isRequired: true,
    fieldName: "starting_year",
    label: strings.page["starting_year"],
    defaultValue: 2024,
    type: "number",
  },
  //   {
  //     isRequired: true,
  //     fieldName: "background_id",
  //     label: strings.page["background_id"],
  //     type: "email",
  //   },
];

export default newPageFormObject;
