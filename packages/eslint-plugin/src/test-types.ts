export interface InvalidCase<MessageIds extends string> {
  code: string;
  output: string;
  errors: { messageId: MessageIds }[];
}
