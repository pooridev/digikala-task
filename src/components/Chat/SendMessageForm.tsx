// External Dependencies
import { FormEvent, FunctionComponent, useState } from 'react';
import { Icon } from '@iconify/react';

// Internal Dependencies
import { SendMessageFormProps } from '../../types/components/Chat/Conversation/send-message-form';

const SendMessageForm: FunctionComponent<SendMessageFormProps> = ({
  onSendMessage,
  message,
  onChangeInput
}) => {
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
