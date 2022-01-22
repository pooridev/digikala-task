// External Dependencies
import { FormEvent, FunctionComponent, useState } from 'react';
import { Icon } from '@iconify/react';

// Internal Dependencies
import { SendMessageFormProps } from '../../types/components/Chat/send-message-form';

/**
 *
 * @returns a form that allows the user to send a message 📩
 */
const SendMessageForm: FunctionComponent<SendMessageFormProps> = ({
  onSendMessage,
  message,
  onChangeInput
}) => {
  // Indicates whether the send button should be disabled.
  // (also used to update the aria-invalid attribute)
  const isValid = message.trim().length >= 1;

  return (
    <form onSubmit={onSendMessage} role='form' className='send-message-form'>
      <input
        aria-invalid={!isValid}
        value={message}
        onChange={onChangeInput}
        className='send-message-form__input'
        type='text'
        placeholder='Write a message...'
      />
      <button
        type='submit'
        className={
          isValid ? 'send-message-button valid' : 'send-message-button'
        }>
        <Icon fontSize='2rem' icon='carbon:send-filled' />
      </button>
    </form>
  );
};

export default SendMessageForm;
