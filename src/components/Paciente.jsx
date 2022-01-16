const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:{""} <span className="font-normal normal-case">Orion</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{""} <span className="font-normal normal-case">Diego</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{""}{" "}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{""}{" "}
        <span className="font-normal normal-case">10 Diciembre 2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{""}{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          ratione sint modi harum eaque officia, sequi ipsa corporis ipsam.
          Alias quibusdam iure nihil et eligendi tenetur aperiam rem eos
          obcaecati!
        </span>
      </p>
    </div>
  );
};

export default Paciente;
