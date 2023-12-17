export default function askQuestion() {
  return (
    <div>
      <label>
        Ask Any Question{"("}Optional{")"}
        <textarea
          placeholder=""
          className="w-full p-2 border border-slate-300 rounded-lg outline-[#673ab7] text-[#673ab7]"
          rows="3"
        />
      </label>
    </div>
  );
}
