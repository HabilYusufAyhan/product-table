// components/stats/StatsGrid.tsx
import { Heart, MapPin, Users } from 'lucide-react';

import type { UserData } from '../types/User';

interface Props {
  icon: typeof Heart; // Lucide icon bileşeni
  label: string; // Stat açıklaması
  value: string | number; // Stat değeri
}

export const StatsGrid = ({ users }: { users: UserData[] }) => (
  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
    <Stat icon={Users} label="Toplam Kullanıcı" value={users.length} />
    <Stat icon={Heart} label="Aktif Eşleşme" value={0} />
    <Stat
      icon={MapPin}
      label="Farklı Şehir"
      value={new Set(users.map((u) => u.address.city)).size}
    />
  </div>
);

const Stat = ({ icon: Icon, label, value }: Props) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-purple-600" />
      </div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);
