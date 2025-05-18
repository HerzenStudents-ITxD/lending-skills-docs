import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
          <Link className={styles.heroBtn} to="/docs/Architecture/intro">Архитектура</Link>
          <Link className={styles.heroBtn} to="/docs/BRD&SRS/1">BRD&SRS</Link>
          <Link className={styles.heroBtn} to="/blog">Блог</Link>
          <Link className={styles.heroBtn} to="/faq">FAQ</Link>
        </div>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <h2>О проекте</h2>
        <p>Этот портал — современная документация для лендинга направления «Информационные технологии в дизайне». Здесь вы найдёте архитектуру, требования, инструкции, команду и полезные ресурсы для развития и поддержки проекта.</p>
      </div>
    </section>
  );
}

function QuickLinksSection() {
  const cards = [
    {
      to: '/docs/Architecture/intro',
      image: '/img/architecture.jpg',
      title: 'Архитектура',
      subtitle: 'Всё о проекте',
    },
    {
      to: '/docs/BRD&SRS/1',
      image: '/img/brdsrs.jpg',
      title: 'BRD & SRS',
      subtitle: 'Требования и цели',
    },
    {
      to: '/blog',
      image: '/img/blog.jpg',
      title: 'Блог',
      subtitle: 'Статьи и новости',
    },
    {
      to: '/faq',
      image: '/img/faq.jpg',
      title: 'FAQ',
      subtitle: 'Ответы на вопросы',
    },
    {
      to: '/team',
      image: '/img/team.jpg',
      title: 'Команда',
      subtitle: 'Разработчики',
    },
  ];
  return (
    <section className={styles.quickLinksSection}>
      <div className="container">
        <h2>Быстрые ссылки</h2>
        <div className={styles.quickLinksGrid}>
          {cards.map(card => (
            <Link className={styles.quickLinkCard} to={card.to} key={card.to}>
              <div className={styles.quickLinkImgWrap}>
                <img src={card.image} alt={card.title} className={styles.quickLinkImg} />
              </div>
              <div className={styles.quickLinkTitle}>{card.title}</div>
              <div className={styles.quickLinkSubtitle}>{card.subtitle}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  // Здесь можно реализовать динамическую подгрузку новостей, пока — статично
  return (
    <section className={styles.newsSection}>
      <div className="container">
        <h2>Что нового?</h2>
        <ul className={styles.newsList}>
          <li><b>06.05.2025:</b> Подключён фирменный шрифт Onest для всего сайта</li>
          <li><b>05.05.2025:</b> Добавлена страница FAQ и обновлён футер</li>
          <li><b>01.05.2025:</b> Запущен блог и раздел "Команда"</li>
        </ul>
      </div>
    </section>
  );
}

function MiniTeamSection() {
  // Можно вынести в отдельный компонент, если нужно динамически
  return (
    <section className={styles.miniTeamSection}>
      <div className="container">
        <h2>Наша команда</h2>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div className={styles.miniTeamGrid}>
            <div className={styles.miniTeamCard}>
              <img src="/img/team/nadya.png" alt="Надежда" />
              <div>
                <b>Надежда</b>
                <div>База преподавателей</div>
              </div>
            </div>
            <div className={styles.miniTeamCard}>
              <img src="/img/team/yana.png" alt="Яна" />
              <div>
                <b>Яна</b>
                <div>Тимлид фронтенда</div>
              </div>
            </div>
            <div className={styles.miniTeamCard}>
              <img src="/img/team/olegg.png" alt="Олегг" />
              <div>
                <b>Олег</b>
                <div>Бэкенд скиллс-паспорта</div>
              </div>
            </div>
          </div>
          <Link className={styles.teamMoreBtn} to="/team">Вся команда →</Link>
        </div>
      </div>
    </section>
  );
}

function HowToStartSection() {
  return (
    <section className={styles.howToStartSection}>
      <div className="container">
        <h2>Как начать?</h2>
        <ol className={styles.howToStartList}>
          <li>Ознакомьтесь с <Link to="/docs/Architecture/intro">архитектурой проекта</Link></li>
          <li>Изучите <Link to="/docs/BRD&SRS/1">бизнес и системные требования</Link></li>
          <li>Прочитайте <Link to="/faq">FAQ</Link> и задайте вопрос команде</li>
          <li>Присоединяйтесь к <a href="https://t.me/herzenexpert" target="_blank" rel="noopener noreferrer">Telegram</a></li>
        </ol>
      </div>
    </section>
  );
}

function ContactsSection() {
  return (
    <section className={styles.contactsSection}>
      <div className="container">
        <h2>Контакты и поддержка</h2>
        <div className={styles.contactsGrid}>
          <a href="mailto:info@itvd.ru" className={styles.contactCard}>Почта: info@itvd.ru</a>
          <a href="https://t.me/herzenexpert" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>Telegram РГПУ</a>
          <a href="https://github.com/enakaeeeena/landing_14-05" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>GitHub Frontend</a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title="Главная" description="Документация и поддержка лендинга ИТвД">
      <HeroSection />
      <AboutSection />
      <QuickLinksSection />
      <NewsSection />
      <MiniTeamSection />
      <HowToStartSection />
      <ContactsSection />
    </Layout>
  );
}
