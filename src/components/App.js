import React from "react";
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

  const [selectedCard, setSelectedCard] = React.useState(false)

  function handleCardClick(card) {
    console.log(card)
    setSelectedCard(!selectedCard)
  }


  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setSelectedCard(false)

  }

  return (
    <>
      <div className="page">
        <Header/>
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              isOpen={selectedCard}
              onCardClick={handleCardClick}
        />

        <Footer/>
        <PopupWithForm title={"Редактировать профиль"} name={"profile-form"} buttonText={"Сохранить"}
                       isOpen={isEditProfilePopupOpen}
                       onClose={closeAllPopups}>

          <input
            className="popup__input popup__input_type_name"
            name="popup-name"
            id="name-input"
            placeholder="Имя"
            type="text"
            defaultValue=""
            required=""
            minLength={2}
            maxLength={40}
          />
          <div className="popup__error-wrapper">
            <label
              htmlFor="name-input"
              className="popup__error-message"
              id="name-input-error"
            />
          </div>
          <input
            className="popup__input popup__input_type_subtitle"
            name="popup-subtitle"
            id="subtitle-input"
            placeholder="Вид деятельности"
            type="text"
            defaultValue=""
            required=""
            minLength={2}
            maxLength={200}
          />
          <div className="popup__error-wrapper">
            <label
              htmlFor="subtitle-input"
              className="popup__error-message"
              id="subtitle-input-error"
            />
          </div>

        </PopupWithForm>
        <PopupWithForm title={"Новое место"} name={"card-form"} buttonText={"Создать"}
                       isOpen={isAddPlacePopupOpen}
                       onClose={closeAllPopups}>
          <input
            className="popup__input popup__input_type_place-name"
            placeholder="Название"
            name="popup-place-name"
            id="place-name-input"
            type="text"
            defaultValue=""
            required=""
            minLength={2}
            maxLength={30}
          />
          <div className="popup__error-wrapper">
            <label
              htmlFor="place-name-input"
              className="popup__error-message"
              id="place-name-input-error"
            />
          </div>
          <input
            className="popup__input popup__input_type_place-url"
            placeholder="Ссылка на картинку"
            name="popup-place-url"
            id="place-url-input"
            type="url"
            defaultValue=""
            required=""
          />
          <div className="popup__error-wrapper">
            <label
              htmlFor="place-url-input"
              className="popup__error-message"
              id="place-url-input-error"
            />
          </div>
        </PopupWithForm>
        <PopupWithForm title={"Обновить аватар"} name={"avatar-form"} buttonText={"Сохранить"}
                       isOpen={isEditAvatarPopupOpen}
                       onClose={closeAllPopups}>
          <input
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
        <PopupWithForm title={"Вы уверены?"} name={"confirm-form"} buttonText={"Да"}>
        </PopupWithForm>
        <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}/>
      </div>
    </>
  );
}


export default App;
