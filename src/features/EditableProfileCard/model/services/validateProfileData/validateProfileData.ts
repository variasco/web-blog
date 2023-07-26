import { Profile } from "entities/Profile";
import { ValidateProfileError } from "../../types/EditableProfileCardSchema";

export function validateProfileData(profile?: Profile) {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const { first, lastname, age, city, country } = profile;

  const errors: ValidateProfileError[] = [];

  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_CITY);
  }

  return errors;
}
