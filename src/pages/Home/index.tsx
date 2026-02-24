import { useState } from "react";
import GenerateQR from "../../components/GenerateQR/generateQR";
import Input from "../../components/Input"
import styles from './Home.module.scss'

const Home = () => {
  const [url, setUrl] = useState<string>('')
  return (
    <div className={styles.home}>
      <Input url={url} setUrl={setUrl} />
      <GenerateQR url={url} />
    </div>
  );
};

export default Home;