import { Observable } from 'rxjs';

export interface Interest {
  id: string;
  cdate: Date;
  text: string;
  user_uid: string;
  access: 'public' | 'private' | 'protected';
  weight?: number;
  color?: string;
}

export interface Post {
  id: string;
  cdate: Date;
  interest_uid: string;
  user_uid: string;
  text?: string;
  file_uid?: string;
  file_url$?: Observable<any>;
}
