import { CONTACTS_MOCK } from "@/app/mock/contacts";
import styles from "./page.module.css";
export default function Birthdays() {
  return (
    <div className={styles.Main}>
      <h1>Birthdays</h1>
      <ul className={styles.List}>
        {CONTACTS_MOCK.map((contact: typeof CONTACTS_MOCK[0]) => (
          <li key={contact.id} className={styles.Card}>
            <img src={contact.avatarUrl} alt={contact.firstName} width={100} height={100} />
            <h3>{contact.firstName} {contact.lastName}</h3>
          </li>
        ))}
      </ul>  
    </div>
  );
}