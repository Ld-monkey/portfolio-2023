import Icon from '../Icons/Icons';

function Mail({ children }) {
  const mailToSend = `mailto:${import.meta.env.VITE_MAIL}`;
  return (
    <a href={mailToSend}>
      {children || <Icon icon="mail" size={27} color="white" />}
    </a>
  );
}

export default Mail;
