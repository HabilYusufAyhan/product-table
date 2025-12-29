const RememberMe: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" className="w-4 h-4 text-purple-600 rounded" />
        <span className="text-sm text-gray-600">Beni Hatırla</span>
      </label>
      <button className="text-sm text-purple-600 hover:text-purple-700 font-semibold">
        Şifremi Unuttum
      </button>
    </div>
  );
};

export default RememberMe;
