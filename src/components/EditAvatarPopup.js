import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, buttonText}) {
  const urlAvatarRef = React.useRef()
  urlAvatarRef.current.value = ''
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: urlAvatarRef.current.value,
    });
    urlAvatarRef.current.value = ''
  }

  return (
    <PopupWithForm title={"Обновить аватар"} name={"avatar-form"} buttonText={buttonText}
                   isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={handleSubmit}>

      <input
        ref={urlAvatarRef}
        className="popup__input popup__input_type_avatar-url"
        placeholder="Ссылка на аватар"
        name="popup-avatar-url"
        id="avatar-url-input"
        type="url"
        defaultValue=""
        required=""
      />
      <div className="popup__error-wrapper">
        <label
          htmlFor="avatar-url-input"
          className="popup__error-message"
          id="avatar-url-input-error"
        />
      </div>
    </PopupWithForm>
  )
}

export default EditAvatarPopup