import { Toast } from "../helpers/toast";
import styles from "../styles/AlertModal.module.css";
import { Modal } from "./Modal";

export const AlertModal = ({ show, setShow, id }) => {
  const handleDelete = () => {
    console.log(id);
    setShow(false);

    return Toast("success", "Registro Eliminado");
  };
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <div className={styles.alertContainer}>
        <div className={styles.alertContent}>
          <div className={styles.alertIcon}>
            <span>!</span>
          </div>
        </div>

        <div className={styles.alertMsg}>
          <h2>¿Estás seguro?</h2>
          <span>Se eliminará el registro {id}</span>
          <div className={styles.alertBtns}>
            <button className={styles.okBtn} onClick={handleDelete}>
              Eliminar
            </button>
            <button className={styles.cancelBtn} onClick={() => setShow(false)}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
