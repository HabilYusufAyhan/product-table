import { Briefcase, Heart, Mail, MapPin, Phone, X } from 'lucide-react';

import type { UserData } from '../types/User';

interface Props {
  user: UserData;
  onMeet: (id: number, name: string) => void;
  onSkip: (id: number) => void;
  style?: React.CSSProperties;
}

export const UserRow = ({ user, onMeet, onSkip, style }: Props) => (
  <tr
    style={style}
    className="hover:bg-purple-50 transition border-b border-gray-100 md:table-row flex flex-col md:flex-row md:items-center py-4 md:py-2"
  >
    <td className="px-6 py-2 md:py-0 text-left md:w-[20%]">
      <div className="flex items-center gap-3">
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-16 h-16 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-purple-200 shrink-0"
        />
        <div>
          <h3 className="font-semibold text-gray-900 text-base md:text-lg">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-sm text-gray-500">
            {user.age} yaşında • {user.gender === 'female' ? 'Kadın' : 'Erkek'}
          </p>
        </div>
      </div>
    </td>

    <td className="px-6 py-2 md:py-0 text-left md:w-[20%]">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Mail className="w-4 h-4 text-purple-500 shrink-0" />
          <span className="truncate">{user.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Phone className="w-4 h-4 text-purple-500 shrink-0" />
          <span>{user.phone}</span>
        </div>
      </div>
    </td>

    <td className="px-6 py-2 md:py-0 text-left md:w-[15%]">
      <div className="flex items-start gap-2 text-sm text-gray-600">
        <MapPin className="w-4 h-4 text-purple-500 shrink-0 mt-1" />
        <div>
          <p className="font-semibold">{user.address.city}</p>
          <p className="text-xs">
            {user.address.state}, {user.address.country}
          </p>
        </div>
      </div>
    </td>

    <td className="px-6 py-2 md:py-0 text-left md:w-[15%]">
      <div className="flex items-start gap-2 text-sm text-gray-600">
        <Briefcase className="w-4 h-4 text-purple-500 shrink-0 mt-1" />
        <div>
          <p className="font-semibold truncate">{user.company.title}</p>
          <p className="text-xs text-gray-500 truncate">{user.company.department}</p>
          <p className="text-xs text-purple-600 mt-1 truncate">{user.university}</p>
        </div>
      </div>
    </td>

    <td className="px-6 py-2 md:py-0 text-left md:w-[15%]">
      <div className="text-sm text-gray-600 space-y-0.5">
        <p>
          <span className="font-semibold">Boy:</span> {user.height.toFixed(0)} cm
        </p>
        <p>
          <span className="font-semibold">Kilo:</span> {user.weight.toFixed(0)} kg
        </p>
        <p>
          <span className="font-semibold">Göz:</span> {user.eyeColor}
        </p>
        <p>
          <span className="font-semibold">Saç:</span> {user.hair.color}
        </p>
      </div>
    </td>

    <td className="px-6 py-2 md:py-0 text-left md:w-[15%]">
      <div className="flex items-center justify-start md:justify-center gap-2 md:gap-3 flex-wrap">
        <button
          onClick={() => onMeet(user.id, `${user.firstName} ${user.lastName}`)}
          className="flex items-center gap-2 px-3 md:px-4 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition transform hover:scale-105 text-sm"
        >
          <Heart className="w-4 h-4 shrink-0" />
          <span className="font-semibold">Tanış</span>
        </button>
        <button
          onClick={() => onSkip(user.id)}
          className="flex items-center gap-2 px-3 md:px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm"
        >
          <X className="w-4 h-4 shrink-0" />
          <span className="font-semibold">Geç</span>
        </button>
      </div>
    </td>
  </tr>
);
