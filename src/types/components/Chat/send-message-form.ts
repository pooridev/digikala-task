import { ChangeEvent, FormEvent } from 'react';

export type SendMessageFormProps = {
  onSendMessage(e: FormEvent): void;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  message: string;
};
