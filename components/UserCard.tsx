import { User } from '@/types/User';
import { Card, SxProps } from '@mui/material';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import styles from './UserCard.module.css';

export default function UserCard({ user }: { user: User }) {
  return (
    <Card sx={{ width: '100%' }}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div>
            <div className={styles.label}>Namn</div>
            <div>
              {user.name.title} {user.name.first} {user.name.last}
            </div>
          </div>
          <div>
            <div className={styles.label}>Adress</div>
            <div>
              {user.location.street.name} {user.location.street.number}, {user.location.city}, {user.location.state},{' '}
              {user.location.country}
            </div>
          </div>
          <div>
            <div className={styles.label}>E-post</div>
            <div>
              <a href={'mailto:' + user.email}>{user.email}</a>
            </div>
          </div>
          <div>
            <div className={styles.label}>Registrerad</div>
            <div>{new Date(user.registered.date).toLocaleDateString('sv')}</div>
          </div>
        </div>
        <img className={styles.image} src={user.picture.large} alt="Profile photo" />
      </div>
    </Card>
  );
}
