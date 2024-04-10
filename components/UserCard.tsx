import { User } from '@/types/User';
import { Card } from '@mui/material';
import styles from './UserCard.module.css';

export default function UserCard({ user }: { user: User }) {
  const { name, location, email, registered, picture } = user;
  const { street, city, state, country } = location;
  const registeredDate = new Date(registered.date).toLocaleDateString('sv');

  return (
    <Card sx={{ width: '100%' }} role="article" lang="sv">
      <div className={styles.container}>
        <div className={styles.info}>
          <div>
            <h2 className={styles.label}>Namn</h2>
            <div>{`${name.title} ${name.first} ${name.last}`}</div>
          </div>
          <div>
            <h2 className={styles.label}>Adress</h2>
            <div>{`${street.name} ${street.number}, ${city}, ${state}, ${country}`}</div>
          </div>
          <div>
            <h2 className={styles.label}>E-post</h2>
            <div>
              <a href={`mailto:${email}`} className={styles.emailLink}>
                {email}
              </a>
            </div>
          </div>
          <div>
            <h2 className={styles.label}>Registrerad</h2>
            <div>{registeredDate}</div>
          </div>
        </div>
        <img className={styles.image} src={picture.large} alt={`Profile photo of ${name.first} ${name.last}`} />
      </div>
    </Card>
  );
}
