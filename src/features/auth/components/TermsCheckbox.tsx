const TermsCheckbox: React.FC = () => {
  return (
    <label className="flex items-start gap-2 cursor-pointer">
      <input type="checkbox" className="w-4 h-4 mt-1 text-purple-600 rounded" />
      <span className="text-sm text-gray-600">
        <button className="text-purple-600 hover:underline">Kullanım Koşullarını</button> ve{' '}
        <button className="text-purple-600 hover:underline">Gizlilik Politikasını</button> kabul
        ediyorum
      </span>
    </label>
  );
};

export default TermsCheckbox;
