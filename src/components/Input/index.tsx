import styles from "./Input.module.scss";

type Props = {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({ url, setUrl }: Props) => {

  return (
    <input type="text" className={styles.input} placeholder="Enter URL..."
      value={url || " "} onChange={(e) => setUrl(e.currentTarget.value)} />
  );
};

export default Input;