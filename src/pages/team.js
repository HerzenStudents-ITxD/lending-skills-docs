import React from 'react';
import Layout from '@theme/Layout';
import styles from './team.module.css';

const teamMembers = [
  {
    name: 'Надежда',
    role: 'База преподавателей',
    image: '/img/team/nadya.png',
    email: 'nadya@example.com',
    telegram: '@nadya_team'
  },
  {
    name: 'Дарина',
    role: 'Организация галереи',
    image: '/img/team/darina.png',
    email: 'darina@example.com',
    telegram: '@darina_team'
  },
  {
    name: 'Олеся',
    role: 'Отзывы',
    image: '/img/team/olesya.png',
    email: 'olesya@example.com',
    telegram: '@olesya_team'
  },
  {
    name: 'Мария',
    role: 'Формы заполнения',
    image: '/img/team/maria.png',
    email: 'maria@example.com',
    telegram: '@maria_team'
  },
  {
    name: 'Яна',
    role: 'Тимлид фронтенда',
    image: '/img/team/yana.png',
    email: 'yana@example.com',
    telegram: '@yana_team'
  },
  {
    name: 'Алиса',
    role: 'Фронтенд скиллс-паспорта',
    image: '/img/team/alisa.png',
    email: 'alisa@example.com',
    telegram: '@alisa_team'
  },
  {
    name: 'Олег',
    role: 'Бэкенд скиллс-паспорта',
    image: '/img/team/olegg.png',
    email: 'olegg@example.com',
    telegram: '@olegg_team'
  },
  {
    name: 'Артём',
    role: 'Документация',
    image: '/img/team/artem.png',
    email: 'artem@example.com',
    telegram: '@artem_team'
  }
];

function ContactPopover({ member, position, onClose }) {
  const [copied, setCopied] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef();
  React.useEffect(() => {
    setTimeout(() => setVisible(true), 10);
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 1200);
  };
  return (
    <div
      className={styles.popover + (visible ? ' ' + styles.popoverVisible : '')}
      ref={ref}
      style={{ top: position.y, left: position.x }}
      onClick={e => e.stopPropagation()}
    >
      <div className={styles.popoverHeader}>
        <span className={styles.popoverName}>{member.name}</span>
        <span className={styles.popoverRole}>{member.role}</span>
      </div>
      <div className={styles.popoverContactRow}>
        <span className={styles.popoverContactText}>{member.email}</span>
        <button
          className={styles.copyBtn}
          onClick={() => handleCopy(member.email, 'email')}
        >
          {copied === 'email' ? 'скопировано' : 'копировать'}
        </button>
      </div>
      <div className={styles.popoverContactRow}>
        <span className={styles.popoverContactText}>{
          member.telegram.startsWith('t.me/') ? member.telegram : `t.me/${member.telegram.replace(/^@/, '')}`
        }</span>
        <button
          className={styles.copyBtn}
          onClick={() => handleCopy(
            member.telegram.startsWith('t.me/') ? member.telegram : `t.me/${member.telegram.replace(/^@/, '')}`,
            'tg')}
        >
          {copied === 'tg' ? 'скопировано' : 'копировать'}
        </button>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const [popover, setPopover] = React.useState(null);
  const handlePortraitClick = (e, member) => {
    const rect = e.target.getBoundingClientRect();
    setPopover({
      member,
      position: { x: rect.right + 10, y: rect.top },
    });
  };
  const handleClosePopover = () => setPopover(null);
  return (
    <Layout title="Команда" description="Познакомьтесь с нашей командой профессионалов">
      <main className={styles.container}>
        <h1 className={styles.title}>Наша команда</h1>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.memberImage}
                  style={{cursor: 'pointer'}}
                  onClick={e => { e.stopPropagation(); handlePortraitClick(e, member); }}
                />
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
            </div>
          ))}
        </div>
        {popover && (
          <ContactPopover member={popover.member} position={popover.position} onClose={handleClosePopover} />
        )}
      </main>
    </Layout>
  );
}
