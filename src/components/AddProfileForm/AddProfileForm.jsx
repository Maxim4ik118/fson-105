import css from "./AddProfileForm.module.css";

// {
//     "name": "Іван Петров",
//     "phone": "+380501234567",
//     "email": "ivan.petrov@example.com",
//     "status": "online",
//     "avatar": "https://example.com/avatars/ivan.jpg",
//     "hasPhisicalAddress": false
//   }

// Неконтрольована форма
const AddProfileForm = ({ onAddProfile }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const name = formElements.profileName.value;
    const phone = formElements.profileNumber.value;
    const email = formElements.profileEmail.value;
    const hasPhisicalAddress = formElements.profilePhisicalAddress.checked;
    const status = formElements.profileStatus.value;

    const profileObject = {
      name,
      phone,
      email,
      hasPhisicalAddress,
      status,
      avatar: "https://example.com/avatars/ivan.jpg",
    };

    onAddProfile(profileObject)

    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        <span>Ім&apos;я користувача:</span>
        <input
          type="text"
          name="profileName"
          placeholder="Іван Петров"
          required
        />
      </label>

      <label className={css.label}>
        <span>Номер телефону:</span>
        <input
          type="tel"
          name="profileNumber"
          placeholder="+(38)0501234567"
          required
        />
      </label>

      <label className={css.label}>
        <span>E-mail:</span>
        <input
          type="email"
          name="profileEmail"
          placeholder="ivan.petrov@example.com"
          required
        />
      </label>

      <p>Статус активності:</p>
      <div className={css.label}>
        <label className={css.statusWrapper}>
          Онлайн:{" "}
          <input type="radio" name="profileStatus" value="online" required />
        </label>

        <label className={css.statusWrapper}>
          Офлайн:{" "}
          <input type="radio" name="profileStatus" value="offline" required />
        </label>
      </div>

      <label className={css.checkboxLabel}>
        <input type="checkbox" name="profilePhisicalAddress" />
        <span>Чи має профіль фізичну адресу?</span>
      </label>

      <button className={css.submitBtn} type="submit">
        🤷‍♂️ Add New Profile
      </button>
    </form>
  );
};

export default AddProfileForm;
