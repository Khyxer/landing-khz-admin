import { useState } from "react";

const sections = [
  {
    id: 1,
    title: "Control de cuentas",
    desc: "Controla y gestiona tus cuentas de manera eficiente, permitiendo un acceso seguro y controlado a todos tus datos.",
  },
  {
    id: 2,
    title: "Ventas rápidas",
    desc: "No te compliques con las ventas, nuestro sistema ofrece un proceso simple y rápido para realizar ventas ademas de ser intuitivo.",
  },
  {
    id: 3,
    title: "Gestión de empleados",
    desc: "Obtén una visión completa de tus empleados, administrando cuentas, otorgando permisos y controlando sus actividades.",
  },
  {
    id: 4,
    title: "Administra tu inventario",
    desc: "Administra tu inventario de manera eficiente, con una vista completa de tu inventario con acceso a crear, editar y eliminar productos.",
  },
];

export const InfoApp = () => {
  //indice para ver que sección esta viendo el usuario
  const [selectedSection, setSelectedSection] = useState(1);

  return (
    <section className="pt-36" id="producto">
      <div>
        <h1 className="text-4xl font-medium mb-4">Optimizá tu tiempo</h1>
        <p className="text-gray-500 text-lg mb-18">
          Análisis potentes de crecimiento y productos de autoservicio para{" "}
          <br />
          ayudarte a convertir, interactuar y retener a más clientes.
        </p>
      </div>

      {/* secciones */}
      <div className="flex flex-col w-full lg:flex-row gap-6">
        {sections.map((section) => (
          <div
            className="flex flex-col lg:w-fit  w-full cursor-pointer border p-3 border-gray-300 rounded-lg shadow"
            key={section.id}
            // al hacer click se selecciona la sección al id que tenga en el objeto
            onClick={() => setSelectedSection(section.id)}
            style={{
              borderColor: section.id === selectedSection && "#a6a6a6",
              transition: "all 0.1s ease-in-out",
            }}
          >
            <div
              className={`w-7 h-7 bg-white border-2 text-sm font-medium border-gray-300 rounded-full flex items-center justify-center mb-5`}
              style={{
                borderColor: section.id === selectedSection && "#a6a6a6",
                backgroundColor: section.id === selectedSection && "#27272A",
                color: section.id === selectedSection && "#ffffff",
                transition: "all 0.1s ease-in-out",
              }}
            >
              {section.id}
            </div>
            <h2 className="text-lg font-medium text-gray-700">
              {section.title}
            </h2>
            <p className="text-gray-500 text-sm ">{section.desc}</p>
          </div>
        ))}
      </div>

      {/* las imagenes se llaman igual a excepción del id que se cambia con la función de arriba */}
      <div className="mt-12 overflow-hidden rounded-xl shadow-lg">
        <img
          src={`/vistas/vista_${selectedSection}.webp`}
          alt={`Vista ${selectedSection}`}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
