import moment from 'moment';

interface IStyleWorksapce {
  applicationName?: string;
  colorTheme?: 'enamel-blue' | string;
  backgroundStyle?: string;
  loginStyle?: string;
  favicon?: string;
  logo?: string;
  shapeStyle?: 'square' | 'rounded' | 'circle';
}

interface IWorkspace {
  _id: string;
  createdAt?: number;
  createdBy?: string;
  description?: string;
  expired?: string;
  isCustom: boolean;
  maxCase?: number;
  maxUser: number;
  name: string;
  alias: string;
  domain: string;
  application: IStyleWorksapce;
  type?: string;
  updatedAt?: number;
  alamat?: string;
  provinsi: string;
  kabkota: string;
  kecamatan: string;
  desa_kelurahan: string;
  kodePos?: string;
  email?: string;
  fax?: string;
  logo?: string;
  website?: string;
  noTelp?: string;
}

export const WorkspaceField: IWorkspace = {
  _id: 'pk',
  createdAt: 0,
  createdBy: '',
  description: '',
  expired: moment().add(1, 'd').format('YYYY-MM-DD[T]HH:mm'),
  isCustom: false,
  maxCase: 1,
  maxUser: 1,
  name: '',
  alias: '',
  domain: '',
  application: {
    applicationName: 'siDesa',
    colorTheme: 'enamel-blue',
    backgroundStyle: 'bg-1',
    loginStyle: 'login-1',
    favicon: '',
    logo: '',
    shapeStyle: 'rounded',
  },
  alamat: '',
  provinsi: '',
  kabkota: '',
  kecamatan: '',
  desa_kelurahan: '',
  website: '',
  email: '',
  fax: '',
  logo: '',
  kodePos: '',
  noTelp: '',
  type: 'lifetime',
};

export type { IWorkspace };
