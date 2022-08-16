import styles from './ContactUsBody.module.css';

const ContactUsBody = () => {
  return (
    <div className="p-24 grid gap-x-8 gap-y-4 grid-cols-3">
      <div className={styles.box}>Help Center</div>
      <div className={styles.box}>Partnering and Sponsorships</div>
      <div className={styles.box}>PR and Communications</div>
      <div className={styles.box}>HR Inquiries</div>
      <div className={styles.box}>Security Escalations</div>
      <div className={styles.box}>Technical Issues</div>
    </div>
  );
};

export default ContactUsBody;
