export interface Interest {
  id: string;
  cdate: Date;
  text: string;
  user_uid: string;
  access: 'public' | 'private' | 'protected';
  weight?: number;
  color?: string;
}
