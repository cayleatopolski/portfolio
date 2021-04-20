import ModeSlider from './components/mode-slider/ModeSlider';
import styles from './components/mode-slider/styles.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ModeSlider />
    </div>
  );
}
