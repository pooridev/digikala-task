import { Icon } from '@iconify/react';
import { FormEvent, useState } from 'react';

const SendMessageForm = () => {
  const [message, setMessage] = useState('');

  const changeMessageInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMessage(e.target.value);
  };

  const sendMessageHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={sendMessageHandler}
      role='form'
      className='send-message-form'>
      <input
        aria-invalid={message.trim().length === 0}
        value={message}
        onChange={changeMessageInputHandler}
        className='send-message-form__input'
        type='text'
        placeholder='Write a message...'
      />
      <button
        type='submit'
        className={
          message.trim().length === 0
            ? 'send-message-button'
            : 'send-message-button valid'
        }>
        <Icon fontSize='2rem' icon='carbon:send-filled' />
      </button>
    </form>
  );
};

export default SendMessageForm;
