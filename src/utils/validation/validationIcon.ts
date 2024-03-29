export default function validationIcon(icon: string): boolean {
  const iconsValid: Icon.Name[] = [
    '01d',
    '02d',
    '03d',
    '04d',
    '09d',
    '10d',
    '11d',
    '13d',
    '50d',
    '01n',
    '02n',
    '03n',
    '04n',
    '09n',
    '10n',
    '11n',
    '13n',
    '50n',
  ];
  const valid = iconsValid.find((elem) => elem === icon);
  if (valid) return true;
  return false;
}
