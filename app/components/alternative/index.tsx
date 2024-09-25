import styles from "./style.module.css"

interface AlternativeProps{
    label: string;
    order: number;
}

export function Alternative(props: AlternativeProps){
    return (
        
                <label className={styles.component}>
                    <input type="radio" 
                    id={`alternative-${props.order}`}
                    name="alternative"
                    defaultValue={props.order}
                    />
                      {props.label}
                </label>
           
    );
}