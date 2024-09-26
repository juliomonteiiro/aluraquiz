import styles from "./style.module.css";

interface AlternativeProps {
    label: string;
    order: number;
    selectedValue: string | null;
    onChange: (value: string) => void;
  }
  
  export function Alternative(props: AlternativeProps) {
    const id = `alternative-${props.order}`;
  
    return (
      <>
        <input
          className={styles.input}
          type="radio"
          id={id}
          name="alternative"
          value={props.order}
          checked={props.selectedValue === String(props.order)}
          onChange={() => props.onChange(String(props.order))}
        />
        <label htmlFor={id} className={styles.component}>
          {props.label}
        </label>
      </>
    );
  }
  