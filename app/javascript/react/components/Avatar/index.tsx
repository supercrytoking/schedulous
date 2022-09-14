import React from "react";
import LetteredAvatar from "react-lettered-avatar";
import colors from "~/utils/colors";

export default function Avatar({ person, size = 36 }) {
  return person.has_user ? (
    <Avatar.UserLetteredAvatar name={person.name} size={size} />
  ) : (
    <Avatar.PersonLetteredAvatar name={person.name} size={size} />
  );
}

Avatar.PersonLetteredAvatar = ({ name, size }) => {
  const backgroundColor = "#d8e3f8";
  const color = colors.gray900;

  return (
    <LetteredAvatar
      backgroundColor={backgroundColor}
      color={color}
      name={name}
      size={size}
    />
  );
};

Avatar.UserLetteredAvatar = ({ name, size }) => {
  const backgroundColor = colors.primary200;
  const color = colors.gray900;

  return (
    <LetteredAvatar
      backgroundColor={backgroundColor}
      color={color}
      name={name}
      size={size}
    />
  );
};
