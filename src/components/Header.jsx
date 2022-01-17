function Header({ toma1Valor }) {
  const variableHeader = true;
  toma1Valor(variableHeader);
  return (
    <h1 className="font-black text-5xl text-center mx-auto md:w-2/3">
      Seguimiento Pacientes {""}{" "}
      <span className="text-indigo-600">Veterinaria</span>
    </h1>
  );
}
export default Header;
