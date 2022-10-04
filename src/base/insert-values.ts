
export function insertValues(template: string, ...values: Array<[string, any]>) {
  let result = template;
  values.forEach(([subject, value]) => {
    const regex = new RegExp(`{{${subject}}}`, "g");
    result = result.replace(regex, value.toString())
  });
  
  return result;
}