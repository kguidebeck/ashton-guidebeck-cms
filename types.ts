export interface FieldOptions {
  options?: {
    layout?: string;
    list?: ListOption[];
  };
  description?: string;
  hidden?: boolean | ((CallbackProperties) => boolean);
  readOnly?: boolean;
  group?: string;
  fieldset?: string;
  initialValue?: string | (() => string) | Awaited<Promise<string>>;
  validation?: (Rule: any) => any;
}

export interface Role {
  name: string;
  title: string;
  description: string;
}

export interface User {
  email: string;
  id: string;
  name: string;
  profileImage: string;
  roles: Role[];
}

export interface CallbackProperties {
  document: {};
  parent: {} | undefined;
  value: any;
  currentUser: User;
}

export interface ListOption {
  title: string;
  value: any;
}
