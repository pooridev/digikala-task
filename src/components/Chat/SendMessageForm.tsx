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
  return (
    <form onSubmit={onSendMessage} role='form' className='send-message-form'>
      <input
        aria-invalid={message.trim().length === 0}
        value={message}
        onChange={onChangeInput}
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
