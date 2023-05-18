const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/kabhishek18">
        <i className="fa-brands fa-github" aria-hidden="true" title="Kabhishek18' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/kabhishek18">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Kabhishek18' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/kabhishek18/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="kabhishek18' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/kabhishek18">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Kumar Abhishek' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
