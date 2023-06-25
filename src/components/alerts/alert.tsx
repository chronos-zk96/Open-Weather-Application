import "../../styles/common.scss";

interface AlertProps {
  message: string;
}

const Alert = ({ message }: AlertProps) => {
  return <p className="alert-danger">{message}</p>;
};

export default Alert;
