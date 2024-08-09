import { useEffect, useRef, useState } from "react";
import css from "./Modal.module.css";
import { createPortal } from "react-dom";
import AddProfileForm from "../AddProfileForm/AddProfileForm";

/*
Методи життєвого циклу.

1. Монтування

  useEffect(() => {
    console.log("modal mounted");
  }, []);

  - функція, яка виконується, кожен раз, піся рендеру компонти.

    Для чого використовується:
  1. Надсилаються мережеві запити за даними після монтування
  2. Для встановлення глобальних слухачів подій window.addEventListener
  3. Встановлюються таймери та інтервали (setInterval, setTimeout)
  4. Виконуються якісь додаткові функції ефекти(відключення скролу у користувача, коли відкрилась модалка)

2. Розмонтування(демонтування)

  useEffect(() => {
    return () => {
      console.log("modal unmounted");
    }
  }, []);

   - функція, яка виконується, кожен раз, перед тим,
    як компонента буде повністю видалена з розмітки.

    Для чого використовується:
  1. Відхиляти мережеві запити за даними після монтування
  2. Для приберання глобальних слухачів подій window.removeEventListener
  3. Прибераються таймери та інтервали (clearInterval, clearTimeout)
  4. Виконуються якісь додаткові функції ефекти(вмикати скролу у користувача,
     коли перед повним закриттям модалки)

3. Оновлення

  useEffect(() => {
    console.log("Counter value: ", counter);
  }, [counter])

  - функція, яка виконується кожен раз, після зміни пропсів, або стейту компоненти.

    Для чого використовується:
  1. Надсилатися мережеві запити за даними після оновлення
  2. Синхронізація даних з localStorage, або з якимись сторонніми функціями.
*/

const Modal = ({ onCloseModal, serverData }) => {
  const [counter, setCounter] = useState(() => {
    return parseInt(localStorage.getItem("counterValue") ?? 0);
  });
  const buttonRef = useRef(null);
  const secondButtonRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("counterValue", counter);
  }, [counter]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseModal]);

  const handleBackDropClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  const handleTestRef = () => {
    secondButtonRef.current = "Hello Alibaba";
  };

  return createPortal(
    <div onClick={handleBackDropClick} className={css.backdrop}>
      <div className={css.modal}>
        <button
          type="button"
          aria-label="Close modal button"
          className={css.closeModalBtn}
          onClick={onCloseModal}
        >
          &times;
        </button>

        <h3 className={css.title}>Modal</h3>
        <p className={css.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet in
          doloremque laboriosam tempore reprehenderit maiores nobis eligendi ad
          ipsum facere!
        </p>
        <button ref={buttonRef} onClick={handleTestRef} type="button">
          Click to focus on the second button
        </button>
        <button
          ref={secondButtonRef}
          type="button"
          onClick={() => setCounter(counter + 1)}
        >
          Click to increment counter: {counter}
        </button>

       <p>Server Data: {serverData}</p>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
